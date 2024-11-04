import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard";
import { Link } from "react-router-dom";

function CarouselItem({ article, dog }) {
  return (
    <Item to={`/article/${article.id}`}>
      <div className="article">
        <ArticleCard article={article} />
      </div>
      <div className="frame" style={{ backgroundImage: `url(${dog})` }} />
    </Item>
  );
}

const Item = styled(Link)`
  flex: 0 0 100%;
  display: flex;

  .article {
    display: flex;
    flex-direction: column;
    flex: 1;

    /* override default article card styles */
    & > div {
      background-color: #4e5040;
      color: white;
      border-radius: 0px;
      padding: 30px 50px;
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

  @media only screen and (max-width: 960px) {
    .frame {
      display: none;
    }

    .info {
      flex-direction: column;
    }
  }
`;

export default CarouselItem;
