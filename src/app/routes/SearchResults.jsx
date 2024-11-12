import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ArticleGrid from "../../components/ArticleGrid.jsx";
import PageNums from "../../components/Pagination.jsx";
import { searchArticles } from "../../api/article.js";
import ExpandableSearch from "../../components/ExpandableSearch.jsx";
import Footer from "../../features/footer/Footer.jsx";
import Spinner from "../../components/Spinner.jsx";

function SearchResults() {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState(null);
  const perPage = 2;

  useEffect(() => {
    async function searchResultsLoader() {
      const articles = await searchArticles(location.search);
    
      setResults(articles);
      setRange(articles.slice(0, perPage));
      setLoading(false);
    }
    searchResultsLoader();
  }, [location.search]);

  if (loading)
    return (
      <Spinner
        styles={{
          gridRow: "2 / 3",
          alignSelf: "center",
          justifySelf: "center",
        }}
      />
    );

  function handleRange(i, j) {
    setRange(results.slice(i, j));
  }

  return (
    <>
      <SearchMain>
        <ExpandableSearch intialPosition={false} />
        <div className="title-container">
          <h1>Search Results</h1>
        </div>
        <ArticleGrid articles={range} />
        <PageNums
          itemsPerPage={perPage}
          itemCount={results.length}
          setItemRange={handleRange}
        />
      </SearchMain>
      <Footer />
    </>
  );
}

const SearchMain = styled.main`
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  overflow: scroll;

  h1 {
    border-bottom: 0.75px solid;
  }

  .title-container {
    margin-top: 35px;
    margin-bottom: 20px;
    max-width: 1200px;
    width: 100%;
  }
`;
export default SearchResults;
