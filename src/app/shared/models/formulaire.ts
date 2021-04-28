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
  let div;

  // ajoute à la div ayant le nom contenu après le _ la div idDIv
  for (const idDiv of tabIdDiv) {
    currentDiv = document.getElementById(idDiv.substring(idDiv.search('_') + 1));
    div = document.createElement('div');
    if (currentDiv !== null) { currentDiv.appendChild(div); }
    div.setAttribute('id', idDiv);
  }
}

// permet d'ajouter du texte au formulaire
export function AjoutTexte(valueString, idString, idDiv): void {
  const div = document.getElementById(idDiv);

  const p = document.createElement('p');
  div.appendChild(p);
  p.setAttribute('class', idString);
  p.innerHTML = '&nbsp; ' + valueString;
}
