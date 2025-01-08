// Déclaration de la variable pour l'intervalle
let interval;

// Carrousel
document.body.onload = function () {
  nbr = 5;
  p = 0;
  container = document.getElementById("containerCarrousel");
  gauche = document.getElementById("gauche");
  droite = document.getElementById("droite");
  container.style.width = 560 * nbr + "px";
  for (i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage =
      "url('./img/carrousel/im" + i + ".jpg')";
    container.appendChild(div);
  }
  // Fonction pour démarrer l'intervalle
  function startInterval() {
    interval = setInterval(function () {
      if (p > -nbr + 1) {
        p--;
        container.style.transform = "translate(" + p * 560 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
      } else {
        p = 0;
        container.style.transform = "translate(" + p * 560 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
      }
    }, 6000);
  }

  // Appel de la fonction pour démarrer l'intervalle
  startInterval();

  afficherMasquer();

  function afficherMasquer() {
    if (p == -nbr + 1) {
      droite.style.visibility = "hidden";
      droite.style.transition = "all 0.5s ease";
    } else {
      droite.style.visibility = "visible";
      droite.style.transition = "all 0.5s ease";
    }
    if (p == 0) {
      gauche.style.visibility = "hidden";
      droite.style.transition = "all 0.5s ease";
    } else {
      gauche.style.visibility = "visible";
      droite.style.transition = "all 0.5s ease";
    }
  }

  droite.onclick = function () {
    if (p > -nbr + 1) {
      // Effacer l'intervalle précédent
      clearInterval(interval);
      p--;
      container.style.transform = "translate(" + p * 560 + "px)";
      container.style.transition = "all 0.5s ease";
      afficherMasquer();
      // Réinitialiser l'intervalle
      startInterval();
    }
  };

  gauche.onclick = function () {
    if (p < 0) {
      // Effacer l'intervalle précédent
      clearInterval(interval);
      p++;
      container.style.transform = "translate(" + p * 560 + "px)";
      container.style.transition = "all 0.5s ease";
      afficherMasquer();
      // Réinitialiser l'intervalle
      startInterval();
    }
  };
};
