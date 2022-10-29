window.addEventListener("click", () => {
  let h1 = document.createElement("h1");
  let p = document.querySelector("p");
  console.log("p", p);
  h1.appendChild(document.createTextNode("The window is active now"));
  console.log("you clicked on the window");
  document.querySelector("p").append(h1);
  h1.style.color = "green";
  h1.style.textAlign = "center";
});
