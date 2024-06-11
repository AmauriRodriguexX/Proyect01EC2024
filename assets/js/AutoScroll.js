document.addEventListener('DOMContentLoaded', function () {
     const hash = window.location.hash;
     if (hash) {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
               targetElement.scrollIntoView({ behavior: 'smooth' });
          }
     }
});

document.addEventListener('DOMContentLoaded', function () {
     const targetSection = document.getElementById('target-section');
     if (targetSection) {
         targetSection.scrollIntoView({ behavior: 'smooth' });
     }
 });