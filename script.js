// element toggle function
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active")
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]")
const sidebarBtn = document.querySelector("[data-sidebar-btn]")

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar)
})

// contact form variables
const form = document.querySelector("[data-form]")
const formInputs = document.querySelectorAll("[data-form-input]")
const formBtn = document.querySelector("[data-form-btn]")

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", () => {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled")
    } else {
      formBtn.setAttribute("disabled", "")
    }
  })
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]")
const pages = document.querySelectorAll("[data-page]")

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (event) {
    event.preventDefault() // Prevent default anchor click behavior

    const targetId = this.getAttribute("href").substring(1) // Get the target section ID
    const targetPage = document.querySelector(`[data-page="${targetId}"]`)

    if (targetPage) {
      // Remove active class from all pages and navigation links
      for (let j = 0; j < pages.length; j++) {
        pages[j].classList.remove("active")
      }
      for (let j = 0; j < navigationLinks.length; j++) {
        navigationLinks[j].classList.remove("active")
      }

      // Add active class to target page and clicked navigation link
      targetPage.classList.add("active")
      this.classList.add("active")
    }
  })
}

// theme toggle variables
const themeToggleBtn = document.getElementById("theme-toggle-btn")

// check for saved theme preference
const currentTheme = localStorage.getItem("theme")
if (currentTheme) {
  document.body.classList.add(currentTheme)
}

// toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode")

  let theme = "dark-mode"
  if (document.body.classList.contains("light-mode")) {
    theme = "light-mode"
  }

  localStorage.setItem("theme", theme)
})
