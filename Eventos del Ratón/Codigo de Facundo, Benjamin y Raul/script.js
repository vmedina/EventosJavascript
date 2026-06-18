
const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
const caja = document.getElementById("caja");

// CLICK
boton.addEventListener("click", () => {
  texto.textContent = "Hiciste click en el botón ";
});

// DBLCLICK
caja.addEventListener("dblclick", () => {
  caja.textContent = "Doble click detectado ";
  caja.style.backgroundColor = "red";
});

// MOUSEOVER
caja.addEventListener("mouseover", () => {
  caja.textContent = "El mouse está encima ";
  caja.style.backgroundColor = "orange";
});