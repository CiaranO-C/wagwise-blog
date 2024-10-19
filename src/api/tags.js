async function getTags() {
  const res = await fetch("/api/tags");

  if (!res.ok) return { tags: null, error: res.status };

  const { tags } = await res.json();

  return { tags, error: null };
}

async function getTag(tagName) {
  const res = await fetch(`/api/tags/${tagName}`);

  if (!res.ok) return { tag: null, error: res.status };

  const { tag } = await res.json();

  return { tag, error: null };
}

export { getTags, getTag };
