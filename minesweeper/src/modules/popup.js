export function resultsPopup(overlay, popup, popupTitle, game, clicksCounter, sec) {
  const stepsCount = document.querySelector('.steps-count');
  const timeCount = document.querySelector('.time-count');

  overlay.classList.add('active');
  popup.classList.add('active');
  game === 'win' ? popupTitle.textContent = 'you win' : popupTitle.textContent = 'you lose';
  stepsCount.textContent = clicksCounter;
  timeCount.textContent = `${sec}s`;
}

export function closePopup(overlay, popup) {
  overlay.classList.remove('active');
  popup.classList.remove('active');
}