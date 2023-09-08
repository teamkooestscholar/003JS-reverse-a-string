const reverseString = () => {
  const messageOutput = document.querySelector('.message-output')
  const stringInput = document.querySelector('.string-input').value;

  let newString = "";
  
  for(let i = stringInput.length - 1; i >= 0; i-- ){
      newString += stringInput[i];
  }
  
  messageOutput.textContent = newString;
  messageOutput.style.color = '#94a3b8';
}

const onStringInput = () => {
  const messageInput = document.querySelector('.message-input');
  messageInput.style.border = '2px solid rgba(30, 124, 255, .7)';
}


const onClickOutside = () => {
  const messageInput = document.querySelector('.message-input');
  if(!messageInput.contains(event.target)){
    messageInput.style.border = '2px solid #475569';
  }
}

const onInputEnter = (event) => {
  if (event.key === 'Enter'){
    reverseString()
  }
}

const input = document.querySelector('.string-input');
const enterBtn = document.querySelector('.enter-btn').addEventListener('click', reverseString);
document.addEventListener('click', onClickOutside);
input.addEventListener('keyup', onInputEnter);
input.addEventListener('click', () => {
  onStringInput();
});
