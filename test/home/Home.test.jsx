import { describe, expect, vi, beforeAll, test } from "vitest";
import { render, screen, waitFor } from "../CustomRender";
import { Route } from "react-router-dom";
import Home from "../../src/app/routes/Home";
import { mockArticles, mockTags } from "../home/mock-data";
import { homeLoader } from "../../src/app/router/loaders";
import userEvent from "@testing-library/user-event";
import Article from "../../src/features/article/Article";
import ArticlePage from "../../src/app/routes/ArticlePage";
import useArticle from "../../src/features/hooks/useArticle";

beforeAll(() => {
  window.scrollTo = vi.fn(); // Mock scrollTo
});

vi.mock("../../src/app/router/loaders", () => ({
  homeLoader: vi.fn(),
}));

vi.mock("../../src/features/hooks/useArticle", () => ({
  default: vi.fn(),
}));

function renderHome(articles, tags) {
  homeLoader.mockResolvedValue({
    articles,
    tags,
  });
  return render(<Route path="home" element={<Home />} />, {
    initialEntries: ["/home"],
  });
}

describe("Home Route Tests", () => {
  test("renders the home page with spinner, re-renders with resolves articles", async () => {
    renderHome(mockArticles(), mockTags());
    expect(screen.getByTestId("spinner")).toBeVisible();

    await waitFor(() => {
      expect(homeLoader).toHaveBeenCalledTimes(1);
      expect(
        screen.getByRole("heading", { name: "Most recent article:" }),
      ).toBeInTheDocument();
    });

    //successful data fetch should update loading screen
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });

  test("Displays Most recent article", async () => {
    const articleCount = 3;
    const articles = mockArticles(articleCount);
    const tags = mockTags();
    renderHome(articles, tags);
    const renderedArticles = await screen.findAllByRole("heading", {
      name: articles[2].title,
    });

    //article at end of array is last to be created, therefore most recent
    expect(renderedArticles[0].textContent).toEqual(
      articles[articleCount - 1].title,
    );

    expect(renderedArticles[0]).toBeVisible();
  });

  test("User can click button to read most recent article", async () => {
    const user = userEvent.setup();
    const articles = mockArticles(5);
    homeLoader.mockResolvedValue({
      articles,
      tags: mockTags(),
    });

    useArticle.mockImplementation((articleId) => {
      const article = articles.find(
        (article) => article.id === Number(articleId),
      );
      return article;
    });

    render(
      <>
        <Route path="home" element={<Home />} />
        <Route path="article" element={<ArticlePage />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </>,
      {
        initialEntries: ["/home"],
      },
    );

    const link = await screen.findByRole("link", { name: "Read article" });
    // article id at end of href
    const id = link.getAttribute("href").split("/").pop();
    const expectedArticle = articles.find((a) => a.id === Number(id));
    await user.click(link);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: expectedArticle.title,
        }),
      );
    });
  });
});
