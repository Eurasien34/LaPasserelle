 
  function checkWindowWidth() {
    if (window.innerWidth > 1500) {
        if (document.querySelector('a[href="#carteTel"]')){
            const raccourciCarte = document.querySelector('a[href="#carteTel"]');
             raccourciCarte.href = '#containeurCarte';
          }
          const raccourciCarte2 = document.getElementById('raccourciCarte');
          if (raccourciCarte2) {
            raccourciCarte2.href = '#containeurCarte';
          }
      console.log('addRaccourciScript');
    } else {
      if (document.querySelector('a[href="#containeurCarte"]')){
        const raccourciCarte = document.querySelector('a[href="#containeurCarte"]');
         raccourciCarte.href = '#carteTel';
      }
      const raccourciCarte2 = document.getElementById('raccourciCarte');
          if (raccourciCarte2) {
            raccourciCarte2.href = '#carteTel';
      }
        console.log('removeRaccourciScript');
    }
  }
  
  // Vérifier la largeur de la fenêtre lors du chargement initial de la page
  checkWindowWidth();
  
  // Ajouter un gestionnaire d'événements pour l'événement resize (redimensionnement)
  window.addEventListener('resize', checkWindowWidth);
  