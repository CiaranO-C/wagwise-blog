import { useContext } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { AuthContext } from "../../app/providers/AuthProvider";
import styled from 'styled-components';

function CommentSection({ initialComments }) {
  const { user } = useContext(AuthContext);
  return (
    <Section>
      {user && <CommentForm />}
      <CommentList comments={initialComments}/>
    </Section>
  );
}

const Section = styled.section`
align-self: start;
`

export default CommentSection;
