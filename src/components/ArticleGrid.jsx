import { Link } from "react-router-dom";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

function ArticleGrid({ children, articles }) {
  return (
    <ArticleGridSection>
      {children}
      {articles.length ? (
        articles.map((article) => (
          <Link key={article.id} to={`/article/${article.id}`}>
            <ArticleCard article={article} />
          </Link>
        ))
      ) : (
        <h2 className="empty-message">No articles found</h2>
      )}
    </ArticleGridSection>
  );
}

const ArticleGridSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 15px;
  max-width: 1200px;

  .empty-message {
    color: white;
    font-size: 2rem;
    font-weight: 100;
    align-self: start;
    justify-self: center;
    grid-column: 1 / -1;
  }

  a > div {
    transition: background-color 0.3s ease-out;
  }

  a:hover {
    border-color: transparent;

    & > div {
      background-color: #fffef9;
    }
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export default ArticleGrid;
