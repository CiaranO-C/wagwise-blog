import styled from "styled-components";
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <List>
      {comments &&
        comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
    </List>
  );
}

const List = styled.ul`
li+li {
margin-top: 10px;
}
`;
export default CommentList;
