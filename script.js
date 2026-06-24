const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const year = document.getElementById('year');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
