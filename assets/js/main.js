const volumeToggle = document.querySelector('.sapjs-volume-toggle');
const volumeWrapper = document.querySelector('.sapjs-volume-wrapper');

volumeToggle.addEventListener('click', () => {
  volumeWrapper.classList.toggle('sapjs-open');
});