function reverseString(inputString) {
    var reversed = '';
    var word = '';
    var isWord = false;
  
    for (var i = 0; i < inputString.length; i++) {
      var char = inputString.charAt(i);
  
      if (isWordCharacter(char)) {
        word = char + word;
        isWord = true;
      } else {
        if (isWord) {
          reversed += word;
          word = '';
          isWord = false;
        }
        reversed += char;
      }
    }
  
    if (isWord) {
      reversed += word;
    }
  
    return reversed;
  }
  
  function isWordCharacter(char) {
    return /^[a-zA-Z0-9]+$/.test(char);
  }
  
  function reverseAndDisplay() {
    var inputElement = document.getElementById('inputString');
    var outputElement = document.getElementById('output');
    var inputString = inputElement.value;
    var reversedString = reverseString(inputString);
    outputElement.textContent = reversedString;
  }
