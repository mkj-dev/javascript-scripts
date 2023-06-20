// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/[\s_]/g, '-').toLowerCase();
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
