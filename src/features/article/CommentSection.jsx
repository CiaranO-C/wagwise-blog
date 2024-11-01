import { useContext, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { AuthContext } from "../../app/providers/AuthProvider";
import styled from "styled-components";

function CommentSection({ initialComments }) {
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
      <h2 className="title">Join the conversation!</h2>
      {user && <CommentForm handleNewComment={handleNewComment} removeRecentComment={removeRecentComment} />}
      <CommentList comments={comments} />
    </Section>
  );
}

const Section = styled.section`
  align-self: stretch;
  background-color: #4e5040;
  color: white;

  .title {
    width: 100vw;
    padding: 10px 20px;
    border-bottom: 0.75px solid;
  }
`;

export default CommentSection;
