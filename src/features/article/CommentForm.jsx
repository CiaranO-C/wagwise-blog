import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../api/comment";

function CommentForm({ handleNewComment, removeRecentComment }) {
  const { id: articleId } = useParams();
  const [comment, setComment] = useState("");

  async function handlePostComment(e) {
    e.preventDefault();
    if (comment) {
      handleNewComment(comment);
      setComment("");
      const posted = await postComment(comment, articleId);
      if (posted.error) return removeRecentComment();
    }
  }

  return (
    <Form onSubmit={handlePostComment}>
      <label htmlFor="comment">Post comment</label>
      <div className="input-container">
        <input
          type="text"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button type="submit">
          <IoSend />
        </button>
      </div>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  .input-container {
    display: flex;
  }

  label {
    margin-bottom: 10px;
  }

  input {
    max-width: 30%;
    min-width: 245px;
    overflow-x: scroll;
    flex: 1;
    background: cornsilk;
    border: none;
    padding: 8px 10px;
    border-radius: 15px;
    transition: background 0.3s ease-out;

    &:focus {
      outline: none;
      background-color: #f9d23f;
    }
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: white;
    margin-left: 10px;
  }
`;
export default CommentForm;
