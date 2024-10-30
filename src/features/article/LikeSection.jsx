import styled from "styled-components";
import LikeButton from "./LikeButton";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../app/providers/AuthProvider";
import { ModalContext } from "../../app/providers/ModalProvider";
import { updateLikes } from "../../api/user";

function LikeSection() {
  const { user } = useContext(AuthContext);
  const { setModal } = useContext(ModalContext);
  const { id: articleId } = useParams();
  const [like, setLike] = useState(hasLiked);

  async function handleClick() {
    if (!user) return setModal("signUp");
    const previousState = like;
    setLike((l) => !l);
    const { updated, error } = await updateLikes(articleId, !like);
    if (error) {
      setLike(previousState);
    }
  }

  function hasLiked() {
    if (!user) return null;
    return user.likes.some((userLike) => userLike.id === Number(articleId));
  }

  return (
    <Section>
      <LikeMessage>
        <p>
          Want to see more content like this?
          <br />
          leave us a like!
        </p>
        <LikeButton like={like} handleClick={handleClick} />
      </LikeMessage>
    </Section>
  );
}

const Section = styled.section``;

const LikeMessage = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    text-align: center;
  }
`;

export default LikeSection;
