import App from "../App";
import About from "../routes/About";
import Landing from "../routes/Landing";

const routesConfig = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routesConfig;
