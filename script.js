let rows = 16;
let cols = 16;


const grid = document.querySelector('.grid');
for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.classList.add("row");
  grid.appendChild(row);
  for (let j = 0; j < cols; j++) {
    const square = document.createElement('div');
    square.classList.add("square");
    row.appendChild(square);
  }
}
