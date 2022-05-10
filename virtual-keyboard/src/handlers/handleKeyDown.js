import changeKeyboard from '../help/changeKeyboard';
import changeLanguage from '../help/changeLanguage';
import updatePosition from '../help/updatePosition';

export default function handleKeyDown(keyboard, textarea, event) {
  textarea.focus();
  const { code } = event;
  const key = keyboard.querySelector(`[data-code="${code}"]`);
  key.classList.add('keyboard__key__active');

  const isSpecial = key.dataset.isspecial;
  if (isSpecial && !(/Backspace|Delete|Enter|ArrowRight|ArrowLeft|ArrowDown|ArrowUp/i.test(code))) {
    event.preventDefault();
  }

  if (event.shiftKey && event.altKey) {
    changeLanguage();
    changeKeyboard();
    return;
  }

  if(code === 'Tab') {
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

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    localStorage.setItem('shiftOn', true);
    changeKeyboard();
  }

  if (code === 'CapsLock') {
    const newCapsDegree = !JSON.parse(localStorage.getItem('capsOn'));
    localStorage.setItem('capsOn', newCapsDegree);
    changeKeyboard();
  }

  if (/ArrowRight|ArrowLeft|ArrowDown|ArrowUp/i.test(code)) {
    setTimeout(() => {
      updatePosition(textarea);
    }, 0);
  }
}
