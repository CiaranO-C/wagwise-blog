function getRandomSuffix(base) {
  return `${base}${Math.floor(Math.random() * 100000)}`;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { getRandomSuffix, randomInt };
