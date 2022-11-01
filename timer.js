/**
 * setTimer() schedules another function to be called later after
 * a given number of milliseconds
 * We can cancel it by calling clearTimer() upon the value returned by it
 */

let boom = setTimeout(() => {
  console.log("booommmmm");
}, 5000);

if (Math.random() < 0.5) {
  console.log("You have 50% of chance so it is cancelled");
  clearTimeout(boom);
}

/**
 * cancelAnimationFrame works as clearTimeout by calling it on the value
 * returne by requestAnimationFrame
 */

/**
 * setInterval and clearInterval, are used to set timers
 *  that should repeat every X milliseconds.
 * clearInterval cancel the setTimeout by calling on the value
 * returned by the latter.
 */

let tick = 0;
let clock = setInterval(() => {
  console.log("tick", tick++);
  if (tick === 10) {
    console.log("we reach 10 so let stop the process");
    clearInterval(clock);
  }
}, 500);

let textarea = document.querySelector("textarea");
console.log(textarea);
let timeout;
textarea.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log("Typed!");
  }, 500);
});

/**
 * we might want to respond to "mousemove" events by
 *  showing the current coordinates of the mouse but
 * only every 250 milliseconds.
 */

let schedule = null;
let p = document.createElement("p");

window.addEventListener("mousemove", (event) => {
  console.log("eve", event);
  if (!schedule) {
    setTimeout(() => {
      p.textContent = `Mouse at ${schedule.pageX}, ${schedule.pageY}`;
      schedule = null;
    }, 500);
  }
  console.log(event);
  console.log(schedule);
  schedule = event;
  console.log("sce", schedule);
});
document.body.appendChild(p);
