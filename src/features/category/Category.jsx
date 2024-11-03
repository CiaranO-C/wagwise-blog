import { useEffect, useRef, useState } from "react";
import Spinner from "../../components/Spinner";
import { categoryLoader } from "../../app/router/loaders";
import { useParams } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import RelatedCategories from "./RelatedCategories";
import ArticlesSection from "./ArticlesSection";

function Category() {
  const { name } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const previousCategory = useRef(null);

  useEffect(() => {
    if (previousCategory.current === name) return;

    const controller = new AbortController();
    async function fetchCategory() {
      const categoryData = await categoryLoader(name, controller.signal);

      if (categoryData) {
        previousCategory.current = name;
        setCategory(categoryData);
        setLoading(false);
      }
    }
    setLoading(true);
    fetchCategory();

    return () => {
      controller.abort();
    };
  }, [name]);

  if (loading)
    return <Spinner styles={{ marginTop: "auto", placeSelf: "center" }} />;

  console.log(category);

  return (
    <>
      <CategoryHeader
        name={category.tagName}
        articleCount={category.articles.length}
      />
      <ArticlesSection articles={category.articles} />
      <RelatedCategories
        current={category.tagName}
        articles={category.articles}
      />
    </>
  );
}

export default Category;
