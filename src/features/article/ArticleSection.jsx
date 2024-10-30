import styled from "styled-components";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import ArticleCategories from './ArticleCategories';

function ArticleSection({ article }) {
  return (
    <Section>
        <ArticleCategories categories={article.tags} />
      <h1>{article.title}</h1>
    </Section>
  );
}

const Section = styled.section`
flex: 1;
`;

export default ArticleSection;
