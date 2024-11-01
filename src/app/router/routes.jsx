import Article from "../../features/article/Article";
import Category from "../../features/category/Category";
import App from "../App";
import About from "../routes/About";
import ArticlePage from "../routes/ArticlePage";
import CategoryPage from "../routes/CategoryPage";
import Error from '../routes/Error';
import Home from "../routes/Home";
import Landing from "../routes/Landing";
import SearchResults from "../routes/SearchResults";
import { articleLoader, categoryLoader } from "./loaders";

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
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "article",
        element: <ArticlePage />,
        children: [
          {
            path: ":id",
            element: <Article />,
          },
        ],
      },
      {
        path: "category",
        element: <CategoryPage />,
        children: [
          {
            path: ":name",
            element: <Category />,
          },
        ],
      },
      {
        path: "error",
        element: <Error />,
      }
    ],
  },
];

export default routesConfig;
