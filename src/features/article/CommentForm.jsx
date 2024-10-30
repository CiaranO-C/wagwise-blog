import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../api/comment";

function CommentForm() {
  const { id: articleId } = useParams();
  const [comment, setComment] = useState("");

  async function handlePostComment(e) {
    e.preventDefault();
    const posted = await postComment(comment, articleId);
    if (posted.error) return;
    //logic here to update comments list
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

  .input-container {
    display: flex;
  }
`;
export default CommentForm;
