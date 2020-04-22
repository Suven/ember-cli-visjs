import Mixin from '@ember/object/mixin';
import { A } from '@ember/array';

// From https://github.com/miguelcobain/ember-leaflet/blob/master/addon/mixins/container.js
export default Mixin.create({
  _childLayers: null,

  init() {
    this._super(...arguments);
    this.set('_childLayers', new A());
  },

  registerChild(childLayer) {
    this._childLayers.addObject(childLayer);

    if (this._layer) {
      childLayer.layerSetup();
    }
  },

  unregisterChild(childLayer) {
    this._childLayers.removeObject(childLayer);

    if (this._layer) {
      childLayer.layerTeardown();
    }
  }
});
