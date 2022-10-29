let remove = document.querySelector("button");
console.log(remove);
function once() {
  console.log("done");
  remove.removeEventListener("click", once);
}

remove.addEventListener("click", once);

/**
 * NOTE: The function given to removeEventListener has to
 *  be the same function value that was given to addEventListener.
 *  So, to unregister a handler, you’ll want to give the function
 * a name (once, in the example) to be able to pass the same function
 *  value to both methods.
 */
