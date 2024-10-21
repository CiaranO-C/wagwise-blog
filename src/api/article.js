import { API_URL } from "./utils";

async function searchArticles(search) {
  const res = await fetch(`${API_URL}/api/articles/search${search}`);
  console.log(res);

  if (!res.ok) return false;

  const { articles } = await res.json();
  return articles;
}

async function getArticles() {
  const res = await fetch(`${API_URL}/api/articles`);

  if (!res.ok) return { articles: null, error: res.status };

  const { articles } = await res.json();

  return { articles, error: null };
}

async function getArticle(id) {
  const res = await fetch(`${API_URL}/api/articles/${id}`);

  if (!res.ok) return { article: null, error: res.status };

  const { article } = await res.json();

  return { article, error: null };
}

export { searchArticles, getArticles, getArticle };
