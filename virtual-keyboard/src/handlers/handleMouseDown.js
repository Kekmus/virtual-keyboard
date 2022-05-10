import changeKeyboard from '../help/changeKeyboard';

export default function handleMouseDown(textarea, event) {
  if (event.target.classList.contains('keyboard__key')) {
    const key = event.target;
    const { code } = key.dataset;

    if (key.classList.contains('keyboard__key__active')) {
      return;
    }

    key.classList.add('keyboard__key__active');

    const { value } = key.dataset;

    if (value === 'Shift') {
      const newCapsDegree = !JSON.parse(localStorage.getItem('capsDegree'));
      localStorage.setItem('capsDegree', newCapsDegree);
      changeKeyboard(newCapsDegree);
      return;
    }

    const isCaps = localStorage.getItem('capsDegree') % 2 === 1;

    if(isCaps) {
      textarea.value += value.toUpperCase() ;
    } else {
      textarea.value += value;
    }
  }
}
