import styled from "styled-components";
import { timeElapsed } from "./utils";

function Comment({ comment }) {
  console.log(comment);
  const { id, text, authorId, articleId, created, review, author } = comment;

  return (
    <Li>
      <div className="info">
        <div className="user-bubble">{author.username[0].toUpperCase()}</div>
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

  .user-bubble {
    text-align: center;
    line-height: 1.8;
    background-color: grey;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .text {
    display: flex;

    p {
      line-height: 1.7;
    }
  }

  .line {
    width: 25px;
    border-bottom-left-radius: 5px;
    border-bottom: 0.75px solid;
    border-left: 0.75px solid;
    margin-left: 15px;
    height: 10px;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

export default Comment;
