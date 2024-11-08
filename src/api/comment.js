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

    return { posted, error: null };
  } catch (error) {
    console.error(error);
  }
}

async function deleteComment(id, token) {
  try {
    const res = await fetch(`${API_URL}/api/user/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return { deleted: false, error: res.status };

    const { deleted } = await res.json();

    return { deleted, error: null };
  } catch (error) {
    console.error(error);
  }
}

export { postComment, deleteComment };
