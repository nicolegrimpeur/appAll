export function CleanForm(tabIdDiv: string[]): void {
  let currentDiv;

  // supprime toutes les zones de textes possibles
  for (const idDiv of tabIdDiv) {
    if (idDiv !== '') {
      currentDiv = document.getElementById(idDiv);
      currentDiv.remove();
    }
  }

  DebutForm(tabIdDiv);
}

// permet de créer la div parent
export function DebutForm(tabIdDiv: string[]): void {
  let currentDiv;
  let ionCard;

  // ajoute à la div ayant le nom contenu après le _ la div idDIv
  for (const idDiv of tabIdDiv) {
    currentDiv = document.getElementById(idDiv.substring(idDiv.search('_') + 1));
    ionCard = document.createElement('ion-card');
    if (currentDiv !== null) { currentDiv.appendChild(ionCard); }
    ionCard.setAttribute('id', idDiv);
  }
}

// permet d'ajouter du texte au formulaire
export function AjoutTexte(valueString, idString, idDiv): void {
  const ionCard = document.getElementById(idDiv);

  const ionCardContent = document.createElement('ion-card-content');
  ionCard.appendChild(ionCardContent);
  ionCardContent.setAttribute('class', idString);
  ionCardContent.setAttribute('style', 'padding: 5px; font-size: 17px;');
  ionCardContent.innerHTML = '&nbsp; ' + valueString;
}
