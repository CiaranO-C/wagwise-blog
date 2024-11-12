import { FaComment } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import styled from "styled-components";

function ArticleCard({ article }) {
  function stripTruncate(string) {
    let stripped = string.split(/<\/?\w+[^>]*>/)[1];
    if (stripped) {
      const converted = convertHtmlEntities(stripped);
      return converted;
    }
  }

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
      "&rsquo;": "'",
      "&lsquo;": "'",
    };

    const converted = summary.replace(/&[a-zA-Z0-9#]+;/g, (match) => {
      return htmlEntitiesMap[match] || match;
    });
    return converted;
  }

  return (
    <Card>
      <h3>{article.title}</h3>
      <p className="article-body">{stripTruncate(article.body)}</p>
      <div className="info">
        <span>{new Date(article.created).toLocaleDateString()}</span>
        <span>Written by: {article.author.username}</span>
      </div>
      <div className="icons">
        <p>
          {article._count.likes}
          <IoMdHeart />
        </p>
        <p>
          {article._count.comments}
          <FaComment />
        </p>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  height: 100%;
  box-shadow:
    rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-color: cornsilk;
  border-radius: 5px;

  h3 {
    min-height: 33px;
    font-weight: 300;
    border-bottom: 0.75px solid black;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .icons {
    display: flex;
    gap: 10px;

    svg {
      height: 17px;
      width: 17px;
    }

    p {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .article-body {
    padding-left: 5px;
    border-left: 0.75px solid;
    font-size: 1em;
    margin-bottom: auto;
  }
`;

export default ArticleCard;
