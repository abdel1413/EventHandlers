let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
console.log(fields);
for (let field of Array.from(fields)) {
  field.addEventListener("focus", (event) => {
    let text = event.target.getAttribute("data-help");
    help.textContent = text;
  });
  field.addEventListener("blur", (e) => {
    help.textContent = "";
  });
}
