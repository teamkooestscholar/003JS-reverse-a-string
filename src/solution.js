function reverseString(str) {
  // Use regular expression to split the string into an array of words
  const words = str.match(/[\w]+/g);

  if (!words) {
    // If no words found, return the original string
    return str;
  }

  // Reverse each word and join them with non-word characters
  return str.replace(/[\w]+/g, (match) => {
    return match.split('').reverse().join('');
  });
}

// Prompt the user for input
const inputString = prompt('Enter a string:');

if (inputString !== null) {
  const reversedString = reverseString(inputString);
  console.log(reversedString);
} else {
  console.log('User canceled input.');
}
