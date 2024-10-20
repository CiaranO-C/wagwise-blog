import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard";
import dogMain from "../../assets/dogs/dog-main.jpg";

function MostRecent({ article }) {
  return (
    <Section>
      <div className="article">
        <h1>Most recent article:</h1>
        <ArticleCard article={article} />
      </div>
      <div
        className="frame"
      />
    </Section>
  );
}

const Section = styled.section`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  
  display: flex;
  background-color: cornsilk;
  overflow: hidden;
  height: 400px;

  h1 {
    margin: 20px 20px 0px;
    border-bottom: 0.75px solid;
    font-size: 2rem;
  }

  div {
    box-shadow: none;
  }

  .article {
    display: flex;
    flex-direction: column;
    flex: 1;

    /* override default article card styles */
    & > div {
      padding: 20px;
    }

    h3 {
      border-bottom: none;
      min-height: 0px;
    }
  }

  .frame {
    flex: 1;
    background-color: grey;
    background-image: url(${dogMain});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export default MostRecent;
