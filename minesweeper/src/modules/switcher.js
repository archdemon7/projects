export function switcherTheme(bool) {
  const wrapper = document.querySelector('.wrapper');
	const levels = document.querySelectorAll('.level-button');
	const buttons = document.querySelectorAll('.menu-button');
	const body = document.querySelector('body');
	const statsText = document.querySelectorAll('.stats-text');
	const inputContainer = document.querySelector('.input-container');
	const theme = document.querySelectorAll('.theme');
	if (bool) {
		body.style.background = '#000000';
		wrapper.classList.add('dark');
		levels.forEach(el => el.classList.add('dark'));
		buttons.forEach(el => el.classList.add('dark'));
		statsText.forEach(el => el.classList.add('dark'));
		inputContainer.classList.add('dark');
		theme.forEach(el => el.classList.add('dark'));
	} else {
		body.style.background = 'pink'
		wrapper.classList.remove('dark');
		levels.forEach(el => el.classList.remove('dark'));
		buttons.forEach(el => el.classList.remove('dark'));
		statsText.forEach(el => el.classList.remove('dark'));
		inputContainer.classList.remove('dark');
		theme.forEach(el => el.classList.remove('dark'));
	}
}