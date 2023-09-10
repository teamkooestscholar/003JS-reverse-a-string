


function StringReverse(str) {

    let reversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
            reversedString += str[i];


    }

    return reversedString;
   

}

function ProcessReverse() {

const userInput =  document.getElementById("userInput").value;
const flippedString = StringReverse(userInput);


document.getElementById("str").textContent = flippedString;

}




const button = document.getElementById("checkButton");
button.addEventListener("click", ProcessReverse);

