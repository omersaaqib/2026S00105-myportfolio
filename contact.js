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




//storing data of contacts in local storage


const contactForm = document.querySelector('#contact-form')

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message1 = document.querySelector('#message1').value.trim();
})

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();//trim - cutting white spaces
    const email = document.querySelector('#email').value.trim();
    const message1 = document.querySelector('#message1').value.trim();
    
    let isFormValid = formValidation(name, email, message1)

    if (isFormValid){
    const portfolioContacts = JSON.parse(localStorage.getItem('portfolioContacts')) || []
    portfolioContacts.push({name, email, message1})
    localStorage.setItem('contacts', JSON.stringify(portfolioContacts))
    console.log(portfolioContacts)
    }
})


function IsEmailValid(value) {
    const emailPattren = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattren.test(value);
}

           

function showError(fieldId, show){
    const errorElement = document.querySelector(`#${fieldId}-error`);
    errorElement.classList.toggle('show', show)
}

function formValidation(name, email, message1) {
    let isValid = true;

    if (name === "") {
        showError('name', true);
        isValid = false;
    } else {
        showError('name', false);
    }

    if (email==="" || !IsEmailValid(email)) { //try && for understanding
        showError('email', true);
        isValid = false;
    } else {
        showError('email', false)
    }
    if (message1 === "") {
        showError('message1', true);
        isValid = false;
    } else {
        showError('message1', false);
    }
    return isValid;
} 
localStorage.getItem('contact')
localStorage.setItem('contact', `name: ${name}, email: ${email}, message: ${message1}`)