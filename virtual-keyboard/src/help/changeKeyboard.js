import languages from '../languages/languages';

export default function changeKeyboard(isCaps) {
  const currentLang = localStorage.getItem('lang');

  const keyboard = document.querySelector('.keyboard');

  Array.from(keyboard.children).forEach((row) => {
    Array.from(row.children).forEach((key) => {
      const { code } = key.dataset;
      const { special } = key.dataset;
      const newValue = languages[currentLang][code];
      key.setAttribute('data-value', newValue);
      if (isCaps && !special) {
        key.innerHTML = newValue.toUpperCase();
      } else {
        key.innerHTML = newValue;
      }
    });
  });
}
