const {src, dest, watch, series, parallel} = require('gulp');

// Плагины
const fileInclude = require('gulp-file-include'); // Инклюдер
const plumber = require('gulp-plumber'); // Обработчик ошибок
const notify = require('gulp-notify'); // Обработчик ошибок
const concat = require('gulp-concat'); // Объединение css файлов
const cssimport = require('gulp-cssimport'); // Объединение css файлов
const autoprefixer = require('gulp-autoprefixer'); // Автопрефиксер
const cleanCSS = require('gulp-clean-css'); // Сжатие CSS
const rename = require('gulp-rename'); // 2 файла CSS - сжатый и исходный
const shorthand = require('gulp-shorthand');
const uglify = require('gulp-uglify'); // Более сжатая форма записи css свойств
const browserSync = require('browser-sync').create(); // Локальный сервер
const sass = require("gulp-sass")(require('sass')); // SASS
const babel = require("gulp-babel"); // Преобразование в ES-5
const imagemin = require("gulp-imagemin"); // Оптимизация изображений
const newer = require("gulp-newer"); // Оптимизация изображений 1 раз
const fonter = require("gulp-fonter"); // Ковертация шрифтов
const ttf2woff2 = require("gulp-ttf2woff2"); // Ковертация шрифтов
const fontfacegen = require("gulp-fontfacegen"); // Ковертация шрифтов
const groupCssMediaQueries = require("gulp-group-css-media-queries"); // Групирование медиа запросов
const svgSprite = require('gulp-svg-sprite');
const htmlmin = require('gulp-htmlmin'); // Минификация HTML
// Обработка HTML
const html = () => {
	return src('./src/html/*.html')
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(fileInclude())
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(dest('./public'))
	.pipe(browserSync.stream());
}
// Обработка JS
const js = () => {
	return src('./src/js/*.js', {sourcemaps: true})
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(babel())
	.pipe(uglify())
	.pipe(dest('./public/js', {sourcemaps: true}))
	.pipe(browserSync.stream());
}
// Обработка SCSS
const scss = () => {
	return src('./src/scss/*.scss', {sourcemaps: true})
	.pipe(browserSync.stream())
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(shorthand())
	.pipe(groupCssMediaQueries())
	.pipe(concat('style.css'))
	.pipe(dest('./public/css', {sourcemaps: true}))
	.pipe(rename({suffix: '.min'}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(dest('./public/css', {sourcemaps: true}))
}

// Обработка изображений
const img = () => {
	return src('./src/img/*.{jpg,png,svg,gif,jpeg,ico}')
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(newer('./public/img'))
	.pipe(imagemin({
		progressive: true,
		quality: 70,
		svgoPlugins: [{ removeViewBox: false }],
		interlaced: true,
		optimizationLevel: 3 // 0 to 7
	}))
	.pipe(dest('./public/img'))
}
// Обработка шрифтов
const font = () => {
	return src('./src/font/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}')
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(newer('./public/font'))
	.pipe(fonter({
		formats: ["ttf", "woff", "eot", "svg"]
	}))
	.pipe(dest('./public/font'))
	.pipe(ttf2woff2())
	.pipe(dest('./public/font'))
		// .pipe(fontfacegen({
  //           filepath: "./src/scss",
  //           filename: "font.scss",
  //       }))
}
// Создание SVG спрайтов
const svg = () => {
	return src('./src/img/svg/*.svg')
	.pipe(svgSprite({
		mode: {
			stack: {
                	sprite: "../sprite.svg"  //sprite file name
                }
            },
        }
        ))
	.pipe(dest('./public/img'));
}
// Наблюдение
const watcher = () => {
	watch("./src/html/**/*.html", html),
	watch("./src/scss/**/*.scss", scss),
	watch("./src/js/**/*.js", js),
	watch("./src/img/svg/*.svg", svg),
	watch("./src/img/**/*.{jpg,png,svg,gif,jpeg}", img),
	watch("./src/font/**/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}", font)
}
// Наблюдение за браузером
const server = () => {
	browserSync.init({
		server: {
			baseDir: './public'
		}
	})
}
// Задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.svg = svg;
exports.font = font;
// Чтобы в ручную не обновлять галп
exports.watch = watcher;
// Последовательность выполнения задач
exports.dev = series(
	parallel (html, scss, js, img, svg, font),
	parallel (watcher, server)
	);
