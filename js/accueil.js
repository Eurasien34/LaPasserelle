// Fonction pour vérifier la largeur de la fenêtre et ajouter ou supprimer la classe 'mobile' au body
function checkWindowSize() {
  const body = document.body;
  const windowWidth = window.innerWidth;
  // selectionner l'id seiche
  const gambas = document.querySelector('.imgGambas');
  const seiche = document.querySelector('.imgSeiche');

  if (windowWidth <= 1500) {
    body.classList.add('mobile');
    seiche.classList.add('seicheAccueilMobile');
    gambas.classList.add('gambasAccueilMobile');
    seiche.classList.remove('seicheAccueil');
    gambas.classList.remove('gambasAccueil');
  } else {
    body.classList.remove('mobile');
    seiche.classList.remove('seicheAccueilMobile');
    gambas.classList.remove('gambasAccueilMobile');
    seiche.classList.add('seicheAccueil');
    gambas.classList.add('gambasAccueil');
  }
}

// Gestionnaire d'événement pour vérifier la taille de la fenêtre lors du redimensionnement
window.addEventListener('resize', checkWindowSize);

// Vérifier la taille de la fenêtre au chargement initial
checkWindowSize();

