
/* ========================================================================
||===============||||é______________________________é||||==================||
||===============||||________________________________||||==================||
||===============||||   ZIMJS TEMPLATE WITH GULP     ||||==================||
||===============||||                                ||||==================||
||===============||||    Author :  Aysser jb         ||||==================||
||===============||||    email  : aysser21@gmail.com ||||==================||
||===============||||    github : aysnet1            ||||==================||
||===============||||                                ||||==================||
||===============||||________________________________||||==================||
||===============||||________________________________||||==================||
========================================================================== */

const plugins = require('gulp-load-plugins');
const jsonConcat = require("json-concat");
const gulp = require('gulp');
const rimraf = require('rimraf');
const ren = require('gulp-rename');
const fs = require('fs');

// import yaml from 'js-yaml';
const jscon = require('./index.js');
// const ext_replace = require('gulp-ext-replace');

// Load all Gulp plugins into one variable
const $ = plugins();

// // Check for --production flag
// const PRODUCTION = !!(yargs.argv.production);
//
// // Load settings from settings.yml
// const {
//   COMPATIBILITY,
//   PORT,
//   PATHS
// } = loadConfig();
//
// function loadConfig() {
//   let ymlFile = fs.readFileSync('config.yml', 'utf8');
//   return yaml.load(ymlFile);
// }

// Build the "dist" folder by running all of the below tasks

gulp.task('build',
  gulp.series(clean, generatejson));

// // Build the site, run the server, and watch for file changes
// gulp.task('default',
//   gulp.series('build', watch));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf('output', done);
}

// const files = [];
// // function copy() {
// //   return gulp.src(PATHS.assets)
// //     .pipe(gulp.dest(PATHS.dist + '/assets'));
// // }
//
// const theDirectory = 'data/'; // or whatever directory you want to read
//  fs.readdirSync(theDirectory).forEach((file) => {
//   // you may want to filter these by extension, etc. to make sure they are JSON files
//   files.push(file);
// })

// generate file json
function generatejson(done) {
    jsonConcat({
      src: './posts',
      dest: "./config.json"
  },done)

}



// // Watch for changes to all data
// function watch() {
//   gulp.watch(PATHS.assets , copy);
//   gulp.watch('assets/js/lib/*.js').on('all', gulp.series(javascript, browser.reload));
//   gulp.watch('{layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages, browser.reload));
//   gulp.watch('data/**/*.{js,json,yml}').on('all', gulp.series(resetPages, pages, browser.reload));
//   gulp.watch('helpers/**/*.js').on('all', gulp.series(resetPages, pages, browser.reload));
//   gulp.watch('apps/*.js').on('all', gulp.series( pages, browser.reload));
//   gulp.watch('assets/img/**/*').on('all', gulp.series(images, browser.reload));
//   gulp.watch('scss/**/*.{scss,sass,css}').on('all', gulp.series(sass, browser.reload));
//   gulp.watch('styleguide/**').on('all', gulp.series(styleGuide, browser.reload));
// }
