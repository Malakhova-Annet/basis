let gulp = require('gulp'),
// Requires the gulp-sass plugin
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./scss/*.*')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('./public/css'))
});