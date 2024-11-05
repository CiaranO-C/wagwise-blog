import { Link } from "react-router-dom";
import styled from "styled-components";

function Categories({ tags }) {
  return (
    <Div>
      <h1>Top Categories</h1>
      {tags.map((tag) => (
        <Link to={`/category/${tag.tagName}`} key={tag.tagName} className="tag">
          <p>{tag.tagName}</p>
        </Link>
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 0px;
  background-color: cornsilk;

  h1 {
    font-size: 2rem;
    border-bottom: 1px solid;
    padding-bottom: 10px;
    text-align: center;
    padding: 0px 20px 10px;
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 45px;
    padding: 5px 20px;
    transition: 0.3s ease-out;
    cursor: pointer;
    border-bottom: none;
    flex: 1;
    min-height: 45px;
  }

  .tag:hover {
    background-color: #4e5040ad;
    color: white;
    border-left: 5px solid #4e5040;
  }

  .tag + .tag {
    border-top: 0.75px solid;
  }

  @media only screen and (max-width: 600px) {
    grid-column: 1 / 5;
    grid-row: 3 / 4;

    h1 {
      padding-bottom: 30px;
    }
  }
`;

export default Categories;
