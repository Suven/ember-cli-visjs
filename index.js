/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-visjs',

  included: function(app) {
    app.import(app.bowerDirectory + '/vis/dist/vis.js');
  }
};
