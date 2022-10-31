let isDrawing = false;
let x = 0;
let y = 0;

let convas = document.querySelector("canvas");
console.log("convas", convas);
let off = document.createElement("p");
let context = convas.getContext("2d");

convas.addEventListener("mousedown", (event) => {
  x = event.offsetX;
  console.log(x);
  y = event.offsetY;
  console.log(y);
  isDrawing = true;
});

convas.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    drawLine(context, x, y, event.offsetX, event.offsetY);
    x = event.offsetX;
    y = event.offsetY;
  }
  off.innerHTML = `${x}, ${y}`;
});

window.addEventListener("mouseup", (event) => {
  if (isDrawing) {
    drawLine(context, x, y, event.offsetX, event.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";

  context.lineWidth = 0.5;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
document.body.appendChild(off);
