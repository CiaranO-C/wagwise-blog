import { test, vi } from "vitest";
import { render, screen, waitFor } from "../CustomRender";
import userEvent from "@testing-library/user-event";
import { mockUser } from "../home/mock-data";

beforeAll(() => {
  window.scrollTo = vi.fn();
});

describe("Header render tests", () => {
  test("Header renders with logo", () => {
    render();
    expect(screen.getByAltText("wagwise logo")).toBeInTheDocument();
  });

  test("Header renders with links", () => {
    render();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  test("Header renders with auth buttons", () => {
    render();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Get Wise" }),
    ).toBeInTheDocument();
  });
});

describe("Header user event tests", () => {
  const mockedUser = mockUser();

  test("Header welcomes signed in user", () => {
    render(undefined, { userState: mockedUser });

    expect(
      screen.getByText(`Welcome back, ${mockedUser.username}`),
    ).toBeInTheDocument();
  });

  test("Renders logout button for signed in user", () => {
    render(undefined, { userState: mockedUser });
    expect(screen.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("User can click button to open sign in modal", async () => {
    const user = userEvent.setup();
    render();
    const button = screen.getByRole("button", { name: "Sign in" });

    await user.click(button);

    //welcome back heading on sign in form
    expect(screen.getByText("Welcome back!")).toBeInTheDocument();
  });

  test("User can swap from sign in to sign up", async () => {
    const user = userEvent.setup();
    render();
    const button = screen.getByRole("button", { name: "Sign in" });

    await user.click(button);

    const switchBtn = screen.getByRole("button", { name: "Join now" });

    await user.click(switchBtn);

    expect(screen.getByText("Join the Wag Wise community")).toBeInTheDocument();
  });

  test("User can click button to open sign up modal", async () => {
    const user = userEvent.setup();
    render();
    const button = screen.getByRole("button", { name: "Get Wise" });

    await user.click(button);

    //Join heading on sign up form
    expect(screen.getByText("Join the Wag Wise community")).toBeInTheDocument();
  });

  test("User can swap from sign up to sign in", async () => {
    const user = userEvent.setup();
    render();
    const button = screen.getByRole("button", { name: "Get Wise" });

    await user.click(button);

    const buttons = screen.getAllByRole("button", { name: "Sign in" });

    //modal renders through portal, so last button in doc
    const switchBtn = buttons[buttons.length - 1];

    await user.click(switchBtn);

    expect(screen.getByText("Welcome back!")).toBeInTheDocument();
  });
});
