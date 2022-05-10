document.addEventListener('DOMContentLoaded', function loadListener() {
  const hamburgerButton = document.querySelector('.hamburger-btn');
  const menuContainer = document.querySelector('.nav-container');

  hamburgerButton.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
  });

  document.removeEventListener('DOMContentLoaded', loadListener);
});
