
// Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr' 
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

function array(string) {
//check the lenght of the string
//remove the first letter
//remove the last letter
  
  let splited=string.split(",")
  if(splited.length <= 2) return null;
   splited.shift();
   splited.pop();
  return splited.join(" ")

};