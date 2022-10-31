let isDrawing = false;
let x = 0,
  y = 0;

let convas = document.getElementById("convas");
let off = document.createElement("p");
// console.log(convas);
let context = convas.getContext("2d");
//console.log(context);

//2 add event listen to the convas
// add event listener to mousedown then get current coord
//(e.offsetX and e.offsetY)
//  then update the x and y coord to current coord
//set the isdrawing to true
convas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

//once the mousedown is active, we can now start drawing
//by adding mousemove event listener.
// when mousemove fires,
// it check if isdrawing is true. If so, then
//it call the function drawline
//with contex, x,y, e.offsetY, and e.offsetX
// update the current coords x and y

convas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
    off.innerHTML = `${x}, ${y}`;
  }
});

// Once we finish drawing the line in the convas, we move the mouse up
//
// the mouseup fires and then the coord are reset to 0
//check if isdrawing is true. If so, call the
//function drawline to trace the last segment
// and isdraw is now set to false again to deactive the drawing
convas.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

document.body.appendChild(off);
