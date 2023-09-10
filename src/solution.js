// Function to reverse a string
function reverseString(inputString) {
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }

  return reversedString;
}

const input = "Kaira";
const reversed = reverseString(input);
console.log("Example of a String is:", input)
console.log("The Reversed String is:", reversed);

// NOTE: Comment out the code above & uncomment the code below to execute index.html

/*function reverseString() {
  const inputString = document.getElementById('inputString').value;
  const reversedString = reverseStringFunction(inputString);
  document.getElementById('reversedString').innerText = reversedString;
}

function reverseStringFunction(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}*/