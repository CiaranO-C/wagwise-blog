import styled from "styled-components";

function UserBubble({ username }) {
  return <Bubble>{username[0].toUpperCase()}</Bubble>;
}

const Bubble = styled.div`
  user-select: none;
  text-align: center;
  line-height: 1.8;
  background-color: #f9d23f;
  color: black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
export default UserBubble;
