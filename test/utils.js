function getRandomSuffix(base) {
  return `${base}${Math.floor(Math.random() * 100000)}`;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function daysSinceToday(days) {
  const date = new Date();
  date.setDate(date.getDate() - days); // Subtract the specified number of days
  return date.toISOString(); // Return the ISO string of the updated date
}

export { getRandomSuffix, randomInt, daysSinceToday };
