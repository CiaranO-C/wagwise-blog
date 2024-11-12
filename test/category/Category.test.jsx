import { test, vi } from "vitest";
import { categoryLoader } from "../../src/app/router/loaders";
import { mockCategory, mockTags } from "../mocks/mock-data";
import CategoryPage from "../../src/app/routes/CategoryPage";
import Category from "../../src/features/category/Category";
import { render, screen, waitFor } from "../CustomRender";
import { Route } from "react-router-dom";

beforeAll(() => {
  window.scrollTo = vi.fn(); // Mock scrollTo
});

let category;

beforeEach(() => {
  let tag = mockTags(1)[0];
  category = mockCategory(tag.tagName);

  categoryLoader.mockResolvedValue(category);
});

vi.mock("../../src/app/router/loaders", () => ({
  categoryLoader: vi.fn(),
}));

function renderCategory(userState = null) {
  return render(
    <Route path="category" element={<CategoryPage />}>
      <Route path=":name" element={<Category />} />
    </Route>,
    {
      initialEntries: [`/category/${category.tagName}`],
      userState,
    },
  );
}

describe("Category page render tests", () => {
  test("Category title renders", async () => {
    renderCategory();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: category.tagName }),
      ).toBeInTheDocument();
    });
  });

  test("Category article count renders", async () => {
    renderCategory();

    await waitFor(() => {
      expect(
        screen.getByText(`total - ${category.articles.length}`),
      ).toBeInTheDocument();
    });
  });

  test("Renders page 1 of articles with no more than 2 cards", async () => {
    renderCategory();

    await waitFor(() => {
      const { articles } = category;
      for (let i = 0; i < 2; i++) {
        const article = articles[i];
        expect(screen.getByText(article.title)).toBeInTheDocument();
      }
    });
  });

  test("Renders related categories heading", async () => {
    renderCategory();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Related Categories" }),
      ).toBeInTheDocument();
    });
  });

  test("Renders search for something button", async () => {
    renderCategory();

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Search for something else!" }),
      ).toBeInTheDocument();
    });
  });
});
