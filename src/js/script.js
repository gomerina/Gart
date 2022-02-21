// Перенос элементов на брейкпоинтах
let logo = document.querySelector('.logo')
let logoBoxMobile = document.querySelector('.mobile__logo-box');
let logoBoxDesctope = document.querySelector('.logo__box');
let pricesMobileBox = document.querySelector('.prices__mobile-box');
let singleAside = document.querySelector('.single-pipe__aside');
let singleAsideBox = document.querySelector('.single__aside-box');
let bothAsideBox = document.querySelector('.both__aside-box');
let bothAside = document.querySelector('.both-pipe__aside');
function logoMobile() {
	if (window.innerWidth < 769) {
		logoBoxMobile.appendChild(logo);
		logoBoxMobile.style.display = 'inline-block'
		logoBoxDesctope.style.display = 'none';
	}
}
function logoDesctope() {
	if (window.innerWidth >= 769) {
		logoBoxDesctope.appendChild(logo);
		logoBoxDesctope.style.display = 'inline-block';
		logoBoxMobile.style.display = 'none';
	}
}
function asideMobile() {
	if (window.innerWidth <= 1023) {
		pricesMobileBox.appendChild(singleAside);
		pricesMobileBox.appendChild(bothAside);
	}
}
function asideDesctope() {
	if (window.innerWidth > 1023) {
		singleAsideBox.appendChild(singleAside);
		bothAsideBox.appendChild(bothAside);
	}
}
logoMobile();
logoDesctope();
asideMobile();
asideDesctope();
window.addEventListener('resize', function(){
	logoMobile();
	logoDesctope();
	asideMobile();
	asideDesctope();
})

// Слайдер цен
const sliders = document.querySelectorAll('.swiper');
sliders.forEach(function(el) {
	var swiper = new Swiper(el, {
		spaceBetween: 33,
		initialSlide: 1,
		pagination: {
			el: el.querySelector('.swiper-pagination'),
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1.5,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
			},
			550: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
			},
			769: {
				slidesPerView: 3,
				spaceBetween: 33,
				centeredSlides: false,
				loop: false,
			},
		},
	});
})
