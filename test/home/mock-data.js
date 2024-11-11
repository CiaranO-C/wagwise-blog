import { getRandomSuffix, randomInt } from "../utils";

function mockArticles(count = 10) {
  const articles = [];

  for (let i = 0; i < count; i++) {
    const article = generateArticle(i);
    articles.push(article);
  }

  return articles;
}

function generateArticle(id) {
  const date = new Date().toISOString();
  return {
    id,
    title: getRandomSuffix("test title"),
    body: getRandomSuffix("<p>test body</p>"),
    authorId: 1,
    created: date,
    updated: date,
    published: true,
    author: {
      username: "Admin",
    },
    _count: {
      likes: randomInt(0, 50),
      comments: randomInt(0, 10),
    },
    comments: mockComments(randomInt(0, 5), id),
    tags: mockTags(randomInt(1, 3)),
  };
}

function mockComments(count, articleId) {
  const comments = [];

  for (let i = 0; i < count; i++) {
    const comment = generateComment(articleId, i);
    comments.push(comment);
  }
  return comments;
}

function generateComment(articleId, index) {
  return {
    id: `${articleId}-${index}`,
    text: getRandomSuffix("comment"),
    authorId: randomInt(1, 50),
    articleId,
    created: new Date().toISOString(),
    review: false,
    author: {
      username: getRandomSuffix("Guest"),
    },
  };
}

function generateTag() {
  return {
    tagName: getRandomSuffix("tag"),
    _count: {
      articles: randomInt(0, 20),
    },
  };
}

function mockTags(count = 5) {
  const tags = [];

  for (let i = 0; i < count; i++) {
    const tag = generateTag();
    tags.push(tag);
  }
  return tags;
}

export { mockArticles, mockTags };
