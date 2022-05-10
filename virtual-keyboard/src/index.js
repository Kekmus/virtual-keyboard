import innerHtml from './help/innerHtml';
import handleMouseDown from './handlers/handleMouseDown';
import handleMouseUp from './handlers/handleMouseUp';
import handleKeyDown from './handlers/handleKeyDown';
import handleKeyUp from './handlers/handleKeyUp';
import changeKeyboard from './help/changeKeyboard';
import updatePosition from './help/updatePosition';

if (!(localStorage.getItem('lang'))) {
  localStorage.setItem('lang', 'en');
}
localStorage.setItem('capsOn', 'false');
localStorage.setItem('shiftOn', 'false');
localStorage.setItem('start', '0');
localStorage.setItem('end', '0');

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList = 'wrapper';
wrapper.innerHTML = innerHtml;
body.append(wrapper);

changeKeyboard();
const keyboard = document.querySelector('.keyboard');
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', updatePosition.bind(this, textarea));
textarea.addEventListener('click', updatePosition.bind(this, textarea));
keyboard.addEventListener('mousedown', handleMouseDown.bind(this, textarea));
keyboard.addEventListener('click', handleMouseUp.bind(this, textarea));
document.addEventListener('keydown', handleKeyDown.bind(this, keyboard, textarea));
document.addEventListener('keyup', handleKeyUp.bind(this, keyboard, textarea));
