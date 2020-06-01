const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('#logo');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	logo.classList.toggle('open');
	// // links.forEach((link) => {
	// // 	link.classList.toggle('fade');
	// });
});
