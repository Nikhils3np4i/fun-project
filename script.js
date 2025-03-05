let userName = prompt("Enter Your Name Sir");
let firstChar = userName.slice(0,1);
let capitalized = firstChar.toUpperCase();
let restOfName = userName.slice(1, userName.length);
restOfName = restOfName.toLowerCase();

let changeAble = document.getElementById("log");
let button = document.getElementById("btn");
button.addEventListener("click", ()=>{
    changeAble.innerHTML=`${capitalized.trim()}${restOfName} Bhai <b><em>Chut</em></b> Dila de yar Please 😢 `
})

document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        changeAble.innerHTML=`${capitalized.trim()}${restOfName} Bhai <b><em>Chut</em></b> Dila de yar Please 😢 `
    }
})

