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
// Перемещаем пользователя вверх страницы при её обновлении во избежание багов
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
compareTop = compare.getBoundingClientRect().top + document.body.scrollTop;
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


// Переключение индикатора
document.addEventListener('scroll', function(){
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
	if (window.pageYOffset >= expirienceTop) {
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
	if (window.pageYOffset >= compareTop) {
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
	if (window.pageYOffset >= techTop) {
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
	if (window.pageYOffset >= qualityTop) {
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
	if (window.pageYOffset >= guaranteesTop) {
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
	if (window.pageYOffset >= resultTop) {
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
	if (window.pageYOffset >= priceTop) {
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
	if (window.pageYOffset >= deadlinesTop) {
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
	if (window.pageYOffset >= stagesTop) {
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