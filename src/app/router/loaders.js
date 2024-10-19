import { getArticles, getArticle } from "../../api/article";
import { getTag, getTags } from "../../api/tags";

function throwResponse(error) {
  throw new Response(null, { status: error || 500 });
}

async function homeLoader() {
  const articlesData = await getArticles();
  const tagsData = await getTags();

  const recentlyCommentedId = articlesData.articles.find(
    (article) => article._count.comments > 0,
  )?.id;
  const articleData = await getArticle(recentlyCommentedId);

  if (articlesData.error || tagsData.error || articleData.error) {
    const error = articlesData.error || tagsData.error || articleData.error;
    throwResponse(error);
  }

  return {
    articles: articlesData.articles,
    tags: tagsData.tags,
    recentlyCommented: articleData.article,
  };
}

async function articleLoader({ params }) {
  const { id } = params;
  const articleData = await getArticle(id);

  if (articleData.error) throwResponse(articleData.error);

  return { article: articleData.article };
}

async function categoryLoader({ params }) {
  const { name } = params;
  const catData = await getTag(name);
  return { category: catData.tag };
}

export { homeLoader, articleLoader, categoryLoader };
