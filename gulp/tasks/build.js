import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import usemin from 'gulp-usemin'
import htmlmin from 'gulp-htmlmin'
import cache from 'gulp-cache'
import uglify from 'gulp-uglify'
import rev from 'gulp-rev'
import cssnano from 'gulp-cssnano'
import del from 'del'
// import gzip from 'gulp-gzip'


// Delete build repo when upgrade to newer version
gulp.task('deleteBuildFolder', () => {
  return del("./build")
})

gulp.task('copyGeneralFiles', ['deleteBuildFolder'], () => {
  const copyPaths = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/sprite/**',
    '!./app/styles/**',
    '!./app/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(copyPaths)
    .pipe(gulp.dest('./build'))
});

// Optimize and compress -- images go in app/assets, no src ['./src/assets/**'] 
gulp.task('optimizeImages', ['deleteBuildFolder', 'icons'], () => {
  // gulp.src('app/assets/**/*.+(png|jpg|gif|svg)')
  return gulp.src('./app/assets/**')
  .pipe(cache(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
      })
   ])))
    .pipe(gulp.dest('./build/assets/'))
 }
)

// Compress, revision and optimize all files in one
gulp.task('compress', ['deleteBuildFolder', 'styles', 'scripts'], () => {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      html: [ htmlmin({ collapseWhitespace: true }) ],
      css: [ 
        () => rev(),      // add revision
        () => cssnano()   // minify css 
      ],
      js: [ 
        () => rev(),      // add revision
        () => uglify()    // minify js 
      ]
    }))
    // .pipe(gzip())
    .pipe(gulp.dest("./build"));
});


// Build finial touch
gulp.task('build', ['deleteBuildFolder', 'copyGeneralFiles', 'optimizeImages', 'compress'])