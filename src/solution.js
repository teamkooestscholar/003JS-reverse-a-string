   // Define the reverseString function
   function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }

  // Function to reverse the input string and display the result
  function reverseAndDisplay() {
    // Get the user's input
    const inputElement = document.getElementById('inputString');
    const inputString = inputElement.value;

    // Call the reverseString function
    const reversedResult = reverseString(inputString);

    // Display the reversed result
    const resultElement = document.getElementById('result');
    resultElement.textContent = reversedResult;
  }
