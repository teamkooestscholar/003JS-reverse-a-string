const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseUserInput() {
  rl.question("Enter a string: ", (userInput) => {
    rl.close();

    // Check if the user entered an empty string
    if (userInput.trim() === "") {
      console.log("No input provided");
    } else {
      // Reverse the user input using the modified reverseString function
      const reversed = reverseString(userInput);

      // Output the reversed string
      console.log(reversed);
    }
  });
}

// Define the modified reverseString function
function reverseString(inputString) {
  let reversed = '';

  // Iterate through the inputString from end to start
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }

  return reversed;
}

// Call the reverseUserInput function to get user input and reverse it
reverseUserInput();
