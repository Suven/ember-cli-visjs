/* globals vis */

import Ember from 'ember';
import ContainerMixin from 'ember-cli-visjs/mixins/container';
import layout from '../templates/components/visjs-network';

const { A, assert, debug } = Ember;

export default Ember.Component.extend(ContainerMixin, {
  layout,
  classNames: ['ember-cli-visjs ember-cli-visjs-network'],

  didInsertElement() {
    this._super(...arguments);

    let nodes = [];
    let edges = [];
    let nodesWithEvents = A();

    this.get('_childLayers').forEach((c) => {
      let type = c.get('type');
      switch (type) {
        case 'edge':
          edges.push({ from: c.get('from'), to: c.get('to') });
          break;
        case 'node':
          nodes.push({ id: c.get('id'), label: c.get('label') });
          if (c.get('select')) {
            nodesWithEvents.pushObject(c);
          }
          break;
        default:
          debug(`Child of type ${type} not supported by ember-cli-visjs`);
      }
    });

    let network = new vis.Network(
      document.getElementById(this.get('elementId')),
      { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) },
      this.get('options') || {}
    );

    if (this.get('backgroundImage')) {
      let backgroundImage = new Image();
      let _this = this;

      backgroundImage.onload = function() {
        network.on('beforeDrawing', (ctx) => {
          let offset = {
            x: _this.get('backgroundOffsetX') || 0,
            y: _this.get('backgroundOffsetY') || 0
          };
          ctx.drawImage(backgroundImage, offset.x, offset.y);
        });
      };

      backgroundImage.src = this.get('backgroundImage');
    }

    if (nodesWithEvents.length) {
      let _this = this;
      network.on('selectNode', (e) => {
        let [ selectedNode ] = e.nodes;
        let matchingChildNode = nodesWithEvents.findBy('id', selectedNode);

        if (matchingChildNode) {
          matchingChildNode.get('select')(selectedNode, e);
        }
      });
    }
  }

});
