// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Darker color when scrolled
      } else {
        navbar.style.backgroundColor = '#880707'; // Original color
      }
    });
  });
  