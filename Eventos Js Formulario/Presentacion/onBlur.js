function validarCorreo() {
    let correo = document.getElementById("correo").value;
    if (!correo.includes("@")) {
        alert("Correo invalido. No contiene @");
    }
}