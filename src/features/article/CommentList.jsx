import styled from "styled-components";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <List>
      {comments.length ? (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <p>No comments yet</p>
      )}
    </List>
  );
}

const List = styled.ul`
  padding: 10px 20px;
  min-height: 100px;

  border-bottom: 0.75px solid #9b9f7f;
  margin-bottom: 25px;

  li + li {
    margin-top: 10px;
  }

  li:last-child {
  }
`;
export default CommentList;
