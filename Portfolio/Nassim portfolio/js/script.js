const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const sluiten= document.getElementById('sluiten');

open.addEventListener('click', () =>{
	modal_container.classList.add('show');
});

sluiten.addEventListener('click', () =>{
	modal_container.classList.remove('show');
});