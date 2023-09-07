function reverseString() {
  
  var inputElement = document.getElementById("inputString");
  var inputString = inputElement.value;

  var reversedString = "";


  for (var i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
  }

  var outputElement = document.getElementById("outputString");
  outputElement.textContent = reversedString;
}