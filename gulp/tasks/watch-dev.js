import gulp from 'gulp'
const browserSync = require('browser-sync').create(),
      reload = browserSync.reload

// =============================================
// Init browserSync and setup the server
gulp.task('watchDev', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './app',
      port: 3000
    }
  })
  // Watch for html changes and add *php files
  gulp.watch(['./app/*.html', './app/*.php']).on('change', reload)

  // Watch for styles src/scss files for changes
  gulp.watch('./src/scss/**/*.scss', () => {
    gulp.start('cssInject');
  })
  
    // Watch for scripts src/js fils for changes
  gulp.watch('./src/js/**/*.js', () => {
    gulp.start('scriptsRefresh')
    }
  )
})

// =============================================
// BrowserSync inject CSS --
gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/styles/app.css')
    .pipe(browserSync.stream()); 
})

// BrowserSync refresh scripts
gulp.task('scriptsRefresh', ['scripts'], () => {
    reload()
  }
)

// exports.watchDev = watchDev