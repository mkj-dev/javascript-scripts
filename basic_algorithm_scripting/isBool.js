// Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  if (typeof bool !== 'boolean') {
    return false;
  } else {
    return true;
  }
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho([1, 2, 3]));
console.log(booWho(false));
console.log(booWho([].slice));
