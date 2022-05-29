let inputOne = document.getElementById("nombres-hospitalises");
let inputTwo = document.getElementById("nombres-gueris");
let inputThree = document.getElementById("nombres-decedes");

let btn19 = document.getElementById("modifier-19");

btn19.addEventListener("click", function () {
  inputOne.focus();
  
});


let btn = document.getElementById("modifier");
let inputFour = document.getElementById("nombres-hospitalises-autres");
let inputFive = document.getElementById("nombres-gueris-autres");
let inputSix = document.getElementById("nombres-decedes-autres");

btn.addEventListener("click", function () {
  inputFour.focus();
  btn19.textContent = "sauvgarder";
});