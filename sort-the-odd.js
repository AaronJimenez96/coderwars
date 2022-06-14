let array = [5, 8, 6, 3, 4];
sortArray(array);

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
        console.log(array.map(x => x % 2));
  return console.log(array.map((x) => x % 2 ? odd.shift() : x));
}
  