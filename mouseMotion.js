let lastX; //this is to track the last observed mouse x position
let bar = document.querySelector("div");

bar.addEventListener("mousedown", (event) => {
  console.log(event.button);
  if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault();
  }
});

function moved(event) {
  if (event.button == 0) {
    window.removeEventListener("mousemove", moved);
  } else {
    let distance = event.clientX - lastX;
    console.log(distance);
    let newWidth = Math.max(10, bar.offsetWidth + distance);
    console.log("new width", newWidth);
    bar.style.width = newWidth + "px";
    console.log(bar.style.width);
    lastX = event.clientX;
    console.log(lastX);
  }
}
