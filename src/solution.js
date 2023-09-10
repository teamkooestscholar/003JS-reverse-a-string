// Function to reverse a string
function reverseString(inputString) {
  let n_str = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    n_str += inputString[i];
  }
  return n_str;
}

function handleFormSubmit(event) {
  event.preventDefault(); 

  const inputElement = document.getElementById("inputString");
  const inputValue = inputElement.value;

  const reversedString = reverseString(inputValue);

  const outputElement = document.getElementById("output");
  outputElement.textContent = "Reversed String: " + reversedString;
}

const formElement = document.getElementById("reverseForm");
formElement.addEventListener("submit", handleFormSubmit);