const gulp = require('gulp');
const webserver = require('gulp-webserver');
const scss = require('gulp-sass');

gulp.task('webserver', () => {
    return gulp.src('./')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
})
gulp.task('sass', () => {
        return gulp.src('./scss/*.scss')
            .pipe(scss())
            .pipe(gulp.dest('./lib/scss'))
    })
    // gulp.task('watch', () => {
    //     return gulp.watch('./scss/*.scss', gulp.series())

// })