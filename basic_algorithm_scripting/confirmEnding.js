// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  const regex = new RegExp(target + '$', "g");

  if (str.match(regex)) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");
confirmEnding("Open sesame", "sage");
