const params = new URLSearchParams(window.location.search);

const nom = params.get("nom");
const solde = params.get("solde");
const vues = params.get("vues");
const numero = params.get("numero");

if(nom){
  document.getElementById("nomAffiche").innerText = nom;
}

if(solde){
  document.getElementById("soldeAffiche").innerText = solde + " FCFA";
}

if(vues){
  document.getElementById("vuesAffiche").innerText = vues + " vues";
}

if(numero){
  document.getElementById("numeroAffiche").innerText = numero;
}

function startWithdrawal() {

  let bar = document.getElementById("bar");
  let message = document.getElementById("message");

  bar.style.width = "0%";

  message.innerHTML = "Traitement du retrait...";

  let width = 0;

  let interval = setInterval(() => {

    width += 100 / 7;

    bar.style.width = width + "%";

    if (width >= 100) {

      clearInterval(interval);

      message.innerHTML =
      "❌ Retrait impossible. Contacter le leader.";

    }

  }, 1000);

}
