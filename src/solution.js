// 003 Function to reverse a string
function reverseString(inputString){
  let i_string = "";

  for(let i = inputString.length -1; i>=0; --i){
      i_string += inputString[i];
      
  }
  return i_string;

}
console.log(reverseString("Hello"));
console.log(reverseString("World!!! @"));