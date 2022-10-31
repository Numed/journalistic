const themeToggle = document.querySelector(".switch-toggle");
const scrollUp = document.querySelector(".scroll-to");

if (localStorage.getItem("theme") === "dark") {
  themeToggle.classList.add("active");
  themeToggle.checked = true;
  document.body.classList.add("dark");
} else if (localStorage.getItem("light")) {
  document.body.classList.remove("dark");
  themeToggle.classList.remove("active");
} else {
  localStorage.setItem("theme", "light");
}

themeToggle.onchange = () => {
  if (themeToggle.classList.contains("active")) {
    document.body.classList.remove("dark");
    themeToggle.classList.remove("active");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    themeToggle.classList.add("active");
    localStorage.setItem("theme", "dark");
  }
};

window.onscroll = () => {
  window.pageYOffset > 1000
    ? ((scrollUp.style.visibility = "visible"), (scrollUp.style.opacity = "1"))
    : ((scrollUp.style.visibility = "hidden"), (scrollUp.style.opacity = "0"));
};

scrollUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
