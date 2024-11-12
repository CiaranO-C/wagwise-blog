import { describe, expect, test, vi } from "vitest";
import { mockArticles, mockUser } from "../mocks/mock-data";
import useArticle from "../../src/features/hooks/useArticle";
import ArticlePage from "../../src/app/routes/ArticlePage";
import Article from "../../src/features/article/Article";
import { render, screen, waitFor } from "../CustomRender";
import { Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  window.scrollTo = vi.fn(); // Mock scrollTo
});

let articles;

beforeEach(() => {
  articles = mockArticles(1);

  useArticle.mockImplementation((articleId) => {
    const article = articles.find(
      (article) => article.id === Number(articleId),
    );
    return article;
  });
});

vi.mock("../../src/features/hooks/useArticle", () => ({
  default: vi.fn(),
}));

function renderArticle(userState = null) {
  return render(
    <Route path="article" element={<ArticlePage />}>
      <Route path=":id" element={<Article />} />
    </Route>,
    {
      initialEntries: [`/article/${articles[0].id}`],
      userState,
    },
  );
}

describe("Article page render tests", () => {
  test("Article page renders full article", async () => {
    renderArticle();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: articles[0].title }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(articles[0].body.replace(/<\/?p>/g, "")),
      ).toBeInTheDocument();
    });
  });

  test("Article page renders categories", async () => {
    renderArticle();

    await waitFor(() => {
      const tags = articles[0].tags;
      tags.forEach((tag) => {
        expect(screen.getByText(tag.tagName)).toBeInTheDocument();
      });
    });
  });

  test("Article page renders article comments", async () => {
    renderArticle();

    await waitFor(() => {
      const comments = articles[0].comments;
      comments.forEach((comment) => {
        expect(screen.getByText(comment.text)).toBeInTheDocument();
      });
    });
  });

  test("Renders join conversation button for signed out users", async () => {
    renderArticle();

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Click here to join in!" }),
      ).toBeInTheDocument();
    });
  });
});

describe("Article page user event tests", () => {
  test("Signed out user is shown sign up page up clicking join in button", async () => {
    const user = userEvent.setup();
    renderArticle();
    const button = screen.getByRole("button", {
      name: "Click here to join in!",
    });

    await user.click(button);

    expect(screen.getByText("Join the Wag Wise community")).toBeInTheDocument();
  });

  test("Signed in user is shown post comment form, and can type comment", async () => {
    const user = userEvent.setup();
    renderArticle(mockUser());

    const input = screen.getByLabelText("Post comment");
    expect(input).toBeInTheDocument();

    await user.click(input);
    await user.keyboard("testComment");
    expect(input).toHaveValue("testComment");

    await user.keyboard("{Enter}");
    expect(input).toHaveValue("");
  });
});
