import { Link } from "react-router-dom";
import styled from "styled-components";

function ArticleGrid({ children, articles }) {
  function convertHtmlEntities(summary) {
    if (typeof summary !== "string") {
      console.error("Expected a string but got:", typeof summary);
      return summary;
    }
    const htmlEntitiesMap = {
      "&quot;": '"',
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&apos;": "'",
    };

    const converted = summary.replace(/&[a-zA-Z0-9#]+;/g, (match) => {
      return htmlEntitiesMap[match] || match;
    });
    return converted;
  }

  function stripTruncate(string) {
    let stripped = string.split(/<\/?\w+[^>]*>/)[1];
    if (stripped) {
      const converted = convertHtmlEntities(stripped);
      return converted;
    }
  }

  return (
    <ArticleGridSection>
      {children}
      {articles.length ? (
        articles.map((article) => (
          <Link key={article.id} to={`/admin/articles/${article.id}`}>
            <ArticleCard>
              <h3>{article.title}</h3>
              <p className="article-body">{stripTruncate(article.body)}</p>
              <div className="info">
                <span>{new Date(article.created).toLocaleDateString()}</span>
                <span>Written by: {article.author.username}</span>
              </div>
            </ArticleCard>
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

  .empty-message {
    color: white;
    font-size: 2rem;
    font-weight: 100;
    align-self: start;
    justify-self: center;
    grid-column: 1 / -1;
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;

  h3 {
    min-height: 60px;
    font-weight: 300;
    border-bottom: 0.75px solid black;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .article-body {
    font-size: 1em;
    flex: 1;
  }
`;

export default ArticleGrid;
