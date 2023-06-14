// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
// You can use any of the methods covered in this section, and don't use replace.
function urlSlug(title) {
  const titleArray = title.toLowerCase().split(/\s+/g);
  let url = "";
  
  let deleteEmptyStrings = titleArray.filter(word => {
    if (word.length < 1) {
      titleArray.splice(word, 1);
    }
  });
  url = titleArray.join("-");
  return url;
}

console.log(urlSlug(" Winter Is  Coming")); // winter-is-coming
console.log(urlSlug("Hold The Door")); // hold-the-door
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // a-mind-needs-books-like-a-sword-needs-a-whetstone
