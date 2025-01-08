// Sélection des éléments DOM
const carte = document.getElementById("carte");
const sectionBtns = carte.getElementsByClassName("section-btn");
const contenuCarte = document.getElementById("contenu-carte");
const containeurCarte = document.getElementById("containeur-carte");

// Données des différentes sections
const sections = {
  entrees: `<img src="./img/Carte/CarteV2/dessert.png" alt="parillada" id="parillada" />
  <div class="bordureCarteMer">
    <div class="titreCarteMer">
      <h2>Les Entrées</h2>
    </div>
    <div class="carteMer">
      <div class="prix"><p><b>Beignets de crevettes ail et persil</b></p> <p class="prixdroite">9,00€</p></div>
      <div class="prix"><p><b>Calamars à la romaine</b></p> <p class="prixdroite">9,00€</p></div>
      <div class="prix"><p><b>Camemberts panés</b></p> <p class="prixdroite">9,00€</p></div>
      <div class="prix"><p><b>Salade mixte</b></p> <p class="prixdroite">5,00€</p></div>
      <div class="prix"><p><b>Tomate burratina pesto maison</b>* <em>(Selon saison)</em></p> <p class="prixdroite">11,00€</p></div>
      <div class="prix"><p><b>Carpaccio de boeuf charolais pesto maison</b>* <em>(Selon saison)</em></p> <p class="prixdroite">11,00€</p></div>
      <div class="prix"><p><b>Huîtres gratinées</b></p> <p class="prixdroite">15,00€</p></div>
      <div class="prix"><p><b>Moules persillade</b> <em>(cuites servies froides)</em></p> <p class="prixdroite">9,00€</p></div>
      <div class="prix"><p><b>Soupe de poisson rouille et croûtons</b>* <em>(Selon saison)</em></p> <p class="prixdroite">11,00€</p></div>
      <div class="prix"><p><b>Couteaux à la plancha en persillade</b></p> <p class="prixdroite">15,00€</p></div>
    </div>
    <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
  </div>`,
  desserts: `<img src="./img/Carte/CarteV2/dessert.png" alt="parillada" id="parillada" />
  <div class="bordureCarteMer">
    <div class="titreCarteMer">
      <h2>Les Desserts 7,00€</h2>
    </div>
    <div class="carteMer">
      <p><b>Fromage blanc</b> coulis de fruits rouges</p>
      <p><b>Tarte tatin</b> chantilly et caramel beurre salé</p>
      <p><b>Fondant au chocolat</b> chantilly et chocolat chaud</p>
      <p><b>Nougat glacé</b> coulis de fruits rouges</p>
    </div>
    <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
  </div>`,
  formules: `<div class="bordureCarteMer">
    <div class="titreCarteMer">
      <h2>Menu Enfant 10,50€</h2>
    </div>
    <div class="carteMer">
      <p><b>Moules / Frites</b></p>
      <p><em>ou </em><b>Nuggets de poulet / Frites</b></p>
      <p><em>ou </em><b>Poisson panné / Frites</b></p>
      <p><b>Fromage blanc</b> <em>ou</em> <b>Compote</b></p>
      <p><em>( - de 10 ans )</em></p>
    </div>
    <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
  </div>`,
  boissons: `<img src="./img/Carte/CarteV2/dejeuner.png" alt="parillada" id="parillada" />
  <div class="bordureCarteMer">
    <div class="titreCarteMer">
      <h2>Formules Petit Déj'</h2>
    </div>
    <div class="carteMer">
      <p><b>Formule Sucrée 7,50€</b> <br>Boisson chaude <em>(café, thé ou chocolat chaud)</em> <br>Jus de fruits <em>(pomme, ananas ou orange)</em> <br>Pain beurre confiture <br>Fromage blanc</p>
      <p><b>Formule Salée 9,00€</b> <br>Boisson chaude <em>(café, thé ou chocolat chaud)</em> <br>Jus de fruits <em>(pomme, ananas ou orange)</em> <br>Pain beurre <br>Oeuf au plat ou omelette</p>
      <p><b>Formule Mixte 11,00€</b></p>
    </div>
    <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
  </div>`,
  plats: {
    sousSections: {
      burgers: "Les Burgers",
      salades: "Les Salades",
      moulesFrites: "Les Moules Frites",
      coquillagesCrustaces: "Les Coquillages & Crustacés",
      coteMer: "Côté Mer",
      coteTerre: "Côté Terre",
    },
    platsParSousSection: {
      burgers: `<img src="./img/Carte/CarteV2/burger.png" alt="parillada" id="parillada"/>
      <div class="bordureCarteMer">
        <div class="titreCarteMer">
          <h2>Les Burgers 19,00€</h2>
        </div>
        <div class="carteMer">
          <p><b>Le Classique :</b><br><em>(Pain toasté, steak haché façon bouchère 180gr, sauce poivre, cheddar fondu, salade, tomates rôties)</em></p>
          <p><b>Fish and chips façon burger :</b><br> <em>(Pain toasté, cotin pané façon fish & chips, sauce tartare, cheddar fondu, salade, tomates rôties)</em></p>
          <p><b>L'Indien :</b><br> <em>(Pain toasté, poulet pané corn flakes, mayonnaise au curry, cheddar foncu, salade, tomates rôties)</em></p>
          <p><b>Le Savoyard :</b><br> <em>(Pain toasté steak haché façon bouchère 180gr sauce poivre, fromage à raclette fondu, salade, tomates rôties)</em></p>
          <p><b>Le Veggie :</b><br> <em>(Pain toasté, steak d'avocat pané, sauce blanche, cheddar fondu, salade, tomates rôties)</em></p>
        </div>
        <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
      </div>`,
      salades: `<img src="./img/Carte/CarteV2/salade.png" alt="parillada" id="parillada" />
      <div class="bordureCarteMer">
        <div class="titreCarteMer">
          <h2>Les Salades 17,00€</h2>
        </div>
        <div class="carteMer">
          <p><b>César poulet :</b><br><em>(Salade, tomates, oignons rouges, poulet pané façon corn flakes, camemberts panés, parmesan, croûtons, sauce césar)</em></p>
          <p><b>César crevettes :</b><br> <em>(Salade, tomates, oignons rouges, crevettes panées, ail et persil, camemberts panés, parmesan, croûtons, sauce césar)</em></p>
          <p><b>Fromagère :</b><br> <em>(Salade, tomates, oignons rouges, dés d'emmental, camemberts panés, toasts de chèvre chauds, parmesan, vinaigrette maison)</em></p>
        </div>
        <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
      </div>`,
      moulesFrites: `<img src="./img/Carte/CarteV2/moules.png" alt="parillada" id="parillada"/>
      <div class="bordureCarteMer">
        <div class="titreCarteMer">
          <h2>Les Moules Frites 15,00€</h2>
        </div>
        <div class="carteMer">
          <p><b>Marinière</b> <em>(beurre, oignons, ail, persil, vin blanc)</em></p>
          <p><b>Roquefort</b> <em>(oignons, roquefort, crème)</em></p>
          <p><b>Grand-mère</b> <em>(oignons, ail, persil, crème)</em></p>
          <p><b>Crème d'ail</b> <em>(oignons, ail, persil, crème)</em></p>
          <p><em>Toutes nos sauces sont faites maison</em></p>
          <p><em>Supplément sauce : 1€ *</em></p>
        </div>
        <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
      </div>
      <div id="prixMoules"><p><b>Formule<br>moules frites<br>à volonté<br>+ 1 bière</b> <em>(25cl)</em><br><b>21€ <em>*</em> / personne</b></p></div>`,
      coquillagesCrustaces: `<img src="./img/Carte/CarteV2/coquillages.png" alt="parillada" id="parillada" />
      <div class="bordureCarteMer">
        <div class="titreCarteMer">
          <h2>Coquillages & Crustacés</h2>
        </div>
        <div class="carteMer">
          <div class="prix"><p><b>Dégustation</b></p><p class="prixdroite">14,50€</p></div>
          <div class="prix"><p><b>Solo</b></p><p class="prixdroite">32,00€</p></div>
          <div class="prix"><p><b>Duo</b></p><p class="prixdroite">65,00€</p></div>
          <div class="prix"><p><b>6 huîtres de Bouzigues n°3</b></p><p class="prixdroite">11,50€</p></div>
          <div class="prix"><p><b>12 huîtres de Bouzigues n°3</b></p><p class="prixdroite">23,00€</p></div>
          <div class="prix"><p><b>Crevettes fraîches mayonnaise</b></p><p class="prixdroite">14,50€</p></div>
          <div class="prix"><p><b>Gambas froides mayonnaise</b></p><p class="prixdroite">15,00€</p></div>
          <div class="prix"><p><b>Bulots aïoli</b></p><p class="prixdroite">11,50€</p></div>
        </div>
        <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
      </div>`,
      coteMer: `<img src="./img/Carte/CarteV2/mer.png" alt="parillada" id="parillada" />
      <div class="bordureCarteMer">
        <div class="titreCarteMer">
          <h2>Côté Mer</h2>
        </div>
        <div class="carteMer">
          <div class="prix"><p><b>Seiche à la plancha en persillade</b></p><p class="prixdroite">21,00€</p></div>
          <div class="prix"><p><b>Gambas grillées en persillade</b></p><p class="prixdroite">21,00€</p></div>
          <div class="prix"><p><b>Dorade entière au four</b> <em>environ 300/400gr</em></p><p class="prixdroite">23,00€</p></div>
          <div class="prix"><p><b>Parillada pour 2 personnes :</b><br> <em>(Dorade, couteaux, moules, gambas, crevettes, seiche, aioli et mayonnaise, salade composée et frites)</em></p><p class="prixdroite">65,00€</p></div>
        </div>
        <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
      </div>`,
      coteTerre: `<img src="./img/Carte/CarteV2/terre.png" alt="parillada" id="parillada" />
      <div class="bordureCarteMer">
        <div class="titreCarteMer">
          <h2>Côté Terre</h2>
        </div>
        <div class="carteMer">
          <div class="prix"><p><b>Steak à cheval</b> <em>(180gr façon bouchère)</em></p><p class="prixdroite">14,00€</p></div>
          <div class="prix"><p><b>Double carpaccio de boeuf charolais</b> pesto et parmesan</p><p class="prixdroite">16,00€</p></div>
        </div>
        <p class="infoCarte"><em>* Nos prix peuvent variés en fonction de l'arrivage</em></p>
      </div>`,
    },
  },
};

