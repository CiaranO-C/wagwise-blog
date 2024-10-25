import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { categoryLoader } from "../../app/router/loaders";
import { useParams } from "react-router-dom";

function Category() {
  const { name } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCategory() {
      const categoryData = await categoryLoader(name, controller.signal);

      if (categoryData) {
        setCategory(categoryData);
        setLoading(false);
      }
    }
    if (!category && loading) fetchCategory();

    return () => {
      controller.abort();
    };
  }, [category, loading, name]);

  if (loading) return <Spinner styles={{ marginTop: "auto", placeSelf: "center" }}/>;

  return (
    <>
      <h1>{category.tagName}</h1>
    </>
  );
}

export default Category;
