const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle menu and hamburger animation on click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('show');
});
