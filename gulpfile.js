var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-ruby-sass'),
    sftp = require('gulp-sftp');

gulp.task('styles', function() {
    return gulp.src(['css/**.scss'])
        .pipe(sass())
	.pipe(gulp.dest('css'));
});
    
gulp.task('copy', function() {
    return gulp.src(['css/**/*.css'])
        .pipe(sftp({
	    host: 'domain.com',
	    remotePath: '/tmp',
	    auth: 'privateKeyEncrypted'
	}));
});

gulp.task('default', function () {
    gulp.watch('css/**/*.scss', ['styles', 'copy']);
});
