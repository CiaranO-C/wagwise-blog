import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

function PasswordInput({ passwordData, handlePassword }) {
  const [visible, setVisible] = useState(false);

  return (
    <PasswordContainer>
      <label htmlFor="password">password</label>
      <input
        type={visible ? "text" : "password"}
        name="password"
        id="password"
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

const PasswordContainer = styled.div``;

export default PasswordInput;
