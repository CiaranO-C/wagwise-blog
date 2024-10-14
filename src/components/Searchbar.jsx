import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function Search({ inputRef }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (search) {
      const query = new FormData(e.target).get("query");
      return navigate(`/search?query=${query}`, {
        state: { referrer: location.pathname, previousQuery: location.search },
      });
    }
  }

  return (
    <SearchForm onSubmit={handleSearch}>
      <input
        ref={inputRef}
        onChange={({ target }) => setSearch(target.value)}
        name="query"
        placeholder="search article..."
      />
      <button type="submit">
        <CiSearch />
      </button>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  font-size: 0.8rem;
  flex: 1;
  align-items: flex-end;

  input {
    background: none;
    border: none;
    width: 180px;
    border-bottom: 1px solid #b6c471;
    height: 100%;
    flex: 1;
    margin-bottom: 20px;
    font-size: 2rem;
    font-family: inherit;

    &::placeholder {
      color: black;
    }

    &:focus {
    outline: none;
    border-color: black;
    }
  }

  button {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    height: 80px;
    width: 80px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default Search;
