import languages from '../languages/languages';

export default function changeKeyboard() {
  const capsOn = JSON.parse(localStorage.getItem('capsOn'));
  const shiftOn = JSON.parse(localStorage.getItem('shiftOn'));
  const isCaps = (capsOn !== shiftOn);
  const currentLang = localStorage.getItem('lang');

  const keyboard = document.querySelector('.keyboard');

  Array.from(keyboard.children).forEach((row) => {
    Array.from(row.children).forEach((key) => {
      const { code } = key.dataset;
      const isSpecial = key.dataset.isspecial;
      const newValue = languages[currentLang][code];
      key.setAttribute('data-value', newValue);
      if (isCaps && !isSpecial) {
        key.innerHTML = newValue.toUpperCase();
      } else {
        key.innerHTML = newValue;
      }
    });
  });
}
