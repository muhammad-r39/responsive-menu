"use strict";

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  const nav = document.querySelector(".site-navigation nav");
  const parent = document.querySelector(".site-navigation");

  if (parent.classList.contains("open")) {
    // Set max-height to 0 to collapse
    nav.style.maxHeight = "0";
    parent.classList.remove("open");
  } else {
    // Set max-height to scrollHeight to expand
    nav.style.maxHeight = nav.scrollHeight + "px";
    parent.classList.add("open");
  }
});
