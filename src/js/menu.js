"use strict";

const rootVeg = "potato";
let characters = [...rootVeg];

console.log(`Testar transpilering... ${characters}`);

let menubars = document.getElementsByClassName("menubars");
let menu = document.getElementById("menu");



function openmenu(x) {
    
    x.classList.toggle("change");
    if (menu.style.height === "100vh") {
        menu.style.height = "0"
    } else {
        menu.style.height = "100vh";
    }
}
    
  


