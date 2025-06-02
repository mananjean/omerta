let nom = "";
let age = 0;
let sexe = "";

function init() {
    nom = document.getElementById("name").value;
    age = document.getElementById("age").value;
    sexe = document.getElementById("sexe").value;
}

function envoyerMessage() {
    // Code pour envoyer le message
  document.getElementById("message").innerHTML = "Message envoyé";
}

// Ajoutez un événement au bouton pour appeler la fonction
document.getElementById("Submit").addEventListener("click", envoyerMessage);