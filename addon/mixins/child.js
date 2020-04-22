import Mixin from '@ember/object/mixin';
import ContainerMixin from 'ember-cli-visjs/mixins/container';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';

// From https://github.com/miguelcobain/ember-leaflet/blob/master/addon/mixins/child.js
export default Mixin.create({

  containerLayer: computed(function() {
    return this.nearestOfType(ContainerMixin);
  }),

  didInsertElement() {
    this._super(...arguments);
    this.registerWithParent();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.unregisterWithParent();
  },

  registerWithParent() {
    let container = this.get('containerLayer');
    assert(`Tried to use ${this} outside the context of a container layer.`, container);
    container.registerChild(this);
  },

  unregisterWithParent() {
    let container = this.get('containerLayer');
    if (container) {
      container.unregisterChild(this);
    }
  }

});
