/**
 * Gulp build system for DNN theme
 * Main gulpfile that orchestrates all build tasks
 */

const { series } = require('gulp');

// Import task modules
const { cleanDist, cleanSkins, cleanContainers } = require('./tasks/clean');
const { buildSkinsToDist, buildContainersToDist, buildScss, buildLess, buildJs, copyVendors } = require('./tasks/build');
const { distributeSkins, distributeContainers } = require('./tasks/distribute');
const { watchFiles } = require('./tasks/watch');
const { getVendorsFromNpm } = require('./tasks/vendors');

/**
 * Public tasks
 */

// Watch and auto-distribute
exports.watch = series(watchFiles);

// Build everything to dist only
exports.build = series(
  cleanDist,
  buildSkinsToDist,
  buildContainersToDist,
  buildScss,
  buildLess,
  buildJs,
  copyVendors
);

// Quick distribute without rebuilding
exports.sync = series(
  cleanSkins,
  cleanContainers,
  distributeSkins,
  distributeContainers
);

// Build to dist AND distribute to target paths
exports.distribute = series(
  exports.build,
  exports.sync
);

// Clean all output files
exports.clean = series(cleanDist, cleanSkins, cleanContainers);

// Get vendor files from npm packages
exports.vendors = series(getVendorsFromNpm);

// Get vendors from npm, then build everything
exports.refresh = series(getVendorsFromNpm, exports.build);

// Full refresh: build, distribute and watch
exports.init = series(exports.distribute, exports.watch);

// Default: build to dist and distribute
exports.default = exports.distribute;
