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
  nId: '',

  /**
   * @public
   *
   * If set, this overrides the networks global color.
   * Use a Hex-Value when setting this.
   * @type {String}
   */
  color: false,

  colorChanged: Ember.observer('color', function() {
    let container = this.get('containerLayer');
    container.updateNodeColor(this.get('nId'), this.get('color'));
  }),

  /**
   * @public
   *
   * If set this overwrites the default font settings.
   * @type {Object|String}
   */
  font: undefined,

  fontChanged: Ember.observer('font', function() {
    let container = this.get('containerLayer');
    container.updateNodeFont(this.get('nId'), this.get('font'));
  }),

  /**
   * @public
   *
   * If set this overwrites the default group settings.
   * @type {String}
   */
  group: undefined,

  groupChanged: Ember.observer('group', function() {
    let container = this.get('containerLayer');
    container.updateNodeGroup(this.get('nId'), this.get('group'));
  }),

  /**
   * @public
   *
   * If set, a given image-url will be shown as image.
   * @type {String}
   */
  image: false,

  imageChanged: Ember.observer('image', function() {
    let container = this.get('containerLayer');
    container.updateNodeImage(this.get('nId'), this.get('image'));
  }),

  /**
   * @public
   *
   * If set this displays a label under/in the node, depending on
   * whether an image is shown or not.
   * @type {String}
   */
  label: undefined,

  labelChanged: Ember.observer('label', function() {
    let container = this.get('containerLayer');
    container.updateNodeLabel(this.get('nId'), this.get('label'));
  }),

  /**
   * @public
   *
   * If set this gives the node a level used in hierarchical mode.
   * @type {Number}
   */
  level: undefined,

  levelChanged: Ember.observer('level', function() {
    let container = this.get('containerLayer');
    container.updateNodeLevel(this.get('nId'), this.get('level'));
  }),

  /**
   * @public
   *
   * If set, a given html element or string will be shown as a tooltip.
   * @type {String|Element}
   */
  title: undefined,

  titleChanged: Ember.observer('title', function() {
    let container = this.get('containerLayer');
    container.updateNodeTitle(this.get('nId'), this.get('title'));
  })
});