// Variables pour suivre l'état du sous-menu
let sousMenuVisible = false;
let sousMenu;

function afficherContenuSection(section) {
  contenuCarte.innerHTML = sections[section];

  // Supprimer la classe "active" de tous les boutons
  for (const btn of sectionBtns) {
    btn.classList.remove("active");
  }

  // Supprimer la classe "active" de tous les sous-menus
  const sousMenus = carte.getElementsByClassName("sous-menu");
  for (const sousMenu of sousMenus) {
    sousMenu.classList.remove("active");
  }

  // Ajouter la classe "active" au bouton de section correspondant
  const boutonActif = document.querySelector(`[data-section="${section}"]`);
  boutonActif.classList.add("active");

  // Vérifier si la section est "plats" et ajouter la classe "active" au sous-menu correspondant
  if (section === "plats" && !sousMenuVisible) {
    sousMenuVisible = true;
    sousMenu = document.createElement("ul");
    sousMenu.className = "sous-menu";

    // Ajouter les sous-sections du menu des plats
    for (const sousSection in sections.plats.sousSections) {
      const sousSectionLi = document.createElement("li");
      sousSectionLi.textContent = sections.plats.sousSections[sousSection];
      sousSectionLi.dataset.sousSection = sousSection;
      sousSectionLi.addEventListener("click", () => afficherPlats(sousSection));

      sousMenu.appendChild(sousSectionLi);
    }

    carte.appendChild(sousMenu);

    // Afficher directement le sous-menu "Moules Frites"
    const moulesFritesSousSection = "moulesFrites";
    afficherPlats(moulesFritesSousSection);
  } else if (section !== "plats" && sousMenuVisible) {
    sousMenuVisible = false;
    carte.removeChild(sousMenu);
  }
  if (section === "plats" && sousMenuVisible) {
    // Afficher directement le sous-menu "Moules Frites"
    const moulesFritesSousSection = "moulesFrites";
    afficherPlats(moulesFritesSousSection);
  }

  // Calculer la position de défilement en ajustant de 5vh au-dessus de la carte
  const carteOffsetTop = containeurCarte.offsetTop;
  const positionScroll = carteOffsetTop - window.innerHeight * 0.1;

  // Faire défiler jusqu'à la position ajustée
  carte.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  window.scrollBy(0);
}

