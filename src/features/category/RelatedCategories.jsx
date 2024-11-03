import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";

function RelatedCategories({ current, articles }) {
  const openSearch = useOutletContext();
  const RelatedCategories = useMemo(() => {
    const tagCounts = {};
    articles.forEach((article) => {
      article.tags.forEach((tag) => {
        if (tag.tagName !== current)
          tagCounts[tag.tagName] = (tagCounts[tag.tagName] || 0) + 1;
      });
    });

    const sorted = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    return sorted;
  }, [articles, current]);

  return (
    <>
      {RelatedCategories.length > 0 && (
        <RelatedContainer>
          <h2>Related Categories</h2>
          {RelatedCategories.map((name, index) => (
            <Link to={`/category/${name[0]}`} key={index}>
              {name[0]}
            </Link>
          ))}
        </RelatedContainer>
      )}
      <SearchButton onClick={openSearch}>
        Search for something else!
      </SearchButton>
    </>
  );
}

const SearchButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  min-height: 50px;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;

  transition:
    background 0.3s ease-out,
    color 0.3s ease-out;

  &:hover {
    background-color: #f9d23f;
    color: black;
  }
`;

const RelatedContainer = styled.div`
  display: flex;
  background-color: #4e5040;
  min-height: 100px;
  align-items: center;
  color: white;
  padding: 20px;

  h2 {
  border-right: 0.75px solid;
  padding-right: 20px;
  margin-right: 20px;
  }

  a {
    color: white;
    border: transparent;

    &:hover {
    border-bottom: 0.75px solid;
    }
  }

  a + a {
  margin-left: 15px;
  }
`;

export default RelatedCategories;
