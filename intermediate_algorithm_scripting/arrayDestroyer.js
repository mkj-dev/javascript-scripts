// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  const newArray = arguments[0];
  const argsArray = [];
  
  for (let i = 1; i < arguments.length; i++) {
    argsArray.push(arguments[i]);
  }

  const result = newArray.filter((item) => {
    if (!argsArray.includes(item)) {
      return item;
    }
  });
  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // [12, 92, 65]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ['hamburger']
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1]
