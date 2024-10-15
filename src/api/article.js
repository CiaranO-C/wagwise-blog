async function searchArticles(search) {
  const res = await fetch(`/api/articles/search${search}`);
  console.log(res);

  if (!res.ok) return false;

  const { articles } = await res.json();
  return articles;
}

async function mostRecent() {
  const res = await fetch("/api/articles?limit=1");

  if (!res.ok) return false;

  const { articles } = await res.json();
  return articles;
}

export { searchArticles, mostRecent };
