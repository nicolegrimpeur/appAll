export function CleanForm(): void {
  let currentDiv = document.getElementById('liens');
  let div = document.getElementById('div_liens');
  if (currentDiv !== null) { currentDiv.removeChild(div); }

  currentDiv = document.getElementById('infos');
  div = document.getElementById('div_infos');
  if (currentDiv !== null) { currentDiv.removeChild(div); }

  currentDiv = document.getElementById('infosAll');
  div = document.getElementById('div_infosAll');
  if (currentDiv !== null) { currentDiv.removeChild(div); }

  DebutForm();
}

// permet de créer la div parent
export function DebutForm(): void {
  let currentDiv = document.getElementById('liens');

  let div = document.createElement('div');
  if (currentDiv !== null) { currentDiv.appendChild(div); }
  div.setAttribute('id', 'div_liens');


  currentDiv = document.getElementById('infos');

  div = document.createElement('div');
  if (currentDiv !== null) { currentDiv.appendChild(div); }
  div.setAttribute('id', 'div_infos');


  currentDiv = document.getElementById('infosAll');

  div = document.createElement('div');
  if (currentDiv !== null) { currentDiv.appendChild(div); }
  div.setAttribute('id', 'div_infosAll');
}

// permet d'ajouter du texte au formulaire
export function AjoutTexte(valueString, idString, idDiv): void {
  const div = document.getElementById(idDiv);

  const p = document.createElement('p');
  div.appendChild(p);
  p.setAttribute('id', idString);
  p.innerHTML = '&nbsp; ' + valueString;
}
