//---------------------------------------------
//            Spread challenge
//---------------------------------------------
//  To enable the CSS animation, write a script
//  that will wrap each letter of the h2 element with a <span></span>
//  Use the spread operator, .map() and .querySelector()

const injectHtml = document.querySelector(".jump");

let jump = document.querySelector(".jump").textContent;

document.querySelector(".jump").textContent = "";

const strArr = jump
  .split("")
  .map((char) => (injectHtml.innerHTML += `<span>${char}</span>`));
