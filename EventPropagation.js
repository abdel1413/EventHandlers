/**
 * For most event types, handlers registered on nodes with children
 * will also receive events that happen in the children. If a button
 * inside a paragraph is clicked, event handlers on the paragraph
 *  will also see the click event.
 * if both the paragraph and the button have a handler,
 *  the more specific handler—the one on the button—gets
 * to go first. The event is said to propagate outward.
 *
 * To avoid that the outter node or parent node sees the event handled
 * by the child node, we can use the stopPropagation method handler
 */
let p = document.querySelector("p");
let b = document.querySelector("button");
p.addEventListener("mousedown", () => {
  console.log("handler for paragraph");
});
b.addEventListener("mousedown", (event) => {
  if (event.b == 2) {
    event.stopPropagation();
  }
});

/**
 * if you have a node containing a long list of buttons,
 *  it may be more convenient to register a single click
 * handler on the outer node and have it use the target property
 *  to figure out whether a button was clicked, rather than register
 * individual handlers on all of the buttons.
 */
let demo = document.querySelector("#demo");
console.log(demo);
let t = document.createElement("p");
let h = document.querySelector("h2");
let h3 = document.createElement("h3");
console.log(h);
document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    console.log("clicked", event.target.textContent);
    demo.innerHTML = event.target.textContent;
    demo.style.color = "blue";
    t.innerHTML = event.target.textContent + " is clicked";
    t.style.fontSize = "larger";
    t.style.background = "yellow";
  } else if (event.target.nodeName == "H2") {
    // h3.appendChild(
    //   document.createTextNode(
    //     event.target.textContent + " this is not a button"
    //   )
    // );
    // h.innerHTML = h3;
    h3.appendChild(
      document.createTextNode("this is not a button it is a para")
    );
    console.log("This is not a button");
    // h3.innerHTML = "this is not a button";
    h.appendChild(h3);
  }
});

/**
 * if you don't want to a link to take you to its target when clicked on
 * us preventDefault() method
 */
let link = document.querySelector("a");
let para = document.createElement("p");

link.addEventListener("click", (event) => {
  console.log("You prevented me from taking you to my target!!");
  //   para.appendChild(
  //     document.createTextNode("preventDefault() methd is called on me")
  //   );

  event.preventDefault();
  para.innerHTML = "reventDefault() methd is called on me";
  link.appendChild(para);
  console.log(link);
});
document.querySelector("h5").appendChild(t);
