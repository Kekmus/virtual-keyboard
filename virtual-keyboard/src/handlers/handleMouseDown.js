import changeKeyboard from '../help/changeKeyboard';

export default function handleMouseDown(textarea, event) {
  if (event.target.classList.contains('keyboard__key')) {
    const key = event.target;

    if (key.classList.contains('keyboard__key__active')) {
      return;
    }

    key.classList.add('keyboard__key__active');

    const { code } = key.dataset;
    const isSpecial = key.dataset.isspecial;

    if (isSpecial) {
      console.log(code);
      if (code === 'ShiftLeft' || code === 'ShiftRight') {
        localStorage.setItem('shiftOn', true);
        changeKeyboard();
      }

      if (code === 'CapsLock') {
        const newCapsDegree = !JSON.parse(localStorage.getItem('capsOn'));
        localStorage.setItem('capsOn', newCapsDegree);
        changeKeyboard();
      }

      if(code === 'Tab') {
        textarea.focus();
        textarea.value += '\t';
      }
    } else {
      const { value } = key.dataset;
      textarea.value += value === 'Space' ? ' ' : value;
    }
  }
}
