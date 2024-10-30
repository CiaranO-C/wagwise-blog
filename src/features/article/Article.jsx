import { useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle";
import Spinner from "../../components/Spinner";
import CommentSection from "./CommentSection";
import { useContext } from "react";
import { AuthContext } from "../../app/providers/AuthProvider";
import ArticleSection from "./ArticleSection";
import LikeSection from "./LikeSection";

function Article() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const article = useArticle(id);

  if (!article)
    return <Spinner styles={{ marginTop: "auto", placeSelf: "center" }} />;

  return (
    <>
      {user && <LikeSection />}
      <ArticleSection article={article} />
      <CommentSection initialComments={article.comments} />
    </>
  );
}

export default Article;
