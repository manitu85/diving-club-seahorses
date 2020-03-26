import gulp from 'gulp'
import browserSync from 'browser-sync'

// Preview live final site production
gulp.task('previewProd', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './build',
      port: 5000
    }
  })
})