let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let formbtn=document.querySelector('#login-btn');
let logform=document.querySelector('.login-form-container');
let formclose=document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let video=document.querySelectorAll('.vid-btn');

window.onscroll=()=>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	logform.classList.remove('active');
}
menu.addEventListener('click',()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
});
searchBtn.addEventListener('click',()=>{
	searchBtn.classList.toggle('fa-times');
	searchBar.classList.toggle('active');
});

formbtn.addEventListener('click',()=>{
	logform.classList.add('active');
});


formclose.addEventListener('click',()=>{
	logform.classList.remove('active');
});
video.forEach(btn =>{
	btn.addEventListener('click',()=>{
		document.querySelector('.controls .active').classList.remove('active');
		btn.classList.add('active');
		let src=btn.getAttribute('data-src');
		document.querySelector('#video-silder').src=src;
	})
});


var swiper = new Swiper(".review-slider", {

	spaceBetween:20,
	loop:true,
	autoplay:{
		delay:1500,
		disableOnInteraction:false,
	},
	breakpoints:{
		640:{
			slidesPerView: 1,
		},
		768:{
			slidesPerView: 2,
		},
		1024:{
			slidesPerView: 3,
		},
	},
});