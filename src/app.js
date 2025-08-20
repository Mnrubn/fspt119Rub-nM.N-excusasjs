import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandomElement(arr) {
  let max = arr.length;
  let min = 0;
  let random = getRandomNumber(min, max);
  return arr[random];
}
window.onload = function () {

  console.log("Hello Rigo from the console!");
  document.getElementById('excuse').innerHTML = `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}`;
};
