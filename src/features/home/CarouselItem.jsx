import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard";

function CarouselItem({ article, dog }) {
  return (
    <Item>
      <div className="article">
        <ArticleCard article={article} />
      </div>
      <div className="frame" style={{ backgroundImage: `url(${dog})` }} />
    </Item>
  );
}

const Item = styled.div`
  flex: 0 0 100%;
  display: flex;

  .article {
    display: flex;
    flex-direction: column;
    flex: 1;

    /* override default article card styles */
    & > div {
      padding: 30px 45px;
      background-color: #4e5040;
      color: white;
      border-radius: 0px;
    }

    h3 {
      border-bottom: none;
      min-height: 0px;
    }
  }

  .frame {
    flex: 1;
    background-color: grey;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export default CarouselItem;
