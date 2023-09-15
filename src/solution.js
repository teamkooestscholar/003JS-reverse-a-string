function reverseStr() {
  
  const inputString = document.getElementById("inputString").value;
  const reversedString = reverseString(inputString);

  document.getElementById("reversedOutput").textContent = reversedString;
}

function reverseString(inputString) {
  
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
  }

  return reversedString;
}
