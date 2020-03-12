import gulp from 'gulp'
import rename from 'gulp-rename'
import svgSprite from 'gulp-svg-sprite'
import svgmin from 'gulp-svgmin'
import del from 'del'

// Clean sprite
gulp.task('beginClean', () => {
  const paths = [
    './app/temp/sprite',  
    // './app/assets/sprite', 
    // './src/scss/moduls/_sprite.scss'
  ]

  return del(paths)
  }
)

// Create sprite from svg icons
gulp.task('createSprite', ['beginClean'], () => {
  
  const config = {
    shape: {
      dimension: { // Set maximum dimensions
        maxWidth: 16,
        maxHeight: 16
      },
      spacing: { 
        padding: 10
      },
    },
    mode: {
      // SVG Symbol Sprite 
      symbol: {
        dest: "./",
        prefix: '.icon--%s', // BEM-style prefix 
        sprite: 'sprite.svg',
        render: {
          scss: {
            dest: 'scss/sprite-icon'
          }
        }
      }
    }
  };

  return gulp.src('./src/assets/icons/**/*.svg')
    .pipe(svgmin({ js2svg: {pretty: true} }))
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/')) 
})

// Copy svg sprite to app folder
gulp.task('copySpriteSvg', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/**/*.svg')
      .pipe(gulp.dest('./app/assets/sprite'))
  }
)

// Transform css to scss 
gulp.task('copySpriteSCSS', ['createSprite', 'copySpriteSvg'], () => {
    return gulp.src('./app/temp/sprite/scss/*.scss')
      .pipe(rename('_sprite.scss'))
      .pipe(gulp.dest('./src/scss/moduls'))
  }
)

// End clean depend on these 2 tasks, can't run until finish
gulp.task('endClean', ['copySpriteSvg', 'copySpriteSCSS'], () => {
  return del(['./app/temp/sprite'])
  }
)

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteSvg', 'copySpriteSCSS', 'endClean'])