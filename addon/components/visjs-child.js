import Ember from 'ember';
import ChildMixin from 'ember-cli-visjs/mixins/child';

export default Ember.Component.extend(ChildMixin, {
  didCreateLayer() {},
  willDestroyLayer() {},

  layerSetup() {
    if (this.get('containerLayer')) {
      this.get('containerLayer')._layer.addLayer(this._layer);
    }
  },

  layerTeardown() {
    if (this.get('containerLayer') && this._layer) {
      this.get('containerLayer')._layer.removeLayer(this._layer);
    }
    this._layer = null;
  }

});
