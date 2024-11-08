import { useState } from "react";
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import styled from "styled-components";

function DeleteCommentBtn({ comment, handleDelete }) {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      {!confirm && (
        <Button onClick={() => setConfirm(true)}>
          <AiOutlineDelete />
          <AiFillDelete />
        </Button>
      )}
      {confirm && (
        <ConfirmContainer>
          <button onClick={() => setConfirm(false)}>
            <IoIosClose />
          </button>
          <button onClick={() => handleDelete(comment)}>
            <IoIosCheckmark />
          </button>
        </ConfirmContainer>
      )}
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;

  svg {
    pointer-events: none;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  svg:nth-child(1) {
    z-index: 1;
  }

  svg:nth-child(2) {
    transition:
      opacity 0.2s ease-out,
      transform 0.2s ease-out;
    z-index: 2;
    opacity: 0;
  }

  &:hover {
    svg:nth-child(2) {
      opacity: 1;
    }
  }
`;

const ConfirmContainer = styled.div`
  height: 25px;
  width: 50px;
  display: flex;

  button {
    height: 100%;
    width: 50%;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      transition:
        transform 0.2s ease-out,
        color 0.2s ease-out;
      height: 100%;
      width: 100%;
      pointer-events: none;
    }

    &:hover,
    &:active {
      color: #f9d23f;

      svg {
        transform: scale(1.1);
      }
    }
  }
`;

export default DeleteCommentBtn;
