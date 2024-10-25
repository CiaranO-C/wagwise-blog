import { useEffect, useState } from "react";
import { getArticle } from '../../api/article';


function useArticle(articleId) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchArticle() {
      const articleData = await getArticle(controller.signal, articleId);
      if (articleData?.article) {
        setArticle(articleData.article);
      }
    }

    if (!article) {
      fetchArticle();
    }

    return () => {
      controller.abort();
    };
  }, [article, articleId]);

  return article;
}

export default useArticle;
