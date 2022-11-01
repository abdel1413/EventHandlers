function asTabs(node) {
  let tabs = Array.from(node.children).map((node) => {
    let button = document.createElement("button");
    button.textContent = node.getAttribute("data-tabname");
    let tab = { node, button };
    console.log(tab);

    button.addEventListener("click", () => selectTab(tab));
    return tab;
  });
  console.log(tabs);
  let tablist = document.createElement("div");
  for (let { button } of tabs) {
    tablist.appendChild(button);
    console.log(node.firstChild);
    node.insertBefore(tablist, node.firstChild);
  }

  function selectTab(selectedtab) {
    for (let tab of tabs) {
      let selected = tab === selectedtab;
      console.log(selected);
      tab.node.style.display = selected ? " " : "none";
      tab.button.style.color = selected ? "red" : "";
    }
  }
  selectTab(tabs[0]);
}
asTabs(document.querySelector("tab-panel"));
