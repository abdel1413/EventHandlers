window.addEventListener("keydown", (event) => {
  if (event.key == " " && event.ctrlKey) {
    console.log("continue!!!");
  } else if (event.key == " " && event.altKey) {
    console.log("alt key is press after space ");
  } else if (event.key == " " && event.shiftKey) {
    console.log("shift and space");
  } else if (event.key === " " && event.metaKey) {
    console.log("meta or command key and space ");
  }
});
