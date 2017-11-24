import Ember from 'ember';
import VisJsChild from 'ember-cli-visjs/components/visjs-child';

export default VisJsChild.extend({
  type: 'edge',

  /**
   * @public
   *
   * Node-ID for the starting-point of this edge.
   * @type {String}
   */
  from: '',

  /**
   * @public
   *
   * Node-ID for the target-point of this edge.
   * @type {String}
   */
  to: '',

  /**
   * @public
   *
   * The width of the edge.
   * @type {Number}
   */
  width: undefined,

  eId: Ember.computed('from', 'to', function() {
    return `${this.get('from')}-${this.get('to')}`;
  }),

  arrowChanged: Ember.observer('arrows', function() {
    let container = this.get('containerLayer');
    container.updateEdgeArrow(this.get('eId'), this.get('arrows'));
  }),

  widthChanged: Ember.observer('width', function() {
    let container = this.get('containerLayer');
    container.updateEdgeWidth(this.get('eId'), this.get('width'));
  })
});
