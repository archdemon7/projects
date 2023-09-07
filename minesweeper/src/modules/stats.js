import { closePopup } from "./popup";

export function popupStatsFunc(overlay, popup) {
  overlay.classList.add('active');
  popup.classList.add('active');

  popup.innerHTML = ' ';

  const title = document.createElement('p');
  title.classList.add('popup-title');
  title.textContent = 'Last 10 wins';
  popup.append(title);
  
  const statsContainer = document.createElement('div');
  statsContainer.classList.add('stats-container');
  popup.append(statsContainer);

  const buttonClose = document.createElement('div');
  buttonClose.classList.add('close-button', 'menu-button');
  buttonClose.textContent = 'close';
  popup.append(buttonClose);

  buttonClose.addEventListener('click', () => {
    closePopup(overlay, popup)
  })

  if (!JSON.parse(localStorage.getItem('stats'))) {
    statsContainer.innerText = 'NoNe'
    return
  }

  let stats = JSON.parse(localStorage.getItem('stats'));

  for (let i = 0; i < stats.length; i++) {
    const statsRow = document.createElement('div');
    statsRow.classList.add('stats-row');
    statsContainer.append(statsRow);

    const statsText = document.createElement('p');
    statsText.classList.add('stats-text');
    statsText.innerText = `${i+1}. Clicks: ${stats[i].clickCounter} Seconds: ${stats[i].sec} Bombs: ${stats[i].bombs}`;
    statsRow.append(statsText);
  }


}