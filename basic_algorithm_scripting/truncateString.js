// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length > num) {
    str = str.slice(0, num);
    return str += '...';
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
