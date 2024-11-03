import styled from "styled-components";
import ExpandableSearch from "../../components/ExpandableSearch";
import { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../../features/footer/Footer";
import MostRecent from "../../features/home/MostRecent";
import Divider from "../../features/home/divider/Divider";
import MostPopular from "../../features/home/MostPopular";
import Categories from "../../features/home/Categories";
import { homeLoader } from "../router/loaders";
import Spinner from "../../components/Spinner";

function Home() {
  const openSearchRef = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const popularCount = 3;

  function openSearch() {
    if (openSearchRef.current) {
      openSearchRef.current.click();
    }
  }

  useEffect(() => {
    const controller = new AbortController();

    async function getRouteData() {
      const routeData = await homeLoader(controller.signal);
      if (routeData) {
        const { articles, tags } = routeData;
        setData({ articles, tags });
        setLoading(false);
      }
    }

    if (!data && loading) {
      getRouteData();
    }

    return () => {
      controller.abort();
    };
  });

  const mostPopular = useMemo(() => {
    if (data) {
      const popular = data.articles
        .toSorted((a, b) => b._count.likes - a._count.likes)
        .slice(0, popularCount);
      return popular;
    }
  }, [data]);

  const topTags = useMemo(() => {
    if (data) {
      const top = data.tags.toSorted(
        (a, b) => b._count.articles - a._count.articles,
      );
      return top;
    }
  }, [data]);

  const recentlyCommentedId = useMemo(() => {
    if (data) {
      return data.articles.find((article) => article._count.comments > 0)?.id;
    }
  }, [data]);

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

  return (
    <>
      <ExpandableSearch intialPosition={false} buttonRef={openSearchRef} />
      <HomeMain>
        <Content>
          <MostRecent article={data.articles[0]} />
          <Divider openSearch={openSearch} mostRecent={data.articles[0].id} commented={recentlyCommentedId} />
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
