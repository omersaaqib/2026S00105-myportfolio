const date = new Date();

const hours = date.getHours();

let timeOfDay;

if (hours < 12) {
  timeOfDay = "Happy Morning";
} else if (hours < 17) {
  timeOfDay = "Sunny Afternoon";
} else if (hours < 20) {
  timeOfDay = "Cool Evening";
} else {
  timeOfDay = "Nighty Night";
}

const greet = document.querySelector("#greeting");
greet.textContent = ` ${timeOfDay}!! EveryOne`;

const yearSpan = document.querySelector("span");
const currentYear = date.getFullYear();
yearSpan.textContent = currentYear;

/* DAY-5

the syntax= element.addEventListener('eventType',callBackFunction)

* Elememt - the thing being watched
* 'eventType' - a string naming what to listen for(eg; click, submit, input, keydown)
* callBackFunction-  runs only when that event happens, not immediately */

document.querySelector("h1").addEventListener("click", function () {
  console.log("Somebody poked the heading !");
});

const heading = document.querySelector("h1");
heading.addEventListener("click", function (event) {
  console.log(`You Clicked: `,event.target.textContent )
  heading.classList.toggle("clickdemo");
});

//Theme toggle (dark mode):
const themeToggle = document.querySelector("#darkAndLight");
themeToggle.addEventListener("click", function () {           // created a dark mode and light mode toggle
  document.body.classList.toggle("darkMode");
  if (document.body.classList.contains("darkMode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const savedTheme = localStorage.getItem("theme");
console.log(`Last saved theme is ${savedTheme}`);
if (savedTheme === "dark") {
  document.body.classList.add("darkMode");
} 