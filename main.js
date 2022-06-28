

// Fotos
const pic1 = document.querySelector('.pic1');
const pic2 = document.querySelector('.pic2');

// Botones
const left = document.querySelector('.left');
const right = document.querySelector('.right');

// Indicadores

const indicator1 = document.querySelector('.indicator-1');
const indicator2 = document.querySelector('.indicator-2');

// Foto activa
document.addEventListener('DOMContentLoaded', () => {pic1.classList.toggle('active')});
document.addEventListener('DOMContentLoaded', () => {indicator1.classList.toggle('active')});

// Funcion de botones
left.addEventListener('click', () => {
	pic1.classList.toggle('active');
	pic2.classList.toggle('active');

	indicator1.classList.toggle('active');
	indicator2.classList.toggle('active');

});

right.addEventListener('click', () => {
	// Fotos
	pic2.classList.toggle('active');
	pic1.classList.toggle('active');

	// Indicadores
	indicator1.classList.toggle('active');
	indicator2.classList.toggle('active');

});

// Fotos pasando
a = setInterval(() => {
	pic1.classList.toggle('active');
	pic2.classList.toggle('active');
	indicator1.classList.toggle('active');
	indicator2.classList.toggle('active');
}, 3000);

