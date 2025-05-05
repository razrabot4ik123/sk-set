import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
  const input = document.querySelectorAll('#phone');

  input.forEach((item) => {
    intlTelInput(item, {
      initialCountry: 'ru',
      loadUtils: () =>
        import('https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js'),
      strictMode: true,
    });
  });
};
