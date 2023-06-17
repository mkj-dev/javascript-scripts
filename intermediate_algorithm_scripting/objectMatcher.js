// Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection 
// if it is to be included in the returned array.
function objectMatcher(collection, source) {
  const newCollection = collection.slice();
  const newSource = Object.assign({}, source);
  const newArr = [];

  for (let i = 0; i < newCollection.length; i++) {
    let found = true;
    for (const key in newSource) {
      if (newCollection[i][key] !== newSource[key]) {
        found = false;
        break;
      }
    }
    if (found) {
      newArr.push(newCollection[i])
    }
  }
  return newArr;
}
console.log(objectMatcher([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(objectMatcher([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(objectMatcher([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
