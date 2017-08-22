export function appendText(text) {
  const element = document.createElement('p');
  element.innerHTML = text;
  document.body.appendChild(element);
}
