// Return the length of the longest word in the provided sentence.
function findLongestWordLength(str) {
    const strArr = str.split(' ')
    let longest = 0

    strArr.forEach(word => {
        let wordLength = word.length
        if (wordLength > longest) {
            longest = wordLength
        }
    })
    return longest;
}
const longestWordLength = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(`Longest word length: ${longestWordLength}`)