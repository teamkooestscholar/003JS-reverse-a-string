// Import the 'readline' module for handling user input
const readline = require('readline');

// Create an interface to read from standard input and write to standard output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to reverse a user-entered string
function reverseUserInput() {
  // Prompt the user to enter a string
  rl.question("Please enter a string: ", (userInput) => {
    rl.close(); // Close the input/output interface

    // Check if the user input is an empty string
    if (userInput.trim() === "") {
      console.log("No input provided");
    } else {
      // Reverse the user input using a custom function 'reverseString'
      const reversed = reverseString(userInput);

      // Display the reversed string
      console.log(reversed);
    }
  });
}

// Define a custom function 'reverseString' to reverse a given string
function reverseString(inputString) {
  let reversed = ''; // Initialize an empty string to store the reversed result

  // Iterate through the inputString from the end to the start
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i]; // Append each character in reverse order
  }

  return reversed; // Return the reversed string
}

// Call the 'reverseUserInput' function to obtain user input and reverse it
reverseUserInput();