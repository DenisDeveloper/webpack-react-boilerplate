var gulp = require('gulp');
var inject = require('gulp-inject');

var paths = {
  javascript: ['build/bundle.js']
};

gulp.task('index', function(){
  return gulp.src('build/index.html')
  .pipe(inject(
    gulp.src( paths.javascript, {read: false}),
    {relative: true}
  ))
  .pipe(gulp.dest('build'));
});

gulp.task('default', ['index']);
gulp.task('watch', function(){
  gulp.watch(paths.javascript, ['index']);
});
