function reverseString(inputString) {
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }

  return reversedString;
}

const input = "1 2 3 4 5 6 7 8 9 0";
const reversed = reverseString(input);
console.log("The input String is:", input)
console.log("The Reversed String is:", reversed);