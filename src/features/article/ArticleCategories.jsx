import { Link } from "react-router-dom";
import styled from "styled-components";

function ArticleCategories({ categories }) {
  return (
    <Div>
      {categories.map((cat) => (
        <Link key={cat.tagName}>{cat.tagName}</Link>
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: red;

    &:hover {
      border-color: red;
    }
  }
`;

export default ArticleCategories;
