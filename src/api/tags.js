async function getTags() {
  const res = await fetch("/api/tags");

  if (!res.ok) return { tags: null, error: res.status };

  const { tags } = await res.json();

  return { tags, error: null };
}

export { getTags };
