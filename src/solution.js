function reverseString(str) {
  var array = [];
  array = str.split('');
  array = array.reverse();
  str = array.join('');
  return str;
}

reverseString("reversed");