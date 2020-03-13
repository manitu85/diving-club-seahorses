import gulp from 'gulp'
import autoprefixer from 'autoprefixer'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import maps from 'gulp-sourcemaps'
import browserSync from 'browser-sync'

// =============================================
// ### Compile SASS and make css source maps ###
gulp.task('styles', () => {
  // filters
  const processors = [
    autoprefixer
    // cssnano
  ];

  const handleError = (err) => {
    console.log('Error:', err.toString())
    this.emit('end')
  }

  return gulp.src('./src/scss/**/*.scss')
    .pipe(maps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' })
    .on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(maps.write('./'))
    // .pipe(maps.write('.'))
    .on('error', handleError)
    .pipe(gulp.dest('./app/styles'))
    .pipe(browserSync.stream())
})



