import styled from "styled-components";
import { LuDog } from "react-icons/lu";
import { PiChatThin } from "react-icons/pi";
import { Button } from "../../../components/styles/styles";

function Hottest({ comments }) {
  const commentCount = 3;

  return (
    <Div className='content'>
      <div className="comments">
        <h2>Join the conversation</h2>
        {comments.slice(0, commentCount).map((comment) => (
          <div className="comment-container" key={comment.id}>
            <span className="author">{comment.author.username}:</span>
            <span className="comment">{comment.text}</span>
          </div>
        ))}
        <button>Get involved</button>
        <div className="bubble">
          <PiChatThin />
          <LuDog />
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  justify-content: space-evenly;

  .bubble {
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    position: absolute;
    left: 0;
    transform: translate(-135%, 10px);

    & > svg:nth-child(1) {
      transform: scaleX(-1) rotate(6deg);
      height: 100%;
      width: 100%;
    }

    & > svg:nth-child(2) {
      height: 45%;
      width: 45%;
      position: absolute;
      transform: rotate(9deg);
    }

    @media screen and (max-width: 1150px) {
      & {
        display: none;
      }
    }
  }

  .comments {
    display: flex;
    height: 90%;
    flex-direction: column;
    align-items: center;
    position: relative;

    button {
      ${Button}
      margin-top: auto;
      background-color: #f9d23f;
      color: black;
      font-size: 0.7rem;
      width: max-content;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: white;
        background-color: black;
      }
    }
  }

  h2 {
    margin-bottom: 5px;
  }

  .comment-container {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: italic;
    font-size: 1rem;
    align-self: start;
    padding-left: 5px;

    .author {
      font-weight: 600;
      margin-right: 10px;
    }
  }
`;

export default Hottest;
