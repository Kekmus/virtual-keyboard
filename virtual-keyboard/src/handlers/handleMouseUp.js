import changeKeyboard from '../help/changeKeyboard';

export default function handleMouseDown(textarea, event) {
  if (event.target.classList.contains('keyboard__key')) {
    const key = event.target;

    const { value } = key.dataset;

    if (value === 'Shift') {
      const newCapsDegree = !JSON.parse(localStorage.getItem('capsDegree'));
      localStorage.setItem('capsDegree', newCapsDegree);
      changeKeyboard(newCapsDegree);
    }

    key.classList.remove('keyboard__key__active');
  }
}
