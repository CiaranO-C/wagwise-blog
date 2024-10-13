import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

function PasswordField({
  label,
  passwordData,
  handlePassword,
  inputId,
  isInvalid,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <PasswordContainer>
      <label htmlFor={inputId}>{label}</label>
      <div className="input-container">
        <input
          className={isInvalid ? "invalid" : undefined}
          type={visible ? "text" : "password"}
          name={inputId}
          id={inputId}
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
      </div>
    </PasswordContainer>
  );
}

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .input-container {
    position: relative;
  }

  .eye {
    position: absolute;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;
     top: 0;
    bottom: 0;
    right: 10px;
  }

  .invalid {
    border-color: red;

    &:focus {
      outline: none;
    }
  }
`;

export default PasswordField;