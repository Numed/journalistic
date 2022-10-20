const themeToggle = document.querySelector(".switch-toggle");

themeToggle.onchange = () => {
  if (themeToggle.classList.contains("active")) {
    document.body.classList.remove("dark");
    themeToggle.classList.remove("active");
  } else {
    document.body.classList.add("dark");
    themeToggle.classList.add("active");
  }
};
