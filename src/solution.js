function reverseString(inputString){
  let n_str = "";

  for(let i = inputString.length -1; i>=0; --i){
      n_str += inputString[i];
      
  }
  return n_str;
}

console.log(reverseString("hello"));
console.log(reverseString("my world! @"));
