var gulp 			= require('gulp'),
	pug 			= require('gulp-pug'),
	autoprefixer 	= require('gulp-autoprefixer'),
  scss			= require('gulp-sass'),
	browserSync 	= require("browser-sync"),
	reload 			= browserSync.reload,
 	server     		= require('gulp-server-livereload'),
 	watch 			= require('gulp-watch');
 	cleancss 		= require('gulp-cleancss');
var livereloadPort 	= 37729;


gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      directoryListing: false,
      open: true,
      livereload: {
      enable: true,
      port: livereloadPort
      }
    }));
    console.log(livereloadPort)
});

gulp.task('html', function(){
  gulp.src('./dev/*.pug')
  	.pipe(watch('./dev/*.pug'))
  	.pipe(pug({
    	"pretty": true
  }))
  .pipe(gulp.dest('./app/'));
});

gulp.task('scss', function() {
	gulp.src('./dev/scss/*.scss')
	.pipe(watch('./dev/scss/*.scss'))
		.pipe(scss())
		//.pipe(cleancss)
		.pipe(gulp.dest('./app/css/'));

});

gulp.task('images', function() {
    gulp.src('./dev/images/*')
    .pipe(watch('./dev/images/*'))
    .pipe(gulp.dest('./app/images/'))
});


gulp.task('default', ['html', 'scss', 'images','webserver']);