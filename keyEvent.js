let p = document.querySelector("p");
console.log(p);
let h1 = document.createElement("h1");

window.addEventListener("keydown", (event) => {
  if (event.key) {
    console.log(event.key);
    h1.innerHTML = `${event.key} is pressed`;
  }
  if (event.key == "v") {
    document.body.style.background = "violet";
  } else if (event.key === "Enter") {
    document.body.style.background = "yellow";
  }
});
p.appendChild(h1);

window.addEventListener("keyup", (event) => {
  if (event.key == "v") {
    document.body.style = "";
  } else if (event.key == "Enter") {
    document.body.style.background = "";
  }
});
