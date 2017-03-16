var gulp = require('gulp');
var sass = require('gulp-sass');
var browswerSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function(){
    gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browswerSync.reload({stream:true}));
});

gulp.task('serve', function(){
    browswerSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/*.scss', ['styles']);
    gulp.watch('./**/*.html').on('change', browswerSync.reload);

});

gulp.task('default', ['styles', 'serve'])
