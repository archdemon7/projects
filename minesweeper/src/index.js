import './index.html';
import './style.scss';
import { createHtml } from './modules/createhtml';
import { createField } from './modules/createfield';
import { createBombs } from './modules/bombs';
import { openCell, addColor } from './modules/cells';
import { stats } from './modules/counters';
import { resultsPopup, closePopup } from './modules/popup';
import { continuePopup } from './modules/continue';
import { switcherTheme } from './modules/switcher';
import { clickSound, explosionSound, flagSound, winSound } from './modules/sounds';
import { popupStatsFunc } from './modules/stats';

createHtml();
const field = document.querySelector('.field');
const savegame = document.querySelector('.savegame');

const overlay = document.querySelector('.overlay');
const overlayContinue = document.querySelector('.overlay-continue');
const popup = document.querySelector('.popup');
const popupContinue = document.querySelector('.popup-continue');
const overlayStats = document.querySelector('.overlay-stats');
const popupStats = document.querySelector('.popup-stats');
const popupTitle = document.querySelector('.popup-title');
const newGamePopup = document.querySelector('.new-game');
const score = document.querySelector('.score');
const scoreButton = document.querySelector('.score-button');

score.addEventListener('click', () => {
	popupStatsFunc(overlayStats, popupStats);
});

scoreButton.addEventListener('click', () => {
	popupStatsFunc(overlayStats, popupStats);
});

let width = 10;
let flags = 0;
let bombIndexes;
const levels = document.querySelectorAll('.level-button');
let interval;
let sec = 0;
let clickCounter = 0;
let switcher = document.querySelector('.checkbox');
let soundSwitcher = document.querySelector('.soundCheckbox');
switcherTheme(JSON.parse(localStorage.getItem('switcher')));
if (JSON.parse(localStorage.getItem('switcher'))) switcher.checked = true;

if (JSON.parse(localStorage.getItem('soundSwitcher'))) soundSwitcher.checked = true;



const timer = document.querySelector('.timer');
let game = true;


if (localStorage.getItem('gameProperties')) {
	continuePopup(overlayContinue, popupContinue);
	const continueButton = document.querySelector('.continue-button');
	continueButton.addEventListener('click', () => {
		continueGame();
		width = +JSON.parse(localStorage.getItem('gameProperties')).width;
		levels.forEach(el => {
			el.classList.contains('easy-level') && width == 10 ? el.classList.add('active') : el.classList.remove('active');
			el.classList.contains('medium-level') && width == 15 ? el.classList.add('active') : el.classList.remove('active');
			el.classList.contains('hard-level') && width == 25 ? el.classList.add('active') : el.classList.remove('active');
		})
		closePopup(overlayContinue, popupContinue);
	})
	const newGameContinue = document.querySelector('.new-game2');
	newGameContinue.addEventListener('click', () => {
		clearLocalstorage()
		newGame(width);
		closePopup(overlayContinue, popupContinue);
	})
}

overlay.addEventListener('click', ()=> {
	closePopup(overlay, popup);
	game = false;
})


levels.forEach(el => {
	el.addEventListener('click', e => {
		clearLocalstorage()
		if (el.classList.contains('easy-level')) {
			width = 10;
			activeLevel(el);
			newGame(width);
		}
		if (el.classList.contains('medium-level')) {
			width = 15;
			activeLevel(el);
			newGame(width);
		}
		if (el.classList.contains('hard-level')) {
			width = 25;
			activeLevel(el);
			newGame(width);
		}
	})
})

newGamePopup.addEventListener('click', () => {
	newGame(width)
	closePopup(overlay, popup);
})

const input = document.querySelector('.input');
const bombsInputCounter = document.querySelector('.bombs-counter');
bombsInputCounter.textContent = input.value;
input.style.background = `linear-gradient(to right, #595959 0%, #595959 ${input.value/99*100}%, #DCDCDC ${input.value/99*100}%, #DCDCDC 100%)`;
field.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
let bombs = input.value;
createField(width);

