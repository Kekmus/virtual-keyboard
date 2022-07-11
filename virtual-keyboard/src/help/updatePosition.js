export default function updatePosition(textarea, event) {
  localStorage.setItem('start', textarea.selectionStart);
  localStorage.setItem('end', textarea.selectionEnd);
}
