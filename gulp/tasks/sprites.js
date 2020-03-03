import gulp from 'gulp'
import rename from 'gulp-rename'
import svgSprite from 'gulp-svg-sprite'
import del from 'del'

// Clean src/scss/components/_sprite.scss
gulp.task('beginClean', () => {
  return del(['./app/temp/sprite', './app/assets/sprite'])
  }
)

// Create sprite from svg icons
gulp.task('createSprite', ['beginClean'], () => {
  const config = {
    shape: {
      spacing: {
        padding: 1
      }
    },
    mode: {
      css: {
        sprite: 'sprite.svg',
        render: {
          css: {
            template: './gulp/templates/sprite.css'
          }
        }
      }
    }
  }

  return gulp.src('./src/assets/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/')) 
})

// Copy svg sprite to app folder
gulp.task('copySpriteSvg', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
      .pipe(gulp.dest('./app/assets/sprite'))
  }
)

// Transform css to scss 
gulp.task('copySpriteCSS', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.css')
      .pipe(rename('_sprite.scss'))
      .pipe(gulp.dest('./src/scss/moduls/components/'))
  }
)

// End clean depend on these 2 tasks, can't run until finish
gulp.task('endClean', ['copySpriteGraphic','copySpriteCSS'], () => {
  return del(['./app/temp/sprite'])
  }
)

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteSvg', 'copySpriteCSS', 'endClean'])