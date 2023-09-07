export function createHtml() {
  const body = document.querySelector('body');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  body.append(overlay);

  const overlayContinue = document.createElement('div');
  overlayContinue.classList.add('overlay-continue');
  body.append(overlayContinue);

  const overlayStats = document.createElement('div');
  overlayStats.classList.add('overlay-stats');
  body.append(overlayStats);

  const popup = document.createElement('div');
  popup.classList.add('popup');
  body.append(popup);

  const popupContinue = document.createElement('div');
  popupContinue.classList.add('popup-continue');
  body.append(popupContinue);

  const popupStats = document.createElement('div');
  popupStats.classList.add('popup-stats');
  body.append(popupStats);

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
  popup.append(titleContainer);

  const popupTitle = document.createElement('p');
  popupTitle.classList.add('popup-title');
  titleContainer.append(popupTitle);

  const results = document.createElement('div');
  results.classList.add('results');
  popup.append(results);

  const stepsInfo = document.createElement('div');
  stepsInfo.classList.add('steps-info');
  results.append(stepsInfo);

  const stepsCountTitle = document.createElement('p');
  stepsCountTitle.classList.add('steps-count-title');
  stepsCountTitle.textContent = 'steps:'
  stepsInfo.append(stepsCountTitle);

  const stepsCount = document.createElement('p');
  stepsCount.classList.add('steps-count');
  stepsInfo.append(stepsCount);

  const timeInfo = document.createElement('div');
  timeInfo.classList.add('time-info');
  results.append(timeInfo);

  const timeCountTitle = document.createElement('p');
  timeCountTitle.classList.add('time-count-title');
  timeCountTitle.textContent = 'time:'
  timeInfo.append(timeCountTitle);

  const timeCount = document.createElement('p');
  timeCount.classList.add('time-count');
  timeInfo.append(timeCount);

  const newGamePopup = document.createElement('div');
  newGamePopup.classList.add('new-game', 'menu-button');
  newGamePopup.textContent = 'new game';
  popup.append(newGamePopup);

  const scoreButtonPopup = document.createElement('div');
  scoreButtonPopup.classList.add('score-button', 'menu-button');
  scoreButtonPopup.textContent = 'score';
  popup.append(scoreButtonPopup);


  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  body.append(wrapper);
  const container = document.createElement('div');
  container.classList.add('container');
  wrapper.append(container);

  const menu = document.createElement('div');
  menu.classList.add('menu');
  container.append(menu);

  const saveGameButton = document.createElement('div');
  saveGameButton.classList.add('savegame', 'menu-button');
  saveGameButton.textContent = 'save game';
  menu.append(saveGameButton);

  const level = document.createElement('div');
  level.classList.add('level');
  menu.append(level);

  const easyLevel = document.createElement('div');
  easyLevel.classList.add('level-button', 'easy-level', 'active');
  easyLevel.textContent = 'easy';
  level.append(easyLevel);

  const mediumLevel = document.createElement('div');
  mediumLevel.classList.add('level-button', 'medium-level');
  mediumLevel.textContent = 'medium';
  level.append(mediumLevel);

  const hardLevel = document.createElement('div');
  hardLevel.classList.add('level-button', 'hard-level');
  hardLevel.textContent = 'hard';
  level.append(hardLevel);

  const scoreButton = document.createElement('div');
  scoreButton.classList.add('score', 'menu-button');
  scoreButton.textContent = 'score';
  menu.append(scoreButton);

  const panel = document.createElement('div');
  panel.classList.add('panel');
  container.append(panel);

  const timer = document.createElement('div');
  timer.classList.add('timer');
  timer.textContent = '000';
  panel.append(timer);

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');
  panel.append(inputContainer)

  const bombsCounter = document.createElement('p');
  bombsCounter.classList.add('bombs-counter');
  inputContainer.append(bombsCounter);

  const input = document.createElement('input');
  input.classList.add('input');
  input.type = 'range'
  input.min = 1;
  input.max = 99;
  input.value = 10;
  inputContainer.append(input);

  const stats = document.createElement('div');
  stats.classList.add('stats');
  panel.append(stats);

  const minesStats = document.createElement('div')
  minesStats.classList.add('mines');
  stats.append(minesStats);

  const minesTitle = document.createElement('p');
  minesTitle.classList.add('stats-text');
  minesTitle.textContent = 'mines';
  minesStats.append(minesTitle);

  const minesCounter = document.createElement('p');
  minesCounter.classList.add('stats-text', 'mines-stats');
  minesCounter.innerHTML = 10;
  minesStats.append(minesCounter);

  const stepsStats = document.createElement('div');
  stepsStats.classList.add('steps');
  stats.append(stepsStats);

  const stepsTitle = document.createElement('p');
  stepsTitle.classList.add('stats-text');
  stepsTitle.textContent = 'steps';
  stepsStats.append(stepsTitle);

  const stepsCounter = document.createElement('p');
  stepsCounter.classList.add('stats-text', 'steps-stats');
  stepsCounter.innerHTML = 0;
  stepsStats.append(stepsCounter);

  const flagsStats = document.createElement('div');
  flagsStats.classList.add('flags');
  stats.append(flagsStats);

  const flagsTitle = document.createElement('p');
  flagsTitle.classList.add('stats-text');
  flagsTitle.textContent = 'flags';
  flagsStats.append(flagsTitle);

  const flagsCounter = document.createElement('p');
  flagsCounter.classList.add('stats-text', 'flags-stats');
  flagsCounter.innerHTML = 0;
  flagsStats.append(flagsCounter);

  const field = document.createElement('div');
  field.classList.add('field');
  wrapper.append(field);

  const switchers = document.createElement('div');
  switchers.classList.add('switchers');
  wrapper.append(switchers);

  const themeSwitch = document.createElement('div');
  themeSwitch.classList.add('theme-switch');
  switchers.append(themeSwitch);

  const lightTheme = document.createElement('p');
  lightTheme.classList.add('light-theme', 'theme');
  lightTheme.textContent = 'light';
  themeSwitch.append(lightTheme);

  const switcher = document.createElement('label');
  switcher.classList.add('switcher');
  themeSwitch.append(switcher);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  switcher.append(checkbox);

  const span = document.createElement('span');
  span.classList.add('span');
  switcher.append(span);
  
  const darkTheme = document.createElement('p');
  darkTheme.classList.add('dark-theme', 'theme');
  darkTheme.textContent = 'dark';
  themeSwitch.append(darkTheme);



  const soundSwitch = document.createElement('div');
  soundSwitch.classList.add('sound-switch');
  switchers.append(soundSwitch);

  const soundOn = document.createElement('p');
  soundOn.classList.add('sound-on', 'theme');
  soundOn.textContent = 'sound on';
  soundSwitch.append(soundOn);

  const soundSwitcher = document.createElement('label');
  soundSwitcher.classList.add('sound-switcher');
  soundSwitch.append(soundSwitcher);

  const soundCheckbox = document.createElement('input');
  soundCheckbox.type = 'checkbox';
  soundCheckbox.classList.add('checkbox', 'soundCheckbox');
  soundSwitcher.append(soundCheckbox);

  const soundSpan = document.createElement('span');
  soundSpan.classList.add('span');
  soundSwitcher.append(soundSpan);
  
  const soundOff = document.createElement('p');
  soundOff.classList.add('sound-off', 'theme');
  soundOff.textContent = 'sound off';
  soundSwitch.append(soundOff);
}