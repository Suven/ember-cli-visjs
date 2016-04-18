import Ember from 'ember';
import VisJsChild from 'ember-cli-visjs/components/visjs-child';

export default VisJsChild.extend({
  type: 'node',

  /**
   * @public
   *
   * Unique node-identifier. Also use this value for the
   * edges.
   * @type {String}
   */
  id: '',

  /**
   * @public
   *
   * The label to display within the node.
   * @type {String}
   */
  label: ''

});
