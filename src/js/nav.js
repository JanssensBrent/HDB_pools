document.addEventListener('DOMContentLoaded', function () {
  console.log('nav.js loaded');
  let hamburgerMenu = document.querySelector('.hamburger_menu');
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function () {
      let navMenu = document.querySelector('.nav_menu');
      if (navMenu.style.left === '0px') {
        navMenu.style.left = '100vw';
      } else {
        navMenu.style.left = '0';
      }
    });
  } else {
    console.log('Hamburger menu element not found.');
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger_menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});