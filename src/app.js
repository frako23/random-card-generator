/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let symvar = Math.floor(Math.random() * 4);

let numvar = Math.floor(Math.random() * 12);

let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

document.getElementById("valor").innerHTML = `${numeros[numvar]}`;

let simbolos = ["♦", "♥", "♠", "♣"];

let up = document.querySelector("h1");

let resultado = simbolos[symvar];

up.innerHTML = `${resultado}`;

let down = document.getElementById("pDown");

down.innerHTML = `${resultado}`;

if (symvar < 2) {
  up.style.color = "red";
  down.style.color = "red";
}

const boton = document.querySelector("#button");

function reload() {
  reload = location.reload();
}

boton.addEventListener("click", reload, false);

setTimeout(reload, 10000);

window.heightWidthChange = function() {
  let alto = +document.getElementById("alto").value;

  let ancho = +document.querySelector("#ancho").value;

  document.getElementById("datos").style.width = `${ancho}px`;
  document.getElementById("datos").style.height = `${alto}px`;
};
window.addEventListener("resize", heightWidthChange);
