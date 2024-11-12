import { Route } from "react-router-dom";
import About from "../../src/app/routes/About";
import { render, screen } from "../CustomRender";
import { vi } from 'vitest';

beforeAll(() => {
  window.scrollTo = vi.fn(); 
});

test("renders the About page", () => {
  render(<Route path="about" element={<About />} />, {
    initialEntries: ["/about"],
  });
  expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
});
