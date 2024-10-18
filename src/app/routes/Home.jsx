import styled from "styled-components";
import ExpandableSearch from "../../components/ExpandableSearch";
import { useMemo, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../../features/footer/Footer";
import MostRecent from "../../features/home/MostRecent";
import Divider from "../../features/home/divider/Divider";
import MostPopular from "../../features/home/MostPopular";
import Categories from "../../features/home/Categories";

function Home() {
  const openSearchRef = useRef(null);
  const { articles, tags, recentlyCommented } = useLoaderData();

  const popularCount = 3;

  function openSearch() {
    if (openSearchRef.current) {
      openSearchRef.current.click();
    }
  }

  const mostPopular = useMemo(() => {
    const popular = articles
      .toSorted((a, b) => b._count.likes - a._count.likes)
      .slice(0, popularCount);
    return popular;
  }, [articles]);

  const topTags = useMemo(() => {
    const top = tags.toSorted((a, b) => b._count.articles - a._count.articles);
    return top;
  }, [tags]);

  return (
    <>
      <ExpandableSearch intialPosition={false} buttonRef={openSearchRef} />
      <HomeMain>
        <Content>
          <MostRecent article={articles[0]} />
          <Divider openSearch={openSearch} article={recentlyCommented} />
          <Categories tags={topTags} />
          <MostPopular articles={mostPopular} />
        </Content>
        <Footer />
      </HomeMain>
    </>
  );
}

const HomeMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-row: 2 / 3;
`;

const Content = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 400px auto;
`;

export default Home;
