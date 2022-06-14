let str = "Welcome to Codewars!";

hastag(str);

function hastag(str){
    let capArray = str.trim().split(' ').map(element => element.charAt(0).toUpperCase() + element.slice(1));
    let rest = capArray.join('').trim().toString();
    return rest.length > 140 ? false : rest.length == '' ? false : `#${rest}`
   
}
