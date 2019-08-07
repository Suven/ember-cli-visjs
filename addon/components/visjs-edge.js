import VisJsChild from 'ember-cli-visjs/components/visjs-child';
import { computed, observer } from '@ember/object';

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

  eId: computed('from', 'to', function() {
    return `${this.get('from')}-${this.get('to')}`;
  }),

  arrowChanged: observer('arrows', function() {
    let container = this.get('containerLayer');
    container.updateEdgeArrow(this.get('eId'), this.get('arrows'));
  }),

  /**
   * @public
   *
   * If set this displays a label on the edge
   * @type {String}
   */
  label: undefined,

  labelChanged: observer('label', function() {
    let container = this.get('containerLayer');
    container.updateNodeLabel(this.get('eId'), this.get('label'));
  }),
});
