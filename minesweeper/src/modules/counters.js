export function stats(clickCounter, input, flags) {
  const minesStats = document.querySelector('.mines-stats');
  const stepsStats = document.querySelector('.steps-stats');
  const flagsStats = document.querySelector('.flags-stats');

  minesStats.innerHTML = input.value - flags;
  stepsStats.innerHTML = clickCounter;
  flagsStats.innerHTML = flags;
}