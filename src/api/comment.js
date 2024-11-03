import { API_URL } from "./utils";

async function postComment(comment, articleId, token) {
  try {
    const res = await fetch(`${API_URL}/api/articles/${articleId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text: comment,
      }),
    });
    if (!res.ok) return { posted: false, error: res.status };

    const { comment: posted } = await res.json();
    console.log(posted);

    return { posted, error: null };
  } catch (error) {
    console.error(error);
  }
}

export { postComment };
