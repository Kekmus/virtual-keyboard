export default function handleKeyUp(keyboard, textarea, event) {
  const { key, code } = event;
  const kek = keyboard.querySelector(`[data-code="${code}"]`);
  kek.classList.remove('keyboard__key__active');
}
