import React from "react";
import { render } from "@testing-library/react";
import { AuthProvider } from "../src/app/providers/AuthProvider";
import { ModalProvider } from "../src/app/providers/ModalProvider";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../src/app/App"; // Update the path as needed
import MockAuthProvider from "./home/MockAuthProvider";

const ProvidersRouter = ({ children, initialEntries = ["/"], userState }) => {
  return (
    <MockAuthProvider value={userState}>
      <ModalProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path="/" element={<App />}>
              {children}
            </Route>
          </Routes>
        </MemoryRouter>
      </ModalProvider>
    </MockAuthProvider>
  );
};

const customRender = (ui, { initialEntries, userState, ...options } = {}) =>
  render(ui, {
    wrapper: (props) => (
      <ProvidersRouter {...props} initialEntries={initialEntries} userState={userState} />
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
