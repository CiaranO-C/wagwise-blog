import { API_URL } from "./utils";

async function getTags(signal) {
  try {
    const res = await fetch(`${API_URL}/api/tags`, { signal });
    if (!res.ok) return { tags: null, error: res.status };
    const { tags } = await res.json();

    return { tags, error: null };
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch tags aborted");
    }
  }
}

async function getTag(tagName, signal) {
  try {
    const res = await fetch(`${API_URL}/api/tags/${tagName}`, { signal });

    if (!res.ok) return { tag: null, error: res.status };

    const { tag } = await res.json();

    return { tag, error: null };
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`Fetch tag: ${tagName} aborted`);
    }
  }
}

export { getTags, getTag };
