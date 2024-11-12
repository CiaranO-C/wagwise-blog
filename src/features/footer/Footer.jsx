import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <MainFooter>
      <a
        href="https://wagwise-cms.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Admin site
      </a>
      <a
        className="github-link"
        href="https://github.com/CiaranO-C/wagwise-blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </MainFooter>
  );
}

const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.75px solid #6b743d;
  background-color: #b8c671;
  min-height: 40px;
  width: 100vw;
  margin-top: auto;
  grid-row: 3/4;

  a {
    font-size: 0.8rem;
    color: #6b743d;
    display: flex;
    border-bottom: transparent;
    transition: 0.3s ease-out;
  }

  a + a {
    border-left: 0.75px solid;
    padding-left: 10px;
    margin-left: 10px;
  }

  a:hover {
    color: black;
    border-bottom: transparent;
  }

  svg {
    height: 25px;
    width: 25px;
  }
`;
export default Footer;
