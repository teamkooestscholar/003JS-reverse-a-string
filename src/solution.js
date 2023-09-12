// Define a function to reverse user input
function reverseUserInput() {
  while (true) {
    // Prompt the user for input
    const inputString = prompt("Enter a string to reverse (type 'quit' to exit):");

    // Check if the user clicked "Cancel" or entered an empty string
    if (inputString === null || inputString === "") {
      alert("No input provided or canceled.");
    } else if (inputString.toLowerCase() === "quit") {
      // User wants to quit the loop
      break;
    } else {
      // Reverse the input string and display it using alert
      const reversedString = inputString.split("").reverse().join("");
      alert("Reversed string: " + reversedString);
    }
  }
}

// Call the function to start the loop
reverseUserInput();