function afficherPlats(sousSection) {
  contenuCarte.innerHTML = "";

  const contenuHTML = sections.plats.platsParSousSection[sousSection];
  const sousSectionItem = document.createElement("div");
  sousSectionItem.innerHTML = contenuHTML;
  contenuCarte.appendChild(sousSectionItem);

  // Supprimer la classe "active" de toutes les sous-sections
  const sousSectionItems = sousMenu.getElementsByTagName("li");
  for (const item of sousSectionItems) {
    item.classList.remove("active");
  }

  // Ajouter la classe "active" à la sous-section correspondante
  const sousSectionActuelle = sousMenu.querySelector(
    `li[data-sous-section="${sousSection}"]`
  );
  sousSectionActuelle.classList.add("active");

  // Calculer la position de défilement en ajustant de 5vh au-dessus de la carte
  const carteOffsetTop = containeurCarte.offsetTop;
  const positionScroll = carteOffsetTop - window.innerHeight * 0.1;

  // Faire défiler jusqu'à la position ajustée
  carte.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  window.scrollBy(0);
}

// Écouteurs d'événements pour les boutons de section
for (const btn of sectionBtns) {
  btn.addEventListener("click", (event) => {
    const section = event.target.dataset.section;
    afficherContenuSection(section);
  });
}

// Afficher par défaut la section des entrées
afficherContenuSection("entrees");
