let newSize = prompt("How many squares per side do you want in the new grid?");
if (newSize > 100) {
  newSize = prompt("Max value is 100 please choose another size.");
}
//link variable to element
const container = document.getElementById("divContainer");
// write function to create the table
function createTable(rows, cols) {
  //set the value of the two css variable to whatever arguments are passed into the function
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  // loop the creation of the total number of squares
  for (let i = 0; i < rows * cols; i++) {
    let square = document.createElement("div");
    container.appendChild(square).className = "grid-item";
  }
  let squares = document.getElementsByClassName("grid-item");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("colorFill");
    });
  }
}
createTable(newSize, newSize);

//hover events

//reset function
function clearGrid() {
  container.innerHTML = "";
}

function resetSquares() {
  // for (let i = 0; i < squares.length; i++) {
  //   squares[i].classList.remove("colorFill");
  // }
  clearGrid();
  newSize = prompt("How many squares per side do you want in the new grid?");
  if (newSize > 100) {
    newSize = prompt("Max value is 100 please choose another size.");
  }
  createTable(newSize, newSize);
}
