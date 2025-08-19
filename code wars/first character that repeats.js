
// Find the first character that repeats in a String and return that character.

// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

// Another example:

// In 'translator' you should return 't', not 'a'.

// v      v  
// translator
//   ^   ^
// While second 'a' appears before second 't', the first 't' is before the first 'a'.

function firstDup(s) {
  let firstIndex = s.length;
  let dupChar = undefined;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let first = s.indexOf(char);
    let last = s.lastIndexOf(char);

    if (first !== last && first < firstIndex) {
      firstIndex = first;
      dupChar = char;
    }
  }

  return dupChar;
}