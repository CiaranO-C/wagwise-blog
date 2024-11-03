import { Link } from "react-router-dom";
import styled from "styled-components";

function ArticleCategories({ categories }) {
  return (
    <Div>
      {categories.map((cat) => (
        <Link to={`/category/${cat.tagName}`} key={cat.tagName}>
          {cat.tagName}
        </Link>
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4e5040;
  gap: 15px;

  a {
    color: cornsilk;
    border-color: transparent;

    &:hover {
      border-color: cornsilk;
    }
  }
`;

export default ArticleCategories;
