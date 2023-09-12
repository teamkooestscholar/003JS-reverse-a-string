
var inputString = prompt("Enter a word that you want to be reverse: ")


function reverseString(inputString){
  let n_str = "";

  for(let i = inputString.length -1; i>=0; --i){
      n_str += inputString[i];
      
  }
  return n_str;
}
console.log("Original: " +inputString);
console.log("Reversed: " +reverseString(inputString));
