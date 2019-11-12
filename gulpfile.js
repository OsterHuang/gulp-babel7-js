let gulp = require('gulp')
let babel = require('gulp-babel')
let livereload = require('gulp-livereload')
let nodemon = require('nodemon')

const jsfiles = [
  'src/oster.js'
];

gulp.task('scripts', function() {
  return gulp.src(jsfiles)
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: ['@babel/transform-runtime']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function(done) {
  livereload.listen();
  gulp.watch('src/*.js', gulp.series('scripts'));
  done()
})

gulp.task('hot-run', function (done) {
  nodemon({
    script: 'dist/oster.js',
    ext: 'js',
    done: done
  })
})

gulp.task('start', gulp.series('watch', 'hot-run'))