export const useModal = () => {
  const btn = document.querySelector('[data-modal="btn"]');
  const modalWindow = document.querySelector('[data-modal="window"]');
  const body = document.body;

  if (!btn || !modalWindow) return;

  function openModal(e) {
    e.preventDefault();
    modalWindow.classList.add('modal--opened');
    body.classList.add('body--fixed');
  }

  function closeModal() {
    modalWindow.classList.remove('modal--opened');
    body.classList.remove('body--fixed');
  }

  btn.addEventListener('click', openModal);

  modalWindow.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('modal') || target.closest('.modal__close')) {
      event.preventDefault();
      closeModal();
    }
  });
};

export const useNextBtn = () => {
  const btnNext = document.querySelector('[data-modal="next-btn"]');
  const btnPrev = document.querySelector('[data-modal="prev-btn"]');
  const btnSubmit = document.querySelector('[data-modal="submit"]');
  const labels = document.querySelectorAll('.form__label--modal');

  btnNext.addEventListener('click', (e) => {
    e.preventDefault();

    labels.forEach((label, index) => {
      if (index >= 2) {
        label.style.display = 'flex';
      } else {
        label.style.display = 'none';
      }
      btnNext.style.display = 'none';
      btnSubmit.style.display = 'block';
      btnPrev.style.display = 'block';
    });
  });

  btnPrev.addEventListener('click', (e) => {
    e.preventDefault();

    labels.forEach((label, index) => {
      if (index <= 1) {
        label.style.display = 'flex';
      } else {
        label.style.display = 'none';
      }
    });
    btnPrev.style.display = 'none';
    btnSubmit.style.display = 'none';
    btnNext.style.display = 'block';
  });
};
