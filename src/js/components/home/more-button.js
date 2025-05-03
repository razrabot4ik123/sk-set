export const useMoreGalleryButton = () => {
  const btn = document.querySelector('[data-moreBtn="Button"]');
  const contentShow = document.querySelectorAll('.gallery__item');

  btn.addEventListener('click', () => {
    contentShow.forEach((elem) => (elem.style.display = 'block'));
    btn.style.display = 'none';
  });
};
