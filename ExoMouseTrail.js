// let dots = [];
// for (let i = 0; i < 12; i++) {
//   let div = document.createElement("div");
//   div.className = "trail";

//   dots.push(div);
//   document.body.appendChild(div);
// }

// let currentDot = 0;
// window.addEventListener("mousemove", (event) => {
//   console.log("dot", dots[currentDot]);

//   let dot = dots[currentDot];

//   currentDot = (currentDot + 1) % dots.length;
//   dot.style.left = event.pageX - 3 + "px";
//   console.log(dot.style.left);
//   dot.style.top = event.pageY - 3 + "px";
//   console.log(dot.style.top);

//   //console.log(currentDot);
// });

// // console.log(div);
// // console.log(div.className);

let dots = [];
for (let i = 0; i < 14; i++) {
  let div = document.createElement("div");
  div.className = "trail";
  dots.push(div);
  document.body.appendChild(div);
}

let curdot = 0;
window.addEventListener("mousemove", (event) => {
  let dot = dots[curdot];
  curdot = (curdot + 1) % dots.length;
  dot.style.top = event.pageY + "px";
  dot.style.left = event.pageX + "px";
});
