let s = "bitcoin take over the world maybe who knows perhaps";
findShort(s)
function findShort(s) {
	console.log(s)
	const stringArray = s.trim().split(" ");
	console.log(stringArray)
	const orderedArray = stringArray.sort((a, b) => {
	  return a.length - b.length;
	})
	console.log(orderedArray)
	return console.log(orderedArray[0].length);
  }
  