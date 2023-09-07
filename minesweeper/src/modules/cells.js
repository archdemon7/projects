import { isBomb, bombsCounter } from "./bombs";

export function openCell(arr, targetCell, e, row, column, width, cells, bombIndexes) {
	if (isBomb(arr, targetCell)) {
		e.target.classList.add('bomb');
		openBombs(cells, bombIndexes);
		return;
	}
	if (bombsCounter(arr, row, column, width) == 0) {
		e.target.textContent = ' ';
		e.target.classList.add('clicked', 'empty');
		cellsOpen(arr, row, column, width, cells);
	} else {
		e.target.textContent = bombsCounter(arr, row, column, width);
		addColor(e.target, bombsCounter(arr, row, column, width));
		e.target.classList.add('clicked');
	}
}

export function addColor(cell, count) {
	switch(+count) {
		case 1:
			cell.style.color = '#322feb';
			break;
		case 2:
			cell.style.color = '#36BC05';
			break;
		case 3:
			cell.style.color = '#FF3838';
			break;
		case 4:
			cell.style.color = '#1800f1';
			break;
		case 5:
			cell.style.color = '#7c4500';
			break;
		case 6:
			cell.style.color = '#069483';
			break;
		case 7:
			cell.style.color = '#000000';
			break;
		case 8:
			cell.style.color = '#b7b2b2';
			break;
	}
}

export function cellsOpen(arr, row, column, width, cells) {
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			if (row + y >= 0 && row + y < width && column + x >= 0 && column + x < width) {
				const el = (row + y) * width + column + x;
				if (cells[el].classList.contains('bomb')) return;
				if (cells[el].textContent !== ' ') {
					if (bombsCounter(arr, row + y, column + x, width) == 0) {
						cells[el].textContent = ' ';
						if (cells[el].classList.contains('flag')) cells[el].classList.remove('flag');
						cells[el].classList.add('clicked', 'empty');
						cellsOpen(arr, row + y, column + x, width, cells);
					} else {
						cells[el].textContent = bombsCounter(arr, row + y, column + x, width);
						addColor(cells[el], bombsCounter(arr, row + y, column + x, width));
						if (cells[el].classList.contains('flag')) cells[el].classList.remove('flag');
						cells[el].classList.add('clicked');
					}
				}
			}
		}
	}
}

export function openBombs(cells, bombIndexes) {
	bombIndexes.forEach(el => {
		if (!cells[el].classList.contains('bomb')) {
			cells[el].classList.add('close-bomb');
		}
	});
}