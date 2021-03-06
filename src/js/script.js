// Перенос элементов на брейкпоинтах
let logo = document.querySelector('.logo')
let logoBoxMobile = document.querySelector('.mobile__logo-box');
let logoBoxDesctope = document.querySelector('.logo__box');
let pricesMobileBox = document.querySelector('.prices__mobile-box');
let singleAside = document.querySelector('.single-pipe__aside');
let singleAsideBox = document.querySelector('.single__aside-box');
let bothAsideBox = document.querySelector('.both__aside-box');
let bothAside = document.querySelector('.both-pipe__aside');
function breakpointOne() {
	if (window.innerWidth < 769) {
		logoBoxMobile.appendChild(logo);
		logoBoxMobile.style.display = 'inline-block'
		logoBoxDesctope.style.display = 'none';
	}
}
function breakpointTwo() {
	if (window.innerWidth >= 769) {
		logoBoxDesctope.appendChild(logo);
		logoBoxDesctope.style.display = 'inline-block';
		logoBoxMobile.style.display = 'none';
	}
}
function breakpointThree() {
	if (window.innerWidth <= 1023) {
		pricesMobileBox.appendChild(singleAside);
		pricesMobileBox.appendChild(bothAside);
		$('.header__blue-btn').removeAttr('href');
		$('.header__grey-btn').attr('href','#price');
	}
}
function breakpointFour() {
	if (window.innerWidth > 1023) {
		singleAsideBox.appendChild(singleAside);
		bothAsideBox.appendChild(bothAside);
		$('.header__blue-btn').attr('href', '#price');
		$('.header__grey-btn').attr('href','#stages');
	}
}
breakpointOne();
breakpointTwo();
breakpointThree();
breakpointFour();
window.addEventListener('resize', function(){
	breakpointOne();
	breakpointTwo();
	breakpointThree();
	breakpointFour();
})

// Слайдер цен
const sliders = document.querySelectorAll('.swiper');
sliders.forEach(function(el) {
	var swiper = new Swiper(el, {
		spaceBetween: 33,
		initialSlide: 1,
		centeredSlides: false,
		loop: false,
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
// Плавная прокрутка до якорей
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
// Перемещаем пользователя вверх страницы при её обновлении для избежание багов индикатора
$(window).on('beforeunload', function(){
	$(window).scrollTop(0);
});
// Индикаторы
let indicatorItem = document.querySelectorAll('.indicator__item');
let indicatorItemDrilling = document.querySelector('.indicator__item.drilling-indicator');
let indicatorItemExp = document.querySelector('.indicator__item.expirience-indicator');
let indicatorItemCompare = document.querySelector('.indicator__item.compare-indicator');
let indicatorItemTech = document.querySelector('.indicator__item.tech-indicator');
let indicatorItemQuality = document.querySelector('.indicator__item.quality-indicator');
let indicatorItemGuarantees = document.querySelector('.indicator__item.guarantees-indicator');
let indicatorItemResult = document.querySelector('.indicator__item.result-indicator');
let indicatorItemPrice = document.querySelector('.indicator__item.price-indicator');
let indicatorItemDeadlines = document.querySelector('.indicator__item.deadlines-indicator');
let indicatorItemStages = document.querySelector('.indicator__item.stages-indicator');
let indicatorItemFooter = document.querySelector('.indicator__item.footer-indicator');
let indicatorNumber = document.querySelector('.indicator__item-number');
let indicatorText = document.querySelector('.indicator__item-text');
// Секции
let drilling = document.querySelector('.drilling'),
drillingTop = drilling.getBoundingClientRect().top + document.body.scrollTop;
let expirience = document.querySelector('.expirience'),
expirienceTop = expirience.getBoundingClientRect().top + document.body.scrollTop;
let compare = document.querySelector('.compare'),
compareTop = compare.getBoundingClientRect().top + document.body.scrollTop ;
let tech = document.querySelector('.tech'),
techTop = tech.getBoundingClientRect().top + document.body.scrollTop;
let quality = document.querySelector('.quality'),
qualityTop = quality.getBoundingClientRect().top + document.body.scrollTop;
let guarantees = document.querySelector('.guarantees'),
guaranteesTop = guarantees.getBoundingClientRect().top + document.body.scrollTop;
let result = document.querySelector('.result'),
resultTop = result.getBoundingClientRect().top + document.body.scrollTop;
let price = document.querySelector('.prices'),
priceTop = price.getBoundingClientRect().top + document.body.scrollTop;
let deadlines = document.querySelector('.deadlines'),
deadlinesTop = deadlines.getBoundingClientRect().top + document.body.scrollTop;
let stages = document.querySelector('.stages'),
stagesTop = stages.getBoundingClientRect().top + document.body.scrollTop;
let footer = document.querySelector('.footer'),
footerTop = footer.getBoundingClientRect().top + document.body.scrollTop;

let scrollPos = 0;
// Переключение индикатора
$(window).scroll(function(){
	// Шапка
	var st = $(this).scrollTop();
	if (st > scrollPos){
		$('.header').removeClass('show');
		$('.header').addClass('hidden');
	} else {
		$('.header').addClass('show');
		$('.header').removeClass('hidden');
	}
	scrollPos = st;
	// Бурение
	if (window.pageYOffset >= 0) {
		indicatorItemDrilling.classList.add('active');
		$('.indicator__item.drilling-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.drilling-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemDrilling.classList.remove('active');
		$('.indicator__item.drilling-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.drilling-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Опыт работы
	if (window.pageYOffset >= (expirienceTop - 100)) {
		indicatorItemDrilling.classList.remove('active');
		indicatorItemExp.classList.add('active');
		$('.indicator__item.drilling-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.drilling-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.expirience-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.expirience-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemExp.classList.remove('active');
		$('.indicator__item.expirience-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.expirience-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Сравнение
	if (window.pageYOffset >= (compareTop - 300)) {
		indicatorItemExp.classList.remove('active');
		indicatorItemCompare.classList.add('active');
		$('.indicator__item.expirience-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.expirience-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.compare-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.compare-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemCompare.classList.remove('active');
		$('.indicator__item.compare-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.compare-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Техника 
	if (window.pageYOffset >= (techTop - 300)) {
		indicatorItemCompare.classList.remove('active');
		indicatorItemTech.classList.add('active');
		$('.indicator__item.compare-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.compare-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.tech-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.tech-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemTech.classList.remove('active');
		$('.indicator__item.tech-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.tech-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Качество 
	if (window.pageYOffset >= (qualityTop + 600)) {
		indicatorItemTech.classList.remove('active');
		indicatorItemQuality.classList.add('active');
		$('.indicator__item.tech-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.tech-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.quality-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.quality-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemQuality.classList.remove('active');
		$('.indicator__item.quality-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.quality-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Гарантии 
	if (window.pageYOffset >= (guaranteesTop + 600)) {
		indicatorItemQuality.classList.remove('active');
		indicatorItemGuarantees.classList.add('active');
		$('.indicator__item.quality-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.quality-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.guarantees-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.guarantees-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemGuarantees.classList.remove('active');
		$('.indicator__item.guarantees-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.guarantees-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Результат
	if (window.pageYOffset >= (resultTop + 600)) {
		indicatorItemGuarantees.classList.remove('active');
		indicatorItemResult.classList.add('active');
		$('.indicator__item.guarantees-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.guarantees-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.result-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.result-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemResult.classList.remove('active');
		$('.indicator__item.result-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.result-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Цены
	if (window.pageYOffset >= (priceTop + 600)) {
		indicatorItemResult.classList.remove('active');
		indicatorItemPrice.classList.add('active');
		$('.indicator__item.result-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.result-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.price-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.price-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemPrice.classList.remove('active');
		$('.indicator__item.price-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.price-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Сроки
	if (window.pageYOffset >= (deadlinesTop + 600)) {
		indicatorItemPrice.classList.remove('active');
		indicatorItemDeadlines.classList.add('active');
		$('.indicator__item.price-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.price-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.deadlines-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.deadlines-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemDeadlines.classList.remove('active');
		$('.indicator__item.deadlines-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.deadlines-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Этапы
	if (window.pageYOffset >= (stagesTop + 600)) {
		indicatorItemDeadlines.classList.remove('active');
		indicatorItemStages.classList.add('active');
		$('.indicator__item.deadlines-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.deadlines-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.stages-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.stages-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemStages.classList.remove('active');
		$('.indicator__item.stages-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.stages-indicator').children('.indicator__item-text').removeClass('active');
	}
	// Подвал
	if (window.pageYOffset >= (footerTop - 200)) {
		indicatorItemStages.classList.remove('active');
		indicatorItemFooter.classList.add('active');
		$('.indicator__item.stages-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.stages-indicator').children('.indicator__item-text').removeClass('active');
		$('.indicator__item.footer-indicator').children('.indicator__item-number').addClass('active');
		$('.indicator__item.footer-indicator').children('.indicator__item-text').addClass('active');
	} else {
		indicatorItemFooter.classList.remove('active');
		$('.indicator__item.footer-indicator').children('.indicator__item-number').removeClass('active');
		$('.indicator__item.footer-indicator').children('.indicator__item-text').removeClass('active');
	}
})
// Закрываем информацию на карте 
$('.close__map').click(function(){
	$('.map-info').remove();
	$('.map-wrapper').addClass('active');
})
// Адаптивное меню
$('.header__blue-btn').click(function(e){
	if (window.innerWidth <= 1023) {
		e.preventDefault();
		$('.indicator').toggleClass('active');
		$('html').toggleClass('lock');
		$('.header').toggleClass('dark');
		$('.header__burger').toggleClass('active')
	} else {
		return false;
	}
})
$('.indicator__item').click(function(){
	$('.indicator').removeClass('active');
	$('html').removeClass('lock');
	$('.header').removeClass('dark')
	$('.header__burger').removeClass('active');
})
// Маска на инпут телефона
window.addEventListener("DOMContentLoaded", function() {
	[].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, function(a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function(a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5)  this.value = ""
		}
	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)
});
});
// Запрет прокрутки страницы
function preventDefault(e) {
	e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

var supportsPassive = false;
try {
	window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
		get: function () { supportsPassive = true; } 
	}));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
	window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
	window.removeEventListener('touchmove', preventDefault, wheelOpt);
	window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
// Вызов модального окна
$('.consultation-btn').click(function(){
	$('.modal-box').addClass('active');
	$('.overlay').addClass('active');
	$('.modal__head-text').text('Заказ консультации');
	$('.modal__btn').text('Заказать консультацию')
	disableScroll();
})
$('#application-btn').click(function(){
	$('.modal-box').addClass('active');
	$('.overlay').addClass('active');
	$('.modal__head-text').text('Оставить заявку');
	$('.modal__btn').text('Оставить заявку')
	disableScroll();
})
// Закрытие модального окна
$('.close-modal').click(function(){
	$('.modal-box').removeClass('active');
	$('.overlay').removeClass('active');
	enableScroll();
})

//Карта
setTimeout(function(){
	let elem = document.createElement('script');
	elem.src = '//api-maps.yandex.ru/2.1/?&lang=ru-RU&onload=getYaMap';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 4000);
function getYaMap(){
	var myMap = new ymaps.Map('ymap', {
		center: [52.255928, 104.336194],
		zoom: 16
	}, {
		searchControlProvider: 'yandex#search'
	}),
	MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),
	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		hintContent: 'Собственный значок метки',
		balloonContent: 'Это красивая метка'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/marker.svg',
		iconImageSize: [25, 33],
		iconImageOffset: [-5, -38]
	})
	myMap.geoObjects.add(myPlacemark)
	myMap.behaviors.disable('scrollZoom')
}
// Оптимизация
setTimeout(function(){
	let kamazImg = document.createElement('img');
	let treeImg = document.createElement('img');
	let techImgBox = document.querySelector('.tech__img')
	kamazImg.src = 'img/kamaz.png';
	kamazImg.className = 'kamaz__img';
	kamazImg.setAttribute('alt', '#')
	treeImg.src = 'img/tree.png';
	treeImg.className = 'tree__img';
	treeImg.setAttribute('alt', '#')
	techImgBox.appendChild(kamazImg);
	techImgBox.appendChild(treeImg);
}, 4000)


