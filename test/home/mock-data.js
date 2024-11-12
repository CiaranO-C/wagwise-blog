import { daysSinceToday, getRandomSuffix, randomInt } from "../utils";

function mockUser() {
  const id = randomInt(2, 50);
  return {
    id,
    username: getRandomSuffix("user"),
    role: "USER",
    likes: mockArticles(5),
    comments: mockOwnComments(5, id),
  };
}

function mockCategory(tagName) {
  return {
    tagName,
    articles: mockArticles(15, [tagName]),
  };
}

function mockArrayData(count, factory) {
  const data = [];
  for (let i = 0; i < count; i++) {
    const field = factory(i);
    data.push(field);
  }
  return data;
}

function mockOwnComments(count, authorId) {
  return mockArrayData(count, (i) => generateOwnComment(i, authorId));
}

function generateOwnComment(i, authorId) {
  return {
    id: i,
    text: getRandomSuffix("comment"),
    authorId,
    articleId: randomInt(0, 20),
    created: daysSinceToday(i),
    review: false,
  };
}

function mockArticles(count = 10, tags = null) {
  return mockArrayData(count, (i) => generateArticle(i, tags));
}

function generateArticle(id, tags) {
  const date = daysSinceToday(id + 1);
  const comments = mockComments(randomInt(0, 5), id);
  return {
    id,
    title: getRandomSuffix("test title"),
    body: `<p>${getRandomSuffix("test body")}</p>`,
    authorId: 1,
    created: date,
    updated: date,
    published: true,
    author: {
      username: "Admin",
    },
    _count: {
      likes: randomInt(0, 50),
      comments: comments.length,
    },
    comments,
    tags: tags ? tags : mockTags(randomInt(1, 3)),
  };
}

function mockComments(count, articleId) {
  return mockArrayData(count, (i) => generateComment(i, articleId));
}

function generateComment(articleId, index) {
  return {
    id: `${articleId}-${index}`,
    text: getRandomSuffix("comment"),
    authorId: randomInt(1, 50),
    articleId,
    created: daysSinceToday(index),
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
  return mockArrayData(count, generateTag);
}

export { mockArticles, mockTags, mockUser, mockCategory };
