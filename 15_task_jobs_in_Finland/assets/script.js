console.log("hello");

/* SEARCH -form */

const search = document.getElementById("search-form");

const showHide = () => {
  search.classList.toggle(
    "hide"
  ); /* class 'hide' will beb made in CSS. Only .hide is needed in addition to toggle*/
};

/* BACK to top -button */

const backToTopButton = document.getElementById("backToTop");

/* This will effect media query on small devices: button not visible (if phrase below) */
const width = window.matchMedia("(max-width: 576px)");

/* when whole window is scrolled, could be also some other element*/
window.onscroll = () => scrollCheck();

const scrollCheck = () => {
  if (
    document.body.scrollTop > 200 ||
    (document.documentElement.scrollTop > 200 && !width.matches)
  ) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
};

/* on click, go to top */

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/* MENU and CLOSE for mobile */

const menu = document.getElementById("menu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
