import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

function ConfirmPasswordInput({ match, passwordData, handlePassword }) {
  const [visible, setVisible] = useState(false);

  return (
    <PasswordContainer>
      <label htmlFor="confirmPassword">confirm password</label>
      <input
        className={passwordData ? match : undefined}
        type={visible ? "text" : "password"}
        name="confirmPassword"
        id="confirmPassword"
        onChange={handlePassword}
        value={passwordData}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="eye"
      >
        {visible ? <FaEyeSlash /> : <FaEye />}
      </button>
    </PasswordContainer>
  );
}

const PasswordContainer = styled.div`
  .invalid {
    border-color: red;
  }
`;

export default ConfirmPasswordInput;
