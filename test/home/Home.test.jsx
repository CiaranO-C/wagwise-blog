import { describe, expect, vi, beforeAll, test } from "vitest";
import { render, screen, waitFor, within } from "../CustomRender";
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

let articles, tags, user;

beforeEach(() => {
  articles = mockArticles(20);
  tags = mockTags(8);
  user = userEvent.setup();

  homeLoader.mockResolvedValue({
    articles,
    tags,
  });

  useArticle.mockImplementation((articleId) => {
    const article = articles.find(
      (article) => article.id === Number(articleId),
    );
    return article;
  });
});

vi.mock("../../src/app/router/loaders", () => ({
  homeLoader: vi.fn(),
}));

vi.mock("../../src/features/hooks/useArticle", () => ({
  default: vi.fn(),
}));

function renderHome(articles, tags) {
  /* homeLoader.mockResolvedValue({
    articles,
    tags,
  });*/
  return render(<Route path="home" element={<Home />} />, {
    initialEntries: ["/home"],
  });
}

describe("Home route rendering tests", () => {
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
    //index value used to calc dateSinceToday creation date, therefore [0] most recent
    const mostRecent = articles[0];
    renderHome();
    await waitFor(() => {
      const headings = screen.getAllByRole("heading");
      const mostRecentHeading = headings[0];
      const articleHeading = headings[1];
      expect(mostRecentHeading).toHaveTextContent("Most recent article:");
      expect(articleHeading).toHaveTextContent(mostRecent.title);
      expect(mostRecentHeading && articleHeading).toBeVisible();
    });
  });

  test("Displays clickables under most recent card", async () => {
    renderHome();
    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Read article" })).toBeVisible();
      expect(
        screen.getByRole("button", { name: "Search for something else?" }),
      ).toBeVisible();
    });
  });

  test("Comment list displays recent comments, list no longer than 4", async () => {
    renderHome();
    await waitFor(() => {
      const comments = screen.getAllByText(/^comment\d+$/);
      comments.forEach((comment) => {
        //not immediately visible due to animation
        expect(comment).toBeInTheDocument();
      });
      expect(comments.length).toBeLessThanOrEqual(4);
    });
  });

  test("Page divider renders titles, and call to action button", async () => {
    renderHome();
    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: "Join the conversation",
        }),
      ).toBeVisible();
      expect(
        screen.getByRole("heading", {
          name: "more training tips below!",
        }),
      ).toBeVisible();
      expect(
        screen.getByRole("button", { name: "Get involved" }),
      ).toBeVisible();
    });
  });

  test("Renders Top Categories section title", async () => {
    renderHome();
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Top Categories" }),
      ).toBeVisible();
    });
  });

  test("Renders Top 6 Categories list", async () => {
    renderHome();
    await waitFor(() => {
      const topTags = screen.getAllByRole("link", { name: /^tag\d+$/ });
      expect(topTags.length).toBeLessThanOrEqual(6);
      topTags.forEach((tag) => {
        expect(tag).toBeVisible();
      });
    });
  });

  test("Renders Most Popular carousel with 3 articles", async () => {
    renderHome();
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Most popular" }),
      ).toBeVisible();
      const carouselContainer = screen.getByTestId("carouselSection");
      const popularArticles = articles
        .sort((a, b) => b._count.likes - a._count.likes)
        .slice(0, 3);
      expect(carouselContainer).toBeVisible();
      popularArticles.forEach((article) => {
        const container = within(carouselContainer);
        expect(container.getByText(article.title)).toBeInTheDocument();
      });
    });
  });
});

describe("Home route user event tests", () => {
  test("User can click button to read most recent article", async () => {
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

  test("User can click button to open expandable search", async () => {
    renderHome();
    
    const openSearch = await screen.findByRole("button", {
      name: "Search for something else?",
    });

    const search = screen.getByRole("searchbox");
    const searchContainer = screen.getByTestId("searchContainer");
    expect(searchContainer).toContainElement(search);

    expect(searchContainer).not.toHaveClass("open");

    await user.click(openSearch);

    expect(searchContainer).toHaveClass("open");
  });
});
