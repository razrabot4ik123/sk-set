import { DateTime } from 'luxon';

export const useCheckOpenStatus = () => {
  const now = DateTime.now().setZone('Asia/Novosibirsk');
  const { hour } = now;

  const btn = document.querySelector('[data-workStatus="btn"]');

  if (hour >= 10 && hour < 20) {
    btn.innerHTML =
      '<svg class="meta__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.018 11.0752C12.3357 10.6234 12.227 9.99963 11.7752 9.68197L9 7.73067V4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4V8.25C7 8.57557 7.15849 8.88077 7.42482 9.06803L10.6248 11.318C11.0766 11.6357 11.7004 11.527 12.018 11.0752Z"></path></svg> Открыто';
  } else {
    btn.innerHTML =
      '<svg class="meta__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.018 11.0752C12.3357 10.6234 12.227 9.99963 11.7752 9.68197L9 7.73067V4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4V8.25C7 8.57557 7.15849 8.88077 7.42482 9.06803L10.6248 11.318C11.0766 11.6357 11.7004 11.527 12.018 11.0752Z"></path></svg> Закрыто';
  }

  setInterval(useCheckOpenStatus, 60 * 1000);
};

export const useOpenWorkStatus = () => {
  const btn = document.querySelector('[data-workStatus="btn"]');
  const modalWindow = document.querySelector('[data-workStatus="window"]');
  const body = document.body;

  if (!btn || !modalWindow) return;

  function openWorkStatus() {
    modalWindow.classList.add('work-status--opened');
    body.classList.add('body--fixed');
  }

  function closeWorkStatus() {
    modalWindow.classList.remove('work-status--opened');
    body.classList.remove('body--fixed');
  }

  btn.addEventListener('click', openWorkStatus);

  modalWindow.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('work-status') || target.closest('.work-status__close')) {
      closeWorkStatus();
    }
  });
};
