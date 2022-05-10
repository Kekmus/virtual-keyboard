import innerHtml from './innerHtml';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList = 'wrapper';
wrapper.innerHTML = innerHtml;
body.append(wrapper);

const keyboard = document.querySelector('.keyboard');
keyboard.addEventListener('click', kek);

function kek(event) {
  if(event.target.classList.contains('keyboard__key')) {
    const key = event.target;
    key.classList.toggle('active');
  }
}