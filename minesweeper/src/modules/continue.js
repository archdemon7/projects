export function continuePopup(overlay, popup) {
  
  overlay.classList.add('active');
  popup.classList.add('active');
 
  const title = document.createElement('p');
  title.classList.add('popup-title');
  title.textContent = 'Do you want to continue game?';
  popup.append(title);

  const buttonContinue = document.createElement('div');
  buttonContinue.classList.add('continue-button', 'menu-button');
  buttonContinue.textContent = 'continue';
  popup.append(buttonContinue);

  const newGameButton = document.createElement('div');
  newGameButton.classList.add('new-game2', 'menu-button');
  newGameButton.textContent = 'new game';
  popup.append(newGameButton);
}