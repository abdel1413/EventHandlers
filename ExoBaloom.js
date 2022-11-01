let p = document.querySelector("p");
let size;
let limit = document.createElement("p");
function setSize(newsize) {
  size = newsize;
  p.style.fontSize = size + "px";
  console.log(p.style.fontSize);
}
setSize(30);

function handleArrow(event) {
  if (event.key === "ArrowUp") {
    limit.innerHTML = "";
    if (size > 290) {
      // p.innerHTML = "💥";
      p.textContent = "💥";
      document.body.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 1.1);
      event.preventDefault();
    }
  } else if (event.key === "ArrowDown") {
    if (size < 10) {
      limit.innerHTML = "this is the smallest size. You can't reduce further";
      p.appendChild(limit);
    } else {
      setSize(size * 0.9);
      event.preventDefault();
    }
  }
}

document.body.addEventListener("keydown", handleArrow);
