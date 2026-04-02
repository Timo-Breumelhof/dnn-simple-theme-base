/**
 * Watch tasks
 */

const { watch, series } = require('gulp');
const { buildSkinsToDist, buildContainersToDist, buildScss, buildLess, buildJs, copyVendors } = require('./build');
const { cleanSkins, cleanContainers } = require('./clean');
const { distributeSkins, distributeContainers, distributeCss, distributeJs, distributeVendors } = require('./distribute');

/**
 * Watch files for changes
 */
function watchFiles() {
  watch('skin/**/*', series(buildSkinsToDist, cleanSkins, distributeSkins));
  watch('container/**/*', series(buildContainersToDist, cleanContainers, distributeContainers));
  watch(['src/scss/**/*.scss', '_base/scss/**/*.scss'], series(buildScss, distributeCss));
  watch(['src/less/**/*.less', '_base/less/**/*.less'], series(buildLess, distributeCss));
  watch('src/js/**/*.js', series(buildJs, distributeJs));
  watch('vendors/**/*', series(copyVendors, distributeVendors));
}

module.exports = {
  watchFiles,
};
