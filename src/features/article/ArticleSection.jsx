import styled from "styled-components";
import parse from "html-react-parser";
import ArticleCategories from "./ArticleCategories";
import { sanitize } from "./utils";

function ArticleSection({ article }) {
  return (
    <Section>
      <ArticleHeader>
        <ArticleCategories categories={article.tags} />
        <h1 className="title">{article.title}</h1>
        <div className="line" />
      </ArticleHeader>
      <div className="body">{parse(sanitize(article.body))}</div>
    </Section>
  );
}

const Section = styled.section`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    width: 30%;
    border-top: 1px solid white;
    position: relative;
    top: 20px;
  }

  .title {
    text-align: center;
    color: white;
    padding: 10px 0px;
    width: fit-content;
  }

  .body {
    max-width: 1290px;
    /*font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;*/
    display: grid;
    padding-top: 40px;
    grid-template-columns: 1fr 1fr;
    background-color: cornsilk;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;

    * {
      font-family: inherit;
    }

    h3 {
      font-weight: 300;
      font-size: 1.5rem;
    }

    .intro {
      grid-row: 1 / 2;
      grid-column: 1 / -1;
      max-width: 85ch;
      text-align: center;
      justify-self: center;
      line-height: 1.4;
      font-size: 1.1rem;
      padding: 0px 20px 35px;
    }

    .reasoning-container,
    .requirements-container {
      grid-row: 2 / 3;
      display: flex;
      flex-direction: column;
      gap: 25px;
      align-items: center;
      padding: 30px;
      border-top: 0.75px solid;

      li {
        margin-left: 20px;
      }

      h3 {
        text-align: center;
        text-decoration: underline;
      }

      li + li {
        margin-top: 10px;
      }
    }

    .reasoning-container {
      grid-column: 1 / 2;
    }

    .requirements-container {
      grid-column: 2 / 3;
      border-left: 0.75px solid;
    }

    .guide-container {
      position: relative;
      grid-row: 3 / 4;
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      background-color: #4e5040;
      padding: 30px 65px 45px;
      color: cornsilk;
      max-height: fit-content;

      &::before {
        content: "";
        position: absolute;
        height: 75%;
        width: 0.5px;
        background-color: cornsilk;
        bottom: 45px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }

      h3 {
        text-align: center;
        text-decoration: underline;
        margin-bottom: 30px;
      }

      ol {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
      }

      ol li:nth-child(1),
      ol li:nth-child(2),
      ol li:nth-child(3) {
        grid-column: 1;
      }

      ol li {
        grid-column: 2;
      }

      li {
        padding: 20px 20px 20px 0px;
        margin-left: 40px;

        p {
          margin-top: 5px;
        }
      }
    }

    .challenges-container,
    .tips-container {
      grid-row: 4 / 5;
      display: flex;
      flex-direction: column;
      gap: 25px;
      align-items: center;
      padding: 30px;
      border-bottom: 0.75px solid;

      li {
        margin-left: 20px;
      }

      h3 {
        text-align: center;
        text-decoration: underline;
      }

      li + li {
        margin-top: 10px;
      }
    }

    .challenges-container {
      grid-column: 1 / 2;
    }

    .tips-container {
      grid-column: 2 / 3;
      border-left: 0.75px solid;
    }

    .conclusion-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid-column: 1 / -1;
      padding: 40px;
      text-align: center;
      margin-bottom: 40px;

      h3 {
        margin-bottom: 10px;
        text-decoration: underline;
      }

      p {
        max-width: 85ch;
        font-size: 1.1rem;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .body {
      .reasoning-container,
      .requirements-container,
      .guide-container,
      .challenges-container,
      .tips-container {
        grid-column: 1 / -1;
      }

      .requirements-container {
        grid-row: 3 / 4;
        background-color: #9b9f7f;
        color: cornsilk;
      }

      .guide-container {
        grid-row: 4 / 5;
        padding: 30px 20px 45px;

        &::before {
          content: none;
        }

        ol {
          display: block;
        }
      }

      .challenges-container {
        grid-row: 5 / 6;
      }

      .tips-container {
        grid-row: 6 / 7;
        background-color: #9b9f7f;
        color: white;
      }
    }
  }
`;

const ArticleHeader = styled.header`
  background-color: #4e5040;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  padding: 40px 20px 50px;
`;

export default ArticleSection;
