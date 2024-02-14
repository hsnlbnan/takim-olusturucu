function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function randomizeAndSplit(data, chunkSize) {
  if (!Array.isArray(data)) {
    throw new Error("First parameter should be an array");
  }

  if (typeof chunkSize !== "number") {
    throw new Error("Second parameter should be a number");
  }

  const shuffled = [...data];

  fisherYatesShuffle(shuffled);

  const arrayOfArrays = [];
  for (let i = 0; i < shuffled.length; i += chunkSize) {
    arrayOfArrays.push(shuffled.slice(i, i + chunkSize));
  }

  return arrayOfArrays;
}
