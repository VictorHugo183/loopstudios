const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMenu(){
  window.scrollTo(0, 0); //scroll to top
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
  mobileMenu.style.display = "flex";
}

function closeMenu(){
  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "block";
  mobileMenu.style.display = "none";
}

hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

mobileLinks.forEach(item => item.addEventListener("click", closeMenu));