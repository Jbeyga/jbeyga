window.addEventListener('DOMContentLoaded', () => {
  
  const menu__btn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu');

  menu__btn.addEventListener("click", toggleMenuClass );

  function toggleMenuClass() {
     menu.classList.toggle("menuToggle");
  }


});