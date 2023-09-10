function reverseString(inputString) {
  // Use a regular expression to match any non-word characters or whitespace
  const regex = /[\W_]/g;
  // Replace special characters and whitespace with an empty string
  const cleanedString = inputString.replace(regex, '');
  // Convert the cleaned string to an array of characters
  const charArray = cleanedString.split('');
  // Reverse the array
  charArray.reverse();
  // Join the array back into a string and return it
  return charArray.join('');
}
function reverseStringWithoutMethods(inputString) {
  // Use a regular expression to match any non-word characters or whitespace
  const regex = /[\W_]/g;
  // Replace special characters and whitespace with an empty string
  const cleanedString = inputString.replace(regex, '');
  
  let reversedString = '';
  for (let i = cleanedString.length - 1; i >= 0; i--) {
    reversedString += cleanedString[i];
  }
  
  return reversedString;
}
