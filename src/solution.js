function reverseAndDisplay() {
  const inputElement = document.getElementById('inputString');
  const resultElement = document.getElementById('result');
  const inputString = inputElement.value;
  const reversedString = reverseString(inputString);
  resultElement.textContent = `Reversed String: ${reversedString}`;
}

function reverseString(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}
