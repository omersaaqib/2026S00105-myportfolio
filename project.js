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