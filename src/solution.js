 //function to reverse a string
 function reverseString(str) {
  let arr = str.split("");
  
  let reversedArr = [];
  
  for(let i = arr.length-1; i >= 0; i--) {
    if(/[\s\W]/.test(arr[i])) {
      reversedArr[i] = arr[i];
    } else {
      let j = 0;
      while(reversedArr[i+j] !== undefined){
        j++;
      }
      reversedArr[i + j] = arr[i];
    }
  }
  
  return reversedArr.join("");
}





  //function without using split join and reverse method
  function reverseStringWithoutSplitJoin(inputString) {
  let reversedString = '';
  
  function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
  }
  
  let left = 0;
  let right = inputString.length - 1;
  
  while (left <= right) {
    if (isAlphanumeric(inputString[left]) && isAlphanumeric(inputString[right])) {
      reversedString += inputString[right];
      right--;
      left++;
    } else {
      if (!isAlphanumeric(inputString[left])) {
        left++;
      }
      if (!isAlphanumeric(inputString[right])) {
        right--;
      }
    }
  }
  
  return reversedString;
}
