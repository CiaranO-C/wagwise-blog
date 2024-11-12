import { API_URL } from "./utils";

async function searchArticles(search) {
  const res = await fetch(`${API_URL}/api/articles/search${search}`);

  if (!res.ok) return false;

  const { articles } = await res.json();
  return articles;
}

async function getArticles(signal) {
  try {
    const res = await fetch(`${API_URL}/api/articles`, { signal });
    if (!res.ok) return { articles: null, error: res.status };
    const { articles } = await res.json();

    return { articles, error: null };
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch articles aborted");
    }
  }
}

async function getArticle(signal, id) {
  try {
    const res = await fetch(`${API_URL}/api/articles/${id}`, { signal });
    if (!res.ok) return { article: null, error: res.status };
    const { article } = await res.json();

    return { article, error: null };
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`Fetch article: ${id} aborted`);
    }
  }
}

export { searchArticles, getArticles, getArticle };
