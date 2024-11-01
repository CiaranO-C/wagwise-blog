import { getArticles, getArticle } from "../../api/article";
import { getTag, getTags } from "../../api/tags";

function throwResponse(error) {
  throw new Response(null, { status: error || 500 });
}

async function homeLoader(signal) {
  const [articlesData, tagsData] = await Promise.all([
    getArticles(signal),
    getTags(signal),
  ]);

  if (articlesData?.error || tagsData?.error) {
    const error = articlesData.error || tagsData.error;
    throwResponse(error);
  }

  if (signal.aborted) {
    return null;
  }

  return {
    articles: articlesData.articles,
    tags: tagsData.tags,
  };
}

async function articleLoader(signal, id) {
  const articleData = await getArticle(signal, id);

  if (articleData?.error) throwResponse(articleData.error);

  if (signal.aborted) {
    return null;
  }

  return { article: articleData.article };
}

async function categoryLoader(name, signal) {
  const catData = await getTag(name, signal);

  if (signal.aborted) {
    return null;
  }

  return catData.tag;
}

export { homeLoader, articleLoader, categoryLoader };
