const themeToggle = document.querySelector(".switch-toggle");
const scrollUp = document.querySelector(".scroll-to");

themeToggle.onchange = () => {
  if (themeToggle.classList.contains("active")) {
    document.body.classList.remove("dark");
    themeToggle.classList.remove("active");
  } else {
    document.body.classList.add("dark");
    themeToggle.classList.add("active");
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
