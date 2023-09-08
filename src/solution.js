function rvrsStrng(inputStr){
  let reversedStr = "";

  for(let i = inputStr.length - 1; i >= 0; --i){
      reversedStr += inputStr[i];
  }
  return reversedStr;
}