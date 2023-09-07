export function createBombs(width, bombs, firstClick) {
  const cells = width*width;

  const array = new Array(cells);
  for (let i = 0; i < cells; i++) {
    if (i < bombs) {
      array[i] = 'bomb';
    } else {
      array[i] = '0';
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
	shuffle(array);
	while (array[firstClick] == 'bomb') {
		shuffle(array);
	}
	
	const bombIndexes = [...array.keys()].filter(el => array[el] == 'bomb');
	return bombIndexes;
}

export function isBomb(arr, cell) {
	return arr.includes(cell);
}

export function bombsCounter(arr, row, column, width) {
	let counter = 0;
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			const cell = (row + y) * width + (column + x);
			if (isBomb(arr, cell) && row + y >= 0 && row + y < width && column + x >= 0 && column + x < width) counter++;
		}
	}
	return counter;
}