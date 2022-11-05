// //1 function taking a panels node as param
// function tabFunction(node) {
//   //2 loop thry the node and insid it create a buttons for each element
//   // 2a append event listener to the button, call the callback function

//   let t = Array.from(node.children);
//   console.log("node", node);
//   console.log("children", t);
//   console.log("nolist", node.childNodes);
//   console.log("first child", node.firstChild);
//   let tablist = Array.from(node.children).map((node) => {
//     let btn = document.createElement("button");
//     btn.textContent = node.getAttribute("data-tabName");
//     let both = { node, btn };
//     // console.log("both", both);
//     btn.addEventListener("click", () => select(both));
//     return both;
//   });
//   //3 create a div to put all the butons
//   // 3a assign both div contain btn and the node to a biding
//   let btnDiv = document.createElement("div");

//   for (let { btn } of tablist) {
//     btnDiv.appendChild(btn);
//     node.insertBefore(btnDiv, node.lastChilde);
//   }

//   //4  call back function taking a selected bab
//   function select(b) {
//     for (let tab of tablist) {
//       ////1 use tenary operator to display or to hide the node
//       //and to change the color of btn created.
//       console.log("both", b);
//       let selected = tab === b;
//       tab.node.style.display = selected ? "" : "none";
//       tab.btn.style.color = selected ? "red" : "";
//     }
//   }
//   select(tablist[0]);
// }

// tabFunction(document.querySelector("tab-panel"));

//1)get the tpanel and loop thru it
function TabPane(node) {
  // 2)Inside the loop create btns
  let tabList = Array.from(node.children).map((node) => {
    let btn = document.createElement("button");
    //2a) make tbn get the attribute of node as its text content
    btn.textContent = node.getAttribute("data-tabName");
    //2b)assign both node and btn object to a variable
    let nodeBtnObject = { node, btn };
    //2c) attach event listener to btn with call back function
    btn.addEventListener("click", () => CallbackFunction(nodeBtnObject));
    return nodeBtnObject;
  });
  console.log("tablist first elemtn", tabList[0]);

  //3) create a div to surround the btns
  let div = document.createElement("div");
  //3a) append btn to div by looping thru the tablist
  for (let { btn } of tabList) {
    div.appendChild(btn);
  }
  node.insertBefore(div, node.firstChild);

  //4) call back function taking the param that represent object
  function CallbackFunction(object) {
    //4a) loop thr the tablist and check
    //if the the selected tab is the same as the object
    for (let tab of tabList) {
      // 4a1) if so, then display its innerHTM else don't display
      if (tab == object) {
        console.log("node", tab.node);
        tab.node.style.display = "block";
        console.log("btn", tab.btn);
        //4a2) make the text style color to red or black otherwise
        tab.btn.style.color = "red";
      } else {
        tab.node.style.display = "none";
        tab.btn.style.color = "black";
      }
    }
  }
  CallbackFunction(tabList[0]);
}

TabPane(document.querySelector("tab-panel"));
