function asTabs(node) {
  console.log("nodes", node);
  console.log("node children", node.children);
  let tabs = Array.from(node.children).map((node) => {
    let button = document.createElement("button");
    button.textContent = node.getAttribute("data-tabname");
    let tab = { node, button };

    button.addEventListener("click", () => selectTab(tab));
    console.log("tb", tab);
    return tab;
  });

  console.log("tabs", tabs);

  let tablist = document.createElement("div");
  console.log("tablist", tablist);
  for (let { button } of tabs) {
    tablist.appendChild(button);

    console.log("btn append to tablis", tablist);
    console.log("first child", node.firstChild);
    node.insertBefore(tablist, node.firstChild);
    console.log("nodes", node);
  }

  function selectTab(selectedtab) {
    for (let tab of tabs) {
      let selected = tab === selectedtab;
      console.log("selectd", selected);
      tab.node.style.display = selected ? "" : "none";
      // tab.node.style.display = selected ? "block" : "none";
      tab.button.style.color = selected ? "red" : "black";
    }
  }
  selectTab(tabs[0]);
}
asTabs(document.querySelector("tab-panel"));
