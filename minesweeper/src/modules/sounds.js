import click from '../sounds/click.mp3';
import explosion from '../sounds/explosion.mp3';
import flag from '../sounds/flag.mp3';
import win from '../sounds/win.mp3';

export function clickSound() {
	const audio = new Audio();
	audio.src = click;
	audio.play();
}

export function explosionSound() {
	const audio = new Audio();
	audio.src = explosion;
	audio.play();
}

export function flagSound() {
	const audio = new Audio();
	audio.src = flag;
	audio.play();
}

export function winSound() {
	const audio = new Audio();
	audio.src = win;
	audio.play();
}