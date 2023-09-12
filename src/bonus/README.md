# Reverse User Input

This allows users to reverse a string by entering it in the input field and clicking the "Reverse" button. The reversed result is displayed below the input field.

## HTML Structure

The HTML consists of the following components:

### Input Field

A text input field with the id "inputField" is provided where users can enter the string they want to reverse.

```html
<input type="text" id="inputField" placeholder="Enter a string" />
```

### Reverse Button

A "Reverse" button with the id "reverseButton" is provided to trigger the string reversal process.

```html
<button id="reverseButton">Reverse</button>
```

### Result Display

The reversed string is displayed in a result div with the id "result." Initially, it's hidden, and it becomes visible once the reversal is complete.

```html
<div id="result" class="hidden"></div>
```

## JavaScript Functionality

### `reverseString(inputString)`

The `reverseString` function reverses an input string character by character using a `for` loop and returns the reversed string.

```javascript
function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }

  return reversedString;
}
```

### `reverseUserInput()`

The `reverseUserInput` function is called when the "Reverse" button is clicked. It retrieves the input string, trims leading and trailing spaces, and reverses the string using the `reverseString` function. The reversed result is displayed in the result div.

```javascript
function reverseUserInput() {
  const inputField = document.getElementById("inputField");
  const resultDiv = document.getElementById("result");
  const inputString = inputField.value.trim();

  if (inputString === "") {
    resultDiv.textContent = ""; // Clear the result if input is empty
    return;
  }

  const reversedString = reverseString(inputString);

  resultDiv.textContent = "Reversed string: " + reversedString;
  resultDiv.classList.remove("hidden");
}
```

### Event Listeners

Event listeners are added to the input field and the "Reverse" button. When the "Enter" key is pressed in the input field or the "Reverse" button is clicked, the `reverseUserInput` function is called to perform the reversal.

```javascript
document.getElementById("inputField").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    reverseUserInput();
  }
});

document.getElementById("reverseButton").addEventListener("click", reverseUserInput);
```
