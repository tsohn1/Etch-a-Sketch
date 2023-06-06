let rows = 16;
let cols = 16;

function fill_square() {
  this.classList.add("filled");
}

function clear_squares() {
  const square = document.querySelectorAll(".square");
  square.forEach(element => { element.classList.remove("filled");
    
  });
}

function make_grid() {
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
  clear.addEventListener("click", clear_squares);
  dimensions.addEventListener("click", prompt_dimensions);
}

function prompt_dimensions() {
  let user_input = prompt("please enter a number between 1~100:");
  let new_dimensions = parseInt(user_input);

  while (new_dimensions < 1 || new_dimensions > 100 || isNaN(new_dimensions)) {
    if (isNaN(new_dimensions)) {
      user_input = prompt("invalid input. Please enter a number between 1~100:");
    }
    else {
      user_input = prompt("your number is out of range. Please enter a number between 1~100:");
    }
    new_dimensions = parseInt(user_input);
  }

  rows = new_dimensions;
  cols = new_dimensions;
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  make_grid();
}

const grid = document.querySelector('.grid');
const clear = document.querySelector(".clear");
const dimensions = document.querySelector(".dimensions");
make_grid();
