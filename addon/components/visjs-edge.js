import Ember from 'ember';
import VisJsChild from 'elvis-network/components/visjs-child';

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

  eId: Ember.computed('from', 'to', function() {
    return `${this.get('from')}-${this.get('to')}`;
  }),

  /**
   * @public
   *
   * If set this defines edge's weight (thickness).
   * @type {Number}
   */
  value: undefined,

  valueChanged: Ember.observer('value', function() {
    let container = this.get('containerLayer');
    container.updateEdgeValue(this.get('eId'), this.get('value'));
  }),

  /**
   * @public
   *
   * If set this defines edge's color
   * @type {Int}
   */
  color: undefined,

  colorChanged: Ember.observer('color', function() {
    let container = this.get('containerLayer');
    container.updateEdgeColor(this.get('eId'), this.get('color'));
  }),

  arrowChanged: Ember.observer('arrows', function() {
    let container = this.get('containerLayer');
    container.updateEdgeArrow(this.get('eId'), this.get('arrows'));
  })

});
