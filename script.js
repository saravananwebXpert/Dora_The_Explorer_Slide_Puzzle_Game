let hint = document.getElementById("hint");

function onHover() {
  const hidden = document.getElementById("hidden");
  hidden.style.display = "inline";
}
function mouseOut() {
  const hidden = document.getElementById("hidden");
  hidden.style.display = "none";
}

const board = document.getElementById("board");
let imageIndex = 0;

const imagesOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
const imagesCount = 3;

for (let i = 1; i <= imagesCount; i++) {
  for (let j = 1; j <= imagesCount; j++) {
    const img = document.createElement("img");
    img.src = `./Images/0${imagesOrder[imageIndex]}.jpeg`;
    img.id = `${i}${j}`;
    board.append(img);
    imageIndex++;
    img.addEventListener("dragstart", dragStart);
    img.addEventListener("dragover", dragOver);
    img.addEventListener("dragover", dragOver);
    img.addEventListener("drop", dragDrop);
    img.addEventListener("dragend", dragEnd);
  }
}

let curTile = null; // Store current tile being dragged
let otherTile = null; // Store tile being hovered over

function dragStart() {
  curTile = this;
  console.log("Drag Start:", curTile.id);
}
function dragOver(e) {
  e.preventDefault();
  console.log("Drag Over:", this.id);
}
function dragDrop() {
  otherTile = this;
  console.log("Drop on:", otherTile.id);
}
function dragEnd() {
  if (!otherTile || otherTile.src.includes("03.jpeg")) {
    return;
  }

  let curT = curTile.id.split("");
  let i1 = parseInt(curT[0]);
  let j1 = parseInt(curT[1]);

  let otherT = otherTile.id.split("");
  let i2 = parseInt(otherT[0]);
  let j2 = parseInt(otherT[1]);

  //moveLeft, moveTop, moveRight, moveDown
  if (
    (i1 === i2 && j2 === j1 - 1) ||
    (j1 === j2 && i2 === i1 - 1) ||
    (i1 === i2 && j2 === j1 + 1) ||
    (j1 === j2 && i2 === i1 + 1)
  ) {
    let curImg = curTile.src;
    let otherImg = otherTile.src;
    otherTile.src = curImg;
    curTile.src = otherImg;
  }
  console.log("Drag End");
}
