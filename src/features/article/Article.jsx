import { useLoaderData } from "react-router-dom";

function Article() {
  const { article } = useLoaderData();

  return (
    <>
      <h1>{article.title}</h1>
    </>
  );
}

export default Article;
