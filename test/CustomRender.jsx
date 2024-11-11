/*import React from "react";
import { render } from "@testing-library/react";
import { AuthProvider } from "../src/app/providers/AuthProvider";
import { ModalProvider } from "../src/app/providers/ModalProvider";
import routesConfig from '../src/app/router/routes';

const AllTheProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };*/

import React from "react";
import { render } from "@testing-library/react";
import { AuthProvider } from "../src/app/providers/AuthProvider";
import { ModalProvider } from "../src/app/providers/ModalProvider";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../src/app/App"; // Update the path as needed

const ProvidersRouter = ({ children, initialEntries = ["/"] }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path="/" element={<App />}>
              {children}
            </Route>
          </Routes>
        </MemoryRouter>
      </ModalProvider>
    </AuthProvider>
  );
};

const customRender = (ui, { initialEntries, ...options } = {}) =>
  render(ui, {
    wrapper: (props) => (
      <ProvidersRouter {...props} initialEntries={initialEntries} />
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
