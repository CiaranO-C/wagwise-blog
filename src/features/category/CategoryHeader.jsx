import styled from "styled-components";

function CategoryHeader({ name, articleCount }) {
  return (
    <Header>
      <h1>{name}</h1>
      {articleCount > 0 && <p>total - {articleCount}</p>}
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4e5040;
  color: white;
  padding: 20px 0px;

  h1 {
    padding: 20px 0px 10px;
    text-align: center;
    border-bottom: 0.75px solid;
  }

  p {
    padding: 10px 0px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: italic;
    font-size: 0.8rem;
  }
`;

export default CategoryHeader;