field.addEventListener('contextmenu', e => {
	e.preventDefault();
	const cells = document.querySelectorAll('.cell');
	const targetCell = +e.target.getAttribute('number');
	if (cells[targetCell].classList.contains('clicked')) return;
	if (cells[targetCell].classList.contains('bomb')) return;
	if (cells[targetCell].classList.contains('close-bomb')) return;
	if (bombIndexes === undefined) {
		if (localStorage.getItem('gameProperties') && JSON.parse(localStorage.getItem('gameProperties')).bombIndexes != undefined){
			bombIndexes = JSON.parse(localStorage.getItem('gameProperties')).bombIndexes;
		} else {
			bombIndexes = createBombs(width, bombs, targetCell);
		}
	}
	if (game === false) return;
	if (!soundSwitcher.checked) flagSound();
	let flagCounter = 0;
	cells.forEach(el => {
		if (el.classList.contains('flag')) {
			flagCounter++;
		} 
	})
	if (flagCounter < bombIndexes.length) {
		cells[targetCell].classList.toggle('flag');
	} else {
		if (cells[targetCell].classList.contains('flag')) cells[targetCell].classList.remove('flag');
	}
	flags = 0;
	cells.forEach(el => {
		if (el.classList.contains('flag')) {
			flags++;
		}
	})
	
	stats(clickCounter, input, flags);
})
field.addEventListener('click', e => {
	const cells = document.querySelectorAll('.cell');
	if (!e.target.classList.contains('cell')) return;
	if (e.target.classList.contains('flag')) return;
	if (e.target.textContent == ' ') return;
	if (game === false) return;
	if (localStorage.getItem('gameProperties')) {
		width = JSON.parse(localStorage.getItem('gameProperties')).width;
	}
	clickCounter++;
	stats(clickCounter, input, flags);
	const targetCell = +e.target.getAttribute('number');
	const column = targetCell % width;
	const row = (targetCell - column) / width;
	if (localStorage.getItem('gameProperties')) {
		sec = JSON.parse(localStorage.getItem('gameProperties')).sec
		interval = setInterval(timerSec, 1000);
	}
	if (sec == 0) {
		sec = 1;
		timer.innerText = '001';
		interval = setInterval(timerSec, 1000);
	}
  if (bombIndexes == undefined) {
		input.disabled = true;
		if (localStorage.getItem('gameProperties') && JSON.parse(localStorage.getItem('gameProperties')).bombIndexes != undefined){
			bombIndexes = JSON.parse(localStorage.getItem('gameProperties')).bombIndexes;
		} else {
			bombIndexes = createBombs(width, bombs, targetCell);
		}
		if (!soundSwitcher.checked) clickSound();
		openCell(bombIndexes, targetCell, e, row, column, width, cells, bombIndexes);
  } else {
		if (bombIndexes.includes(targetCell)) {
			cells[targetCell].classList.add('bomb');
			game = 'lose';
			if (!soundSwitcher.checked) explosionSound();
			clearInterval(interval);
			if (localStorage.getItem('gameProperties')) {
				clickCounter = JSON.parse(localStorage.getItem('gameProperties')).clickCounter;
			}
			resultsPopup(overlay, popup, popupTitle, game, clickCounter, sec);
		}
		if (!soundSwitcher.checked) clickSound();
		openCell(bombIndexes, targetCell, e, row, column, width, cells, bombIndexes);
	}
	if (chekWin(cells, bombIndexes)) {
		game = 'win';
		statsArr(sec, clickCounter, bombIndexes);
		if (!soundSwitcher.checked) winSound();
		clearInterval(interval);
		resultsPopup(overlay, popup, popupTitle, game, clickCounter, sec);
	}
	if (localStorage.getItem('gameProperties')) {
		clearLocalstorage()
	}
})

input.addEventListener('input', function() {
	let value = this.value;
	bombsInputCounter.textContent = value;
  input.style.background = `linear-gradient(to right, #595959 0%, #595959 ${value/99*100}%, #DCDCDC ${value/99*100}%, #DCDCDC 100%)`;
	field.innerHTML = ' ';
	bombIndexes = undefined;
	bombs = value;
	stats(clickCounter, input, flags);
	createField(width);
})

