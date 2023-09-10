// Bonus Challenge 1: Handle special characters or whitespace gracefully using regular expressions
function reverseString(inputString) {
  // Use a regular expression to match any character, including special characters and whitespace
  const regex = /./g;

  // Replace each character with its reverse
  return inputString.replace(regex, (match) => match + inputString).slice(0, -inputString.length);
}

// Bonus Challenge 2: Write a version of the function without using split, reverse, or join methods
function reverseStringWithoutSplit(inputString) {
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}
