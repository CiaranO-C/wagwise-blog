import React from "react";
import { render } from "@testing-library/react";
import { ModalProvider } from "../src/app/providers/ModalProvider";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../src/app/App"; 
import MockAuthProvider from "./mocks/MockAuthProvider";

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
