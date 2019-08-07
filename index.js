'use strict';

module.exports = {
  name: require('./package').name,

  included: function(app) {
    app.import(app.bowerDirectory + '/vis/dist/vis.js');
  }
};
