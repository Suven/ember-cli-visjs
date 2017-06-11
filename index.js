/* jshint node: true */
'use strict';

module.exports = {
  name: 'elvis-network',
  options: {
    nodeAssets: {
      'vis': {
        vendor: {
          srcDir: 'dist',
          destDir: 'vis',
          include: ['vis.js', 'vis.css'],
        }
      }
    }
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/vis/vis.js');
    app.import('vendor/vis/vis.css');
  }
};
