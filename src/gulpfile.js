const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-htmlmin');
const tinify = require('gulp-tinify');

function style () {
	return gulp.src('./sass/**/*.sass')
			.pipe(sass())
			.pipe(gulp.dest('./css'))
			.pipe(browserSync.stream())
}

function watch () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
	gulp.watch('./sass/**/*.sass', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// Сжатие и перенос CSS файлов
gulp.task('minify-css', () => {
	return gulp.src('css/*.css')
	.pipe(cleanCSS())
	.pipe(gulp.dest('../build/css/'))
});
// gulp minify-css

// Перенос сжатых js-файлов 
gulp.task('move-js', () => {
	return gulp.src('js/*.min.js')
	.pipe(gulp.dest('../build/js/'))
});
// gulp move-js

// Сжатие и перенос js-файлов
gulp.task('minify-js', () => {
	return gulp.src(['js/*.js', '!js/*.min.js'])
	.pipe(jsmin())
	.pipe(gulp.dest('../build/js/'))
});
// gulp minify-js

// Сжатие и перенос HTML файлов
gulp.task('htmlmin', () => {
	return gulp.src('*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('../build/'))
});

// Перенос шрифтов
gulp.task('fonts', () => {
	return gulp.src('fonts/**/*.*')
	.pipe(gulp.dest('../build/fonts/'))
});

// Сжатие и перенос изображений 
gulp.task('imagemin', () => {
	return gulp.src('img/**/*.*')
	.pipe(tinify('lY4D4241nD9k2ZCnzlWw39tgSFmSHVHl'))
	.pipe(gulp.dest('../build/img/'))
});


gulp.task('build', gulp.series('minify-css', 'move-js', 'minify-js', 'htmlmin', 'fonts', 'imagemin'))
// gulp build