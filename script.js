"use strict";

/* Seleccion de elementos */
const hero = document.querySelector(".hero-container");
const projectsSection = document.querySelector(".projects-container");
const about = document.querySelector(".about-container");
const btnScroll = document.querySelector(".scroll-to");
const projectsMenu = document.querySelector(".projects-menu");
const aboutMenu = document.querySelector(".about-menu");
const contactMenu = document.querySelector(".contact-menu");

/* SCROLLING TO */
btnScroll.addEventListener("click", (e) => {
  e.preventDefault();
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav_links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
