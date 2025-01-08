// Sélection du bouton burger
const burgerButton = document.querySelector('.header-burger');

// Sélection du menu de navigation
const navMenu = document.querySelector('.header-nav');

// Séléction de l'overlay
const overlay = document.querySelector('.overlay-menu-mobile');

// Sélection de la croix close
const close = document.querySelector('.header-nav-close');


// Ajout d'un gestionnaire d'événement au clic sur le bouton burger
burgerButton.addEventListener('click', () => {
  // Ajout ou suppression de la classe 'open' au menu de navigation
  navMenu.classList.add('open');
    // Ajout ou suppression de la classe 'open' à l'overlay
    overlay.classList.add('open');
  console.log('click');
});

// Ajout d'un gestionnaire d'événement au clic sur la croix close
close.addEventListener('click', () => {
    // Ajout ou suppression de la classe 'open' au menu de navigation
    navMenu.classList.remove('open');
    // Ajout ou suppression de la classe 'open' à l'overlay
    overlay.classList.remove('open');
    console.log('click');
});

// Ajout d'un gestionnaire d'événement au clic sur l'overlay
overlay.addEventListener('click', () => {
    // Ajout ou suppression de la classe 'open' au menu de navigation
    navMenu.classList.remove('open');
    // Ajout ou suppression de la classe 'open' à l'overlay
    overlay.classList.remove('open');
    console.log('click');
});