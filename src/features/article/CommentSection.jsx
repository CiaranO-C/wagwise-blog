import { useContext, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { AuthContext } from "../../app/providers/AuthProvider";
import styled from "styled-components";
import { ModalContext } from "../../app/providers/ModalProvider";

function CommentSection({ initialComments }) {
  const { setModal } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState(initialComments);

  function handleNewComment(comment) {
    setComments((prev) => [
      {
        id: crypto.randomUUID(),
        text: comment,
        author: { username: user.username },
        created: new Date().toISOString(),
      },
      ...prev,
    ]);
  }

  function removeRecentComment() {
    setComments((current) => current.slice(1));
  }

  return (
    <Section>
      {user ? (
        <h2 className="title">Join the conversation!</h2>
      ) : (
        <button className="joinBtn" onClick={() => setModal("signUp")}>
          Click here to join in!
        </button>
      )}
      {user && (
        <CommentForm
          handleNewComment={handleNewComment}
          removeRecentComment={removeRecentComment}
        />
      )}
      <CommentList comments={comments} />
    </Section>
  );
}

const Section = styled.section`
  align-self: stretch;
  background-color: #4e5040;
  color: white;

  .title,
  .joinBtn {
    color: white;
    font-family: inherit;
    width: 100vw;
    padding: 10px 20px;
    border: none;
    border-bottom: 0.75px solid;
    text-align: start;
  }

  .joinBtn {
    font-size: 1.2rem;
    background-color: black;
    transition: background 0.3s ease-out, border 0.3s ease-out;
    cursor: pointer;

    &:hover {
    background-color: #f9d23f;
    color: black;
    }
  }
`;

export default CommentSection;
