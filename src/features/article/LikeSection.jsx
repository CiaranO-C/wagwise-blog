import styled from "styled-components";
import LikeButton from "./LikeButton";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../app/providers/AuthProvider";
import { ModalContext } from "../../app/providers/ModalProvider";
import { updateLikes } from "../../api/user";
import { getToken } from "../../api/utils";

function LikeSection() {
  const { user, setUser } = useContext(AuthContext);
  const { setModal } = useContext(ModalContext);
  const { id: articleId } = useParams();
  const [like, setLike] = useState(hasLiked);

  async function handleClick() {
    if (!user) return setModal("signUp");
    
    const previousState = like;
    setLike((l) => !l);

    const { token, error: tokenError } = await getToken();
    if (tokenError === "badTokens") {
      setUser(null);
      setModal("signIn");
      setLike(previousState);
      return;
    }

    const { updated, error: likeError } = await updateLikes(
      articleId,
      !like,
      token,
    );
    if (likeError) {
      setLike(previousState);
    }
  }

  function hasLiked() {
    if (!user) return null;
    console.log("in hasLiked()", user);

    return user.likes.some((userLike) => userLike.id === Number(articleId));
  }

  return (
    <Section>
      <div className="line" />
      <div className="container">
        <LikeMessage>
          <p>
            Want to see more content like this?
            <br />
            leave us a like!
          </p>
          <LikeButton like={like} handleClick={handleClick} />
        </LikeMessage>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  background-color: cornsilk;
  width: 100%;
  max-width: 1290px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

  .line {
    background-color: black;
    height: 2px;
    border-radius: 100%;
    width: 50%;
    position: absolute;
    z-index: 1;
  }
`;

const LikeMessage = styled.section`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f9d23f;
  border: 1px solid;
  padding: 15px 25px;
  border-radius: 35px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  transform: translateY(-50%);

  p {
    text-align: center;
  }
`;

export default LikeSection;
