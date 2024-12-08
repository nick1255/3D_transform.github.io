document.addEventListener('mousemove', (e) => {
	const { clientY, clientX } = e;
	const { clientHeight, clientWidth, style } = document.documentElement;
	const y = ((clientX - (clientWidth / 2)) / clientWidth) * 100
	const x = ((clientY - (clientHeight / 2)) / clientHeight) * -100
	style.setProperty('--rotateY', `${y - 33}deg`);
	style.setProperty('--rotateX', `${x}deg`);
});

const container = document.querySelector('#container');

container.addEventListener('click', (e) => {
  if(!container.className.includes('jump')) container.className += ' jump'
})

container.addEventListener('animationend', (e) => {
  container.className = container.className.replace(' jump', '');
})

document.addEventListener('keydown', (e) => {
  if(e.keyCode === 32) {
    if(!container.className.includes('jump')) container.className += ' jump'
  }
})