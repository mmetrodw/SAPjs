const vv = document.querySelectorAll('.sapjs-volume-toggle');

vv.forEach(item => {
  item.addEventListener('click', () => {
    const video = item.parentNode.classList.toggle('sapjs-open');
  });
})
