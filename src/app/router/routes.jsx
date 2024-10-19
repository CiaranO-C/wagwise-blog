import Article from "../../features/article/Article";
import Category from "../../features/category/Category";
import App from "../App";
import About from "../routes/About";
import ArticlePage from "../routes/ArticlePage";
import CategoryPage from "../routes/CategoryPage";
import Home from "../routes/Home";
import Landing from "../routes/Landing";
import SearchResults from "../routes/SearchResults";
import { articleLoader, categoryLoader, homeLoader } from "./loaders";

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
        loader: homeLoader,
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
            loader: articleLoader,
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
            loader: categoryLoader,
          },
        ],
      },
    ],
  },
];

export default routesConfig;