function newGame(width) {
	clearInterval(interval)
	timer.innerText = '000';
	sec = 0;
	field.innerHTML = ' ';
	input.disabled = false;
	bombIndexes = undefined;
	clickCounter = 0;
	flags = 0;
	game = true;
	stats(clickCounter, input, flags);
	createField(width);
}

function activeLevel(el) {
	levels.forEach(level => {
		level.classList.remove('active');
	})
	el.classList.add('active');
}

function chekWin(cells, bombIndexes) {
	let counter = 0;
	cells.forEach(el => {
		if (el.classList.contains('clicked')) {
			counter++;
		}
	})
	if (cells.length - counter == bombIndexes.length) {
		return true;
	}
}

function saveGame() {
	clearInterval(interval);
	const cells = document.querySelectorAll('.cell');
	let cellsObj = {}; 

	cells.forEach(el => {
		const targetCell = +el.getAttribute('number');
		cellsObj[`${targetCell}`] = {};
		cellsObj[`${targetCell}`]['isClicked'] = el.classList.contains('clicked');
		cellsObj[`${targetCell}`]['isEmpty'] = el.classList.contains('empty');
		cellsObj[`${targetCell}`]['isFlag'] = el.classList.contains('flag');
		cellsObj[`${targetCell}`]['text'] = el.textContent;
	})

	let gameProperties = {
		width,
		bombIndexes,
		clickCounter,
		sec,
		flags,
	}


	return {cellsObj, gameProperties};
}

savegame.addEventListener('click', () => {
	let { cellsObj, gameProperties } = saveGame();
	localStorage.setItem('cellsObj', JSON.stringify(cellsObj));
	localStorage.setItem('gameProperties', JSON.stringify(gameProperties));
})

function continueGame() {
	let cellsObj = JSON.parse(localStorage.getItem('cellsObj'));
	let gameProperties = JSON.parse(localStorage.getItem('gameProperties'));
	let width = gameProperties.width;
	clickCounter = gameProperties.clickCounter;
	sec = gameProperties.sec;
	field.innerHTML = ' ';
	input.disabled = true;
	game = true;
	bombIndexes = gameProperties.bombIndexes;
	flags = gameProperties.flags;
	stats(clickCounter, input, flags);
	createField(width);
	timer.innerText = sec <= 9 ? '00' + sec : sec <= 99 ? '0' + sec : sec;
	const cells = document.querySelectorAll('.cell');
	for (let i = 0; i < width * width; i++) {
		if (cellsObj[i].isClicked == true) cells[i].classList.add('clicked');
		if (cellsObj[i].isEmpty == true) cells[i].classList.add('empty');
		if (cellsObj[i].isFlag == true) cells[i].classList.add('flag');
		cells[i].textContent = cellsObj[i].text;
		if (+cellsObj[i].text) {
			addColor(cells[i], +cellsObj[i].text);
		}
	}

}

function clearLocalstorage() {
	localStorage.removeItem('cellsObj');
	localStorage.removeItem('gameProperties');
}

switcher.addEventListener('click', () => {
	switcherTheme(switcher.checked);
	localStorage.setItem('switcher', switcher.checked);
})

soundSwitcher.addEventListener('click', () => {
	localStorage.setItem('soundSwitcher', soundSwitcher.checked)
})

function timerSec() {
  sec++;
  if (sec <= 9) {
    timer.innerText = '00' + sec;
  } else if (sec <= 99) {
    timer.innerText = '0' + sec;
  } else {
    timer.innerText = sec;
  }
}

function statsArr(sec, clickCounter, bombIndexes) {
	let stats;
	let obj;

	if (!localStorage.getItem('stats')) {
		stats = [];
		obj = {
			sec,
			clickCounter,
			bombs: bombIndexes.length,
		};
		stats.push(obj);
	} else {
		stats = JSON.parse(localStorage.getItem('stats'));
		obj = {
			sec,
			clickCounter,
			bombs: bombIndexes.length,
		}
		if (stats.length < 10) {
			stats.push(obj);
		} else {
			stats.shift();
			stats.push(obj);
		}
	}
	localStorage.setItem('stats', JSON.stringify(stats));
}
