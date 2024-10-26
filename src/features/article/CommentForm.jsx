import styled from "styled-components";
import { IoSend } from "react-icons/io5";

function CommentForm() {
  return (
    <Form>
      <div className="input-container">
        <label htmlFor="comment">Post comment</label>
        <input type="text" />
      </div>
      <button type="submit">
        <IoSend />
      </button>
    </Form>
  );
}

const Form = styled.form``;
export default CommentForm;
