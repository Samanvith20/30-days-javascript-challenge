const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', () => {
  paragraph.textContent = 'Text has been changed!';
});
