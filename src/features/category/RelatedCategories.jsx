import { useMemo } from "react";

function RelatedCategories({ current, articles }) {
    
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
      {RelatedCategories.length &&
        RelatedCategories.map((name, index) => (
          <div key={index}>{name[0]}</div>
        ))}
    </>
  );
}

export default RelatedCategories;
