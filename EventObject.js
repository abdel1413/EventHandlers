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

/**
 * NOTE:
 * event handler functions are passed an argument: the event object.
 * This object holds additional information about the event.
 *  For example, if we want to know which mouse button was pressed,
 *  we can look at the event object’s button property.
 */
