function reverseString(inputString) {
  // Implementation of the reverseString function (as shown above)

  // Check if the input is a valid string
  if (typeof inputString !== 'string') {
    return "Invalid input. Please enter a string.";
  }

  let reversedString = '';
  let i = inputString.length - 1;

  while (i >= 0) {
    reversedString += inputString[i];
    i--;
  }

  return reversedString;
}

function reverseAndDisplay() {
  const inputElement = document.getElementById('inputString');
  const outputElement = document.getElementById('output');
  const inputValue = inputElement.value;

  const reversedValue = reverseString(inputValue);

  outputElement.textContent = `Reversed string: ${reversedValue}`;
}