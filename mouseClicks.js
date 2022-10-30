window.addEventListener("click", (event) => {
  let dot = document.createElement("div");
  let demo = document.createElement("p");
  dot.className = "dot";
  console.log(dot);
  dot.style.left = event.pageX - 4 + "px";
  console.log("x ", event.pageX);
  dot.style.top = event.pageY - 4 + "px";
  console.log("y ", event.pageY);
  console.log(dot.style.left);
  console.log(dot.style.top);
  console.log(dot.getBoundingClientRect());

  document.body.appendChild(dot);
  demo.innerHTML = `${dot.style.left},${dot.style.top}`;
  dot.appendChild(demo);
});
