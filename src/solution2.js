function reverseStringWithoutMethods(str) {
    let reversed = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  
  // Prompt the user for input
  const inputString = prompt('Enter a string:');
  
  if (inputString !== null) {
    const reversedString = reverseStringWithoutMethods(inputString);
    console.log(reversedString);
  } else {
    console.log('User canceled input.');
  }
  