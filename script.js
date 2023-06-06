function fill_square() {
  this.classList.add("filled");
}

function unfill_square() {
  this.classList.remove("filled");
}

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


const square = document.querySelectorAll(".square");
square.forEach(element => {
  element.addEventListener("mouseenter", fill_square);
});

square.forEach(element => {
  element.addEventListener("mouseleave", unfill_square);
});