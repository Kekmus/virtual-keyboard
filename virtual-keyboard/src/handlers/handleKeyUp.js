import changeKeyboard from '../help/changeKeyboard';

export default function handleKeyUp(keyboard, textarea, event) {
  const { code } = event;
  const kek = keyboard.querySelector(`[data-code="${code}"]`);

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    localStorage.setItem('shiftOn', false);
    changeKeyboard();
  }

  kek.classList.remove('keyboard__key__active');
}
