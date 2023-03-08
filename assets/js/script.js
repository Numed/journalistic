const switchToggle = document.querySelector(".switch-toggle"),
  themeToggle = document.querySelector(".theme-toggle"),
  scrollUp = document.querySelector(".scroll-to"),
  hamburgerMenu = document.querySelector(".hamburger-menu"),
  hambugerIcon = hamburgerMenu.querySelector(".fa-bars"),
  btnHamburger = document.querySelector(".btn-hamburger");

if (localStorage.getItem("theme") === "dark") {
  switchToggle.classList.add("active");
  switchToggle.checked = true;
  document.body.classList.add("dark");
} else if (localStorage.getItem("light")) {
  document.body.classList.remove("dark");
  switchToggle.classList.remove("active");
} else {
  localStorage.setItem("theme", "light");
}

switchToggle.onchange = () => {
  if (switchToggle.classList.contains("active")) {
    document.body.classList.remove("dark");
    switchToggle.classList.remove("active");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    switchToggle.classList.add("active");
    localStorage.setItem("theme", "dark");
  }
};

btnHamburger.onclick = () => {
  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.remove("active");
    hambugerIcon.classList.replace("fa-times", "fa-bars");
    checkSize();
  } else {
    hamburgerMenu.classList.add("active");
    hambugerIcon.classList.replace("fa-bars", "fa-times");
    if (hamburgerMenu.classList.contains("active")) {
      themeToggle.style.display = "flex";
      themeToggle.style.position = "fixed";
      themeToggle.style.zIndex = "100";
      themeToggle.style.top = "80%";
    }
  }
};

const checkSize = () => {
  if (window.screen.width < 425) {
    themeToggle.style.display = "none";
    themeToggle.style.position = "static";
    themeToggle.style.zIndex = "-100";
    themeToggle.style.top = "0";
  } else if (window.screen.width > 425) {
    themeToggle.style.display = "flex";
    themeToggle.style.position = "static";
    themeToggle.style.zIndex = "1";
    themeToggle.style.top = "none";
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

window.onresize = checkSize;
