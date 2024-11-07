import { useEffect, useState } from "react";
import { getArticle } from "../../api/article";
import { useNavigate } from "react-router-dom";

function useArticle(articleId) {
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchArticle() {
      const articleData = await getArticle(controller.signal, articleId);
      if (articleData) {
        const { article, error } = articleData;
        if (error) {
          return navigate("/error", {
            state: articleData.error,
            replace: true,
          });
        }
        setArticle(article);
      }
    }

    if (!article && articleId) {
      fetchArticle();
    }

    return () => {
      controller.abort();
    };
  }, [article, articleId, navigate]);

  return article;
}

export default useArticle;
