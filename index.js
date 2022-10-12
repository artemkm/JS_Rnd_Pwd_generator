const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwdLength = document.getElementById("pwd-length").value;

let pwdGenerator = document.getElementById('pwd-generator');

// process the click on the button
pwdGenerator.addEventListener('click', buttonClicked);

let pwdOne = document.getElementById("pwd-win1")
let pwdTwo = document.getElementById("pwd-win2")

function buttonClicked() {
    pwdOne.textContent = generatePWD()
    pwdTwo.textContent = generatePWD()
}

function generatePWD() {
    pwdLength = Number(document.getElementById("pwd-length").value);

    if(isNaN(pwdLength)) {
        pwdLength = 6;
    }

    let pwdLine = ""
    for(let i = 0;i < pwdLength; i++) {
        pwdLine += characters[Math.floor(Math.random()*characters.length)]
    }

    return pwdLine;
}
