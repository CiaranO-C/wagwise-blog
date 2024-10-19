import { useLoaderData } from 'react-router-dom';

function Category() {
    const { category } = useLoaderData();

  return (
    <>
    <h1>{category.tagName}</h1>
    </>
  )
}

export default Category;
