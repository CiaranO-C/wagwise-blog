import App from "../App";
import About from "../routes/About";
import Home from '../routes/Home';
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
      {
        path: "home",
        element: <Home />,
      }
    ],
  },
];

export default routesConfig;
