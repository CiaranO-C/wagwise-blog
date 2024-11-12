import { describe, expect, vi, beforeAll } from "vitest";
import { render, screen } from "./CustomRender";
import { Route } from "react-router-dom";
import Landing from "../src/app/routes/Landing";
import userEvent from "@testing-library/user-event";
import Home from "../src/app/routes/Home";
import { homeLoader } from "../src/app/router/loaders";
import { mockArticles, mockTags } from "./mocks/mock-data";


beforeAll(() => {
  window.scrollTo = vi.fn(); // Mock scrollTo
});

vi.mock("../src/app/router/loaders", () => ({
  homeLoader: vi.fn(),
}));

describe("App Component Render Tests", () => {
  test("Renders the Landing component as index route", () => {
    render(<Route index element={<Landing />} />, {
      initialEntries: ["/"],
    });

    expect(
      screen.getByRole("heading", { name: "Empowering Owners & Dogs" }),
    ).toBeInTheDocument();
  });

  test("Renders link to home page", () => {
    render(<Route index element={<Landing />} />, {
      initialEntries: ["/"],
    });

    expect(
      screen.getByRole("link", { name: "Start Learning" }),
    ).toBeInTheDocument();
  });
});

describe("App component user event tests", () => {
  const articles = mockArticles(20);
  const tags = mockTags(8);

  homeLoader.mockResolvedValue({
    articles,
    tags,
  });
  const user = userEvent.setup();

  test("User can click link to home page", async () => {
    render(
      <>
        <Route index element={<Landing />} />{" "}
        <Route path="home" element={<Home />} />{" "}
      </>,
      {
        initialEntries: ["/"],
      },
    );

    const link = screen.getByRole("link", { name: "Start Learning" });

    await user.click(link);

    //home route should display most recent article heading
    expect(
      await screen.findByRole("heading", { name: "Most recent article:" }),
    );
  });
});
