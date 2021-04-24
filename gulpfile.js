const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function compileSass() {
  return gulp
    .src("css/sass/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
}

function mergeJS() {
  return gulp
    .src("js/main/*.js")
    .pipe(concat("bundle.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("js/"))
    .pipe(browserSync.stream());
}

function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

function watch() {
  gulp.watch("css/sass/*.scss", compileSass);
  gulp.watch("js/main/*.js", mergeJS);
  gulp.watch("*.html").on("change", browserSync.reload);
}

gulp.task("sass", compileSass);
gulp.task("bundlejs", mergeJS);

gulp.task("build", gulp.parallel(compileSass, mergeJS));
gulp.task("default", gulp.parallel(watch, browser, "sass", "bundlejs"));
