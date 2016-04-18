module.exports = {
  description: 'add visjs bower package',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('vis', '^4.16.0');
  }
};
