function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }

  return reversedString;
}

function reverseUserInput() {
  const inputField = document.getElementById("inputField");
  const resultDiv = document.getElementById("result");
  const inputString = inputField.value.trim(); // Remove leading and trailing spaces

  if (inputString === "") {
    // If input is empty, clear the result
    resultDiv.textContent = "";
    return;
  }

  const reversedString = reverseString(inputString);

  resultDiv.textContent = "Reversed string: " + reversedString;
  resultDiv.classList.remove("hidden");
}

document.getElementById("inputField").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    reverseUserInput();
  }
});

document.getElementById("reverseButton").addEventListener("click", reverseUserInput);
