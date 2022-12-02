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

  arrayOfArrays.forEach((array) => {
    array.forEach((item) => {
      if (item === "") {
        delete array[array.indexOf(item)];
      }
    });

    array = array.filter((item) => item !== undefined);

    if (array.length === 0) {
      delete arrayOfArrays[arrayOfArrays.indexOf(array)];
    }
  });
  return arrayOfArrays;
}
