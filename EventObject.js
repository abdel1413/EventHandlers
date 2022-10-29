let button = document.querySelector("button");
button.addEventListener("mousedown", (event) => {
  console.log(event);
  if (event.button == 0) {
    console.log("Left button");
  } else if (event.button == 1) {
    console.log("middle button");
  } else if (event.button == 2) {
    console.log("right button");
  }
});
