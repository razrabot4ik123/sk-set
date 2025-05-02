export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="button"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const body = document.body;

  const closeBurger = () => {
    burgerBtn.classList.remove('burger--active');
    burgerMenu.classList.remove('header__nav--visible');
    overlay.classList.remove('overlay--visible');
    body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__nav--visible');
    overlay.classList.toggle('overlay--visible');
    body.classList.toggle('body--fixed');
  });

  overlay.addEventListener('click', closeBurger);

  burgerMenu.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('nav__link')) closeBurger();
  });
};
