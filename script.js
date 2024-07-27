var hint = document.getElementById("hint");

function onHover() {
  var hidden = document.getElementById("hidden");
  hidden.style.display = "inline";
}
function mouseOut() {
  var hidden = document.getElementById("hidden");
  hidden.style.display = "none";
}

var board = document.getElementById("board");
var imageIndex = 0;

var imagesOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 3; j++) {
    var img = document.createElement("img");
    img.src = "./Images/0" + imagesOrder[imageIndex] + ".jpeg";
    img.id = i + "" + j;
    board.append(img);
    imageIndex++;
    img.addEventListener("dragstart", dragStart);
    img.addEventListener("dragover", dragOver);
    // img.addEventListener('dragenter',dragEnter);
    img.addEventListener("dragover", dragOver);
    img.addEventListener("dragleave", dragLeave);
    img.addEventListener("drop", dragDrop);
    img.addEventListener("dragend", dragEnd);
  }
}
console.log(board);

function dragStart() {
  curTile = this;
  console.log(curTile);
  console.log("Start");
}
function dragOver(e) {
  e.preventDefault();
  console.log("1stOver");
}
// function dragEnter(){
//     e.preventDefault();
//     console.log("Enter");
// }
function dragLeave() {
  console.log("leave");
}
function dragDrop() {
  otherTile = this;
  console.log("Drop");
}
function dragEnd() {
  if (!otherTile.src.includes("03.jpeg")) {
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
    (i1 == i2 && j2 == j1 - 1) ||
    (j1 == j2 && i2 == i1 - 1) ||
    (i1 == i2 && j2 == j1 + 1) ||
    (j1 == j2 && i2 == i1 + 1)
  ) {
    let curImg = curTile.src;
    let otherImg = otherTile.src;
    otherTile.src = curImg;
    curTile.src = otherImg;
  }
  console.log("End");
}
