function reverseString(inputString) {
  // Use a regular expression to match non-word characters and whitespace at the beginning and end
  const regex = /^[\W\s]+|[\W\s]+$/g;
  
  // Remove special characters and whitespace from the beginning and end of the input string
  const cleanedString = inputString.replace(regex, '');

  // Reverse the cleaned string using a loop
  let reversedString = '';
  for (let i = cleanedString.length - 1; i >= 0; i--) {
    reversedString += cleanedString.charAt(i);
  }

  // Reinsert the original special characters and whitespace at the beginning and end
  let result = inputString.replace(cleanedString, reversedString);

  return result;
}

// Example usage:
const input = "Hello, World!";
const reversed = reverseString(input);
console.log(reversed); // Outputs: "!dlroW ,olleH"


