// Use HTML Live Server for User Input
function reverseAndDisplay(method) {
  const inputString = document.getElementById('inputString').value;
  let reversed1, reversed2;

  if (method === 'reverseString1') {
    reversed1 = reverseString1(inputString);
  } else if (method === 'reverseString2') {
    reversed2 = reverseString2(inputString);
  } else {
    reversed1 = reversed2 = 'Invalid method';
  }

  document.getElementById('reversedString1').textContent = reversed1;
  document.getElementById('reversedString2').textContent = reversed2;
}

function reverseString1(inputString) {
  const regex = /[\W\s]/g;
  return inputString.replace(regex, '').split('').reverse().join('');
}

function reverseString2(inputString) {
  const regex = /[\W\s]/g;
  inputString = inputString.replace(regex, '');
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString.charAt(i);
  }
  return reversed;
}