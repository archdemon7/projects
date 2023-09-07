export function createField(width) {
  const field = document.querySelector('.field');
  const cells = width*width;
  field.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  for (let i = 0; i < cells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('number', i);
    field.append(cell);
  }
}