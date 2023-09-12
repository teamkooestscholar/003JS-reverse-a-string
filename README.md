# EASY: 003 JS - Reverse A String

## Description

Write a JavaScript function that takes a string as an input and returns the reverse of that string.


## Sample solution

```javascript
# Reverse User Input

This JavaScript program continuously prompts the user for input, reverses the input string, and displays the reversed string using alerts. The program allows the user to exit by typing 'quit.'

## Function for Reversing User Input

The code defines a function `reverseUserInput()` to perform the input and reversal operations.

```javascript
function reverseUserInput() {
  // The main function body is here
}
```

## User Input

Inside the `reverseUserInput()` function, the program prompts the user for input using the `prompt()` function and stores it in the `inputString` variable.

```javascript
// Prompt the user for input
const inputString = prompt("Enter a string to reverse (type 'quit' to exit):");
```

## Input Validation and Looping

The program checks if the user clicked "Cancel" or entered an empty string. If so, it displays a corresponding alert message. If the user enters "quit" (case-insensitive), the program exits the loop. Otherwise, it reverses the input string and displays it using an alert.

```javascript
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
```

## Function Execution

The `reverseUserInput()` function is called to initiate the input and reversal process.

```javascript
// Call the function to start the loop
reverseUserInput();
```

This program provides a simple way for users to reverse input strings and exit the process when desired.
}
```

## Bonus Challenges

* Modify the function to handle special characters or whitespace gracefully. (Hint: You may need to look into regular expressions.) **[+5 extra credit points]**

* Write a version of the function that doesn't use the split, reverse, or join methods. (Hint: You'll need to use a loop.) **[+5 extra credit points]**

* Create a web page that allows users to input a string and see the reversed result interactively. (Hint: You'll need to use HTML and JavaScript.) **[+5 extra credit points]**

## How to answer?

* Kindly go to `src` directory and edit `solution.js` file.

* Replace the `commented code` with your solution.
