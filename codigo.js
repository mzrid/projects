let btn = document.querySelector('.btnChangeColor');
let body = document.querySelector('body');
let icon = document.querySelector(".fa-sun");
let header = document.querySelector(".headerContainer");
let main = document.querySelector("main")

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
	if(icon.classList.contains("fa-moon")){
		icon.classList.replace("fa-moon", "fa-sun")
		
	} else if(icon.classList.contains("fa-sun")){
		icon.classList.replace("fa-sun", "fa-moon")
		
	}
	header.classList.toggle("nocturneHeader")
	main.classList.toggle("nocturneMain")
}

btn.addEventListener('click', nocturne);
body.addEventListener('mousemove', eyeball);
