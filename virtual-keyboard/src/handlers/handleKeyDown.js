import changeKeyboard from '../help/changeKeyboard';
import changeLanguage from '../help/changeLanguage';

export default function handleKeyDown(keyboard, textarea, event) {
  textarea.focus();
  const { code } = event;
  const key = keyboard.querySelector(`[data-code="${code}"]`);
  key.classList.add('keyboard__key__active');

  const isSpecial = key.dataset.isspecial;
  if (isSpecial && !(/Backspace|Enter|ArrowRight|ArrowLeft|ArrowDown|ArrowUp/i.test(code))) {
    event.preventDefault();
  }

  if (event.shiftKey && event.altKey) {
    changeLanguage();
    changeKeyboard();
    return;
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    localStorage.setItem('shiftOn', true);
    changeKeyboard();
  }

  if (code === 'CapsLock') {
    const newCapsDegree = !JSON.parse(localStorage.getItem('capsOn'));
    localStorage.setItem('capsOn', newCapsDegree);
    changeKeyboard();
  }
}
