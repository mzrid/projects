let btn = document.querySelector('.btnChangeColor');
let body = document.querySelector('body');
let icon = document.querySelector(".fa-sun");
let nav = document.querySelector(".nav")
let btnBars = document.querySelector(".fa-bars")
let header = document.querySelector(".headerContainer");
let main = document.querySelector("main")
let ninja = document.querySelector(".ninjaimg");

function eyeball(){
	const eye = document.querySelectorAll('.eye');
	eye.forEach(function(eye){
		let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
		let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

		let radian = Math.atan2(event.pageX - x, event.pageY - y);
		let rotation = (radian * (180 / Math.PI) * -1) + 270;
		eye.style.transform = "rotate("+rotation+"deg)"
	})
}

function nocturne(){
	if(icon.classList.contains("fa-sun")){
		icon.classList.replace("fa-sun", "fa-moon")
		
	} else if(icon.classList.contains("fa-moon")){
		icon.classList.replace("fa-moon", "fa-sun")
		
	}
	header.classList.toggle("nocturneHeader")
	main.classList.toggle("nocturneMain")
	body.classList.toggle("nocturneMain")
}

function show(){
	nav.classList.toggle("show")
}
btnBars.addEventListener('click', show)
btn.addEventListener('click', nocturne);
body.addEventListener('mousemove', eyeball);
