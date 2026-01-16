const { src, dest, watch, series } = require('gulp');
const fs = require('fs');
const path = require('path');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

/**
 * Load config
 */
const baseConfig = JSON.parse(fs.readFileSync('./config.json'));
let localConfig = {};

if (fs.existsSync('./config-local.json')) {
  localConfig = JSON.parse(fs.readFileSync('./config-local.json'));
}

const config = { ...baseConfig, ...localConfig };
const themeName = config.themeName;
const targetPaths = config.targetPaths || [];

/**
 * Helpers
 */
function skinTarget(basePath) {
  return path.join(basePath, 'Skins', themeName);
}

function containerTarget(basePath) {
  return path.join(basePath, 'Containers', themeName);
}

/**
 * Clean tasks
 */
function cleanSkins() {
  const paths = targetPaths.map(p => skinTarget(p));
  return del(paths, { force: true });
}

function cleanContainers() {
  const paths = targetPaths.map(p => containerTarget(p));
  return del(paths, { force: true });
}

/**
 * Copy tasks
 */
function copySkins() {
  return targetPaths.reduce((stream, basePath) => {
    return stream.pipe(dest(skinTarget(basePath)));
  }, src('skin/**/*'));
}

function copyContainers() {
  return targetPaths.reduce((stream, basePath) => {
    return stream.pipe(dest(containerTarget(basePath)));
  }, src('container/**/*'));
}

/**
 * SCSS build and minification
 */
function buildScss() {
  return targetPaths.reduce((stream, basePath) => {
    const destPath = skinTarget(basePath);

    // Compile SCSS to normal CSS
    return stream
      .pipe(sass().on('error', sass.logError))
      .pipe(dest(destPath)) // Skin.css
      .pipe(cleanCSS())     // Minify
      .pipe(rename({ suffix: '.min' })) // Skin.min.css
      .pipe(dest(destPath));
  }, src('src/scss/**/*.scss'));
}

/**
 * Watch
 */
function watchFiles() {
  watch('skin/**/*', series(cleanSkins, copySkins));
  watch('container/**/*', series(cleanContainers, copyContainers));
  watch('src/scss/**/*.scss', buildScss);
}

/**
 * Public tasks
 */
exports.build = series(
  cleanSkins,
  cleanContainers,
  copySkins,
  copyContainers,
  buildScss
);

exports.watch = watchFiles;
exports.default = exports.build;
