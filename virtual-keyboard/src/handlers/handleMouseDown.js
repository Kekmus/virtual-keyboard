import changeKeyboard from '../help/changeKeyboard';
import updatePosition from '../help/updatePosition';

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
      if (code === 'ShiftLeft' || code === 'ShiftRight') {
        localStorage.setItem('shiftOn', true);
        changeKeyboard();
      }

      if (code === 'CapsLock') {
        const newCapsDegree = !JSON.parse(localStorage.getItem('capsOn'));
        localStorage.setItem('capsOn', newCapsDegree);
        changeKeyboard();
      }

      if (code === 'Tab') {
        const startIndex = +localStorage.getItem('start');
        const endIndex = +localStorage.getItem('end');
        const start = textarea.value.substring(0, startIndex);
        const end = textarea.value.substring(endIndex);
        const content = '\t';
        textarea.value = `${start}${content}${end}`;
        textarea.selectionStart = startIndex + content.length;
        textarea.selectionEnd = startIndex + content.length;
        updatePosition(textarea);
      }

      if (code === 'Backspace') {
        const startIndex = +localStorage.getItem('start');
        const endIndex = +localStorage.getItem('end');
        if (textarea.selectionStart !== textarea.selectionEnd) {
          const start = textarea.value.substring(0, startIndex);
          const end = textarea.value.substring(endIndex);
          textarea.value = `${start}${end}`;
          textarea.selectionStart = startIndex;
          textarea.selectionEnd = startIndex;
        } else {
          const start = textarea.value.substring(0, startIndex - 1);
          const end = textarea.value.substring(endIndex);
          textarea.value = `${start}${end}`;
          textarea.selectionStart = startIndex - 1;
          textarea.selectionEnd = startIndex - 1;
        }
        updatePosition(textarea);
      }

      if(code === 'Enter') {
        const startIndex = +localStorage.getItem('start');
        const endIndex = +localStorage.getItem('end');
        const start = textarea.value.substring(0, startIndex);
        const end = textarea.value.substring(endIndex);
        const content = '\n';
        textarea.value = `${start}${content}${end}`;
        textarea.selectionStart = startIndex + content.length;
        textarea.selectionEnd = startIndex + content.length;
        updatePosition(textarea);
      }

      if (code === 'Delete') {
        const startIndex = +localStorage.getItem('start');
        const endIndex = +localStorage.getItem('end');
        if (textarea.selectionStart !== textarea.selectionEnd) {
          const start = textarea.value.substring(0, startIndex);
          const end = textarea.value.substring(endIndex);
          textarea.value = `${start}${end}`;
          textarea.selectionStart = startIndex;
          textarea.selectionEnd = startIndex;
        } else {
          const start = textarea.value.substring(0, startIndex);
          const end = textarea.value.substring(endIndex + 1);
          textarea.value = `${start}${end}`;
          textarea.selectionStart = startIndex;
          textarea.selectionEnd = startIndex;
        }
        updatePosition(textarea);
      }
    } else {
      const { value } = key.dataset;
      textarea.value += value === 'Space' ? ' ' : value;
      updatePosition(textarea);
    }
  }
}
