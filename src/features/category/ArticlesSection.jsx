import { useState } from "react";
import ArticleGrid from "../../components/ArticleGrid";
import PageNums from "../../components/Pagination";
import styled from "styled-components";

function ArticlesSection({ articles }) {
  const perPage = 2;
  const [range, setRange] = useState(articles.slice(0, perPage));

  console.log(range);

  return (
    <Section>
      <ArticleGrid articles={range} />
      <PageNums
        itemsPerPage={perPage}
        itemCount={articles.length}
        setItemRange={(i, j) => setRange(articles.slice(i, j))}
      />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

export default ArticlesSection;
