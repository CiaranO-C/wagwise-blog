import { getArticles, getArticle } from "../../api/article";
import { getTags } from "../../api/tags";

async function homeLoader() {
  const articlesData = await getArticles();
  const tagsData = await getTags();

  if (articlesData.error || tagsData.error) {
    const error = articlesData.error || tagsData.error;
    throw new Response(null, {
      status: error || 500,
    });
  }

  const recentlyCommentedId = articlesData.articles.find(
    (article) => article._count.comments > 0,
  )?.id;

  const { article } = await getArticle(recentlyCommentedId);

  return {
    articles: articlesData.articles,
    tags: tagsData.tags,
    recentlyCommented: article,
  };
}

export { homeLoader };
