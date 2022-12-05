export function randomizeAndSplit(data, chunkSize) {
  var arrayOfArrays = [];
  var shuffled = [...data];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  for (var i = 0; i < shuffled.length; i += chunkSize) {
    arrayOfArrays.push(shuffled.slice(i, i + chunkSize));
  }

  arrayOfArrays.filter((el) => Object.keys(el).length);

  console.log(arrayOfArrays);
  return arrayOfArrays;
}
