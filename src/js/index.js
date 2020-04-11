const background = document.querySelector('#header-bg-img');

window.addEventListener('scroll', e => {
  const scrolled = window.pageYOffset;
  background.style.top = scrolled * 0.6 + 'px';
});

background.addEventListener('mousemove', e => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let directionX = mouseX - window.innerWidth / 2;
  let movingToX = directionX / Math.abs(directionX);
  let directionY = mouseY - window.innerHeight / 2;
  let movingToY = directionY / Math.abs(directionY);
  background.style.transform = `translate(${movingToX * 5}px, ${movingToY * 5}px) scale(1.02,1.02)`;
});

background.addEventListener('mouseout', e => {
  background.style.transform = 'scale(1,1)';
});
