import styled from "styled-components";
import { LuDog } from "react-icons/lu";
import { PiDogDuotone } from "react-icons/pi";
import { PiChatThin } from "react-icons/pi";
import { Button } from "../../../components/styles/styles";
import { useContext } from "react";
import { AuthContext } from "../../../app/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../../app/providers/ModalProvider";

function Hottest({ id, comments }) {
  const { user } = useContext(AuthContext);
  const { setModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const commentCount = 3;

  function handleClick() {
    //only users can comment, so redirect to signup
    if (!user) return setModal("signUp");

    //otherwise nav to article page
    navigate(`/article/${id}`);
  }

  return (
    <Div className="content">
      <div className="bubble-container">
        <div className="bubble one">
          <PiChatThin />
          <LuDog />
        </div>
        <div className="bubble two">
          <PiChatThin />
          <PiDogDuotone />
        </div>
      </div>
      <div className="comments">
        {comments.slice(0, commentCount).map((comment) => (
          <div className="comment-container" key={comment.id}>
            <span className="author">{comment.author.username}:</span>
            <span className="comment">{comment.text}</span>
          </div>
        ))}
      </div>
      <div className="title">
        <h2>
          Join the
          <br />
          conversation
        </h2>
        <button onClick={handleClick}>Get involved</button>
      </div>
    </Div>
  );
}

const Div = styled.div`
  justify-content: space-evenly;
  align-items: center;

  .bubble-container {
    position: relative;
    width: 90px;
    height: 100%;

    @media screen and (max-width: 1150px) {
      & {
        display: none;
      }
    }
  }

  .bubble {
    position: absolute;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;

    & > svg:nth-child(1) {
      height: 100%;
      width: 100%;
    }

    & > svg:nth-child(2) {
      height: 45%;
      width: 45%;
      position: absolute;
      transform: rotate(3deg);
    }

    &.one {
      bottom: 0;
      transform: translate(-29px, -6px) rotate(351deg);
    }

    &.two {
    top: 0;
    transform: scaleX(-1) translate(-23px, -9px) rotate(340deg);
    }
  }

  .comments {
    display: flex;
    height: 90%;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media screen and (max-width: 845px) {
      & {
        display: none;
      }
    }
  }

  .title {
    display: flex;
    align-items: stretch;
    flex-direction: column;

    button {
      ${Button}
      background-color: #f9d23f;
      color: black;
      font-size: 0.7rem;
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
