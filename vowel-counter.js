/*Count vowels in string*/
let srt = 'abadaquedabra';
function getCount(str) {
    var m = str.match(/[aeiou]/gi);
    return console.log(m === null ? 0 : m.length);
  }
  getCount(srt);