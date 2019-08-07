import Component from '@ember/component';
import ChildMixin from 'ember-cli-visjs/mixins/child';

export default Component.extend(ChildMixin, {
  didCreateLayer() {},
  willDestroyLayer() {},
  select() {},

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
