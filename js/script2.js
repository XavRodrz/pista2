function validateNumber() {
    const number = document.getElementById("number").value;
    const correctNumber = "10";

    if (number === correctNumber) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Dirijete al salon de un cientifico que iba sobre ruedas";
       
    } else {
        document.getElementById("message").innerText = "Número incorrecto. Inténtalo de nuevo.";
    }
}
