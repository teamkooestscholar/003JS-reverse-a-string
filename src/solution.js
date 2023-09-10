function reverseString(str) 
{
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) 
    {
        reversed += str[i];
    }
  return reversed;
}

function handleReverseButtonClick() 
{
    const inputString = document.getElementById('inputString').value;
    const reversedString = reverseString(inputString);
    document.getElementById('reversedOutput').textContent = reversedString;
}
document.getElementById('reverseButton').addEventListener('click', handleReverseButtonClick);
