import changeKeyboard from '../help/changeKeyboard';

export default function handleMouseDown(textarea, event) {
  if (event.target.classList.contains('keyboard__key')) {
    const key = event.target;

    const { value } = key.dataset;
    const { code } = key.dataset;

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      localStorage.setItem('shiftOn', false);
      changeKeyboard();
    }

    key.classList.remove('keyboard__key__active');
  }
}
