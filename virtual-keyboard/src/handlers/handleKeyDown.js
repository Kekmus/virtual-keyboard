import changeKeyboard from "../help/changeKeyboard";

export default function handleKeyDown(keyboard, textarea, event) {
  textarea.focus();
  const { key, code } = event;
  const kek = keyboard.querySelector(`[data-code="${code}"]`);
  kek.classList.add('keyboard__key__active');
}
