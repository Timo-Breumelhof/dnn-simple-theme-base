/**
 * Watch tasks
 */

const { watch, series } = require('gulp');
const { buildSkinsToDist, buildContainersToDist, buildScss, buildJs, copyVendors } = require('./build');
const { cleanSkins, cleanContainers } = require('./clean');
const { distributeSkins, distributeContainers } = require('./distribute');

/**
 * Watch files for changes
 */
function watchFiles() {
  watch('skin/**/*', series(buildSkinsToDist, cleanSkins, distributeSkins));
  watch('container/**/*', series(buildContainersToDist, cleanContainers, distributeContainers));
  watch(['src/scss/**/*.scss', '_base/scss/**/*.scss'], buildScss);
  watch('src/js/**/*.js', series(buildJs, cleanSkins, distributeSkins));
  watch('vendors/**/*', series(copyVendors, cleanSkins, distributeSkins));
}

module.exports = {
  watchFiles,
};
