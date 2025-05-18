const toggleButton = document.getElementById('toggle-button');
const closeButton = document.getElementById('close-button');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  closeButton.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  closeButton.classList.toggle('active');
});