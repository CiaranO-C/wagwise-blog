import styled from "styled-components";
import { timeElapsed } from "./utils";
import UserBubble from "./UserBubble";

function Comment({ comment }) {
  const { text, created, author } = comment;

  return (
    <Li>
      <div className="info">
        <UserBubble username={author.username} />
        <span>{author.username}</span>
        <span>{timeElapsed(created)}</span>
      </div>
      <div className="text">
        <div className="line" />
        <p>{text}</p>
      </div>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  flex-direction: column;

  .info {
    display: flex;
    align-items: center;

    span:nth-child(2) {
      font-weight: 500;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      margin: 0px 10px 0px 5px;
    }

    span:nth-child(3) {
      font-size: 0.8rem;
    }
  }

  .text {
    display: flex;

    p {
      line-height: 1.7;
    }
  }

  .line {
    color: #f9d23f;
    width: 25px;
    border-bottom-left-radius: 10px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    margin-left: 15px;
    height: 10px;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

export default Comment;
