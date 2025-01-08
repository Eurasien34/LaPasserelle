function checkWindowWidth() {
    if (window.innerWidth > 1500) {
      window.location.href = "index.html";
    }
  }
  
  // Ajouter un gestionnaire d'événement pour l'événement "resize" (changement de taille de la fenêtre)
  window.addEventListener("resize", checkWindowWidth);
  
  // Vérifier la largeur de la fenêtre lors du chargement initial de la page
  checkWindowWidth();
  