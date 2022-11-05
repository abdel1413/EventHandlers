let isdrawing = false;
let x = 0;
let y = 0;
let convas = document.getElementById("canvas");
console.log(convas);
let context = convas.getContext("2d");
convas.className = "dot";
console.log(convas);

convas.addEventListener("mousedown", (event) => {
  x = event.offsetX;
  y = event.offsetY;
  isdrawing = true;
});

convas.addEventListener("mousemove", (e) => {
  if (isdrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

convas.addEventListener("mouseup", (e) => {
  if (isdrawing) {
    drawLine(context, x, y, e.offsetY, e.offsetX);
    x = 0;
    y = 0;
    isdrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
