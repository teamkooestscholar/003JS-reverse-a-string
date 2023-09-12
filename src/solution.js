// Function to reverse a string
function reverseAndDisplay() {
  const value = document.getElementById('value');
  const result = document.getElementById('result');
  const value = value.value;
  const reversedString = reverseString(value);
  resultElement.textContent = `Reversed String: ${reversedString}`;
}

function reverseString(value) {
  let reversedString = '';
  for (let i = value.length - 1; i >= 0; i--) {
    reversedString += value[i];
  }
  return reversedString;
}