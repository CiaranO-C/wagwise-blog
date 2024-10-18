
function getRandomDog() {
  const random = randomInteger(1, 9);
  let path = `src/assets/dogs/dog-${random}.jpg`;

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return path;
}

export { getRandomDog };
