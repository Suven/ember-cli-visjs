/* globals vis */

import Ember from 'ember';
import ContainerMixin from 'ember-cli-visjs/mixins/container';
import layout from '../templates/components/visjs-network';

const { A, assert, debug } = Ember;

export default Ember.Component.extend(ContainerMixin, {
  layout,
  classNames: ['ember-cli-visjs ember-cli-visjs-network'],

  network: false,

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
          let simplifiedNode = { id: c.get('id'), label: c.get('label') };
          if (c.get('color')) {
            simplifiedNode.color = c.get('color');
          }
          nodes.push(simplifiedNode);
          if (c.get('select')) {
            nodesWithEvents.pushObject(c);
          }
          break;
        default:
          debug(`Child of type ${type} not supported by ember-cli-visjs`);
      }
    });

    this.set('nodes', new vis.DataSet(nodes));
    this.set('edges', new vis.DataSet(edges));

    let network = new vis.Network(
      document.getElementById(this.get('elementId')),
      { nodes: this.get('nodes'), edges: this.get('edges') },
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
        network.redraw();
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

    this.set('network', network);
  },

  updateNodeColor(id, color) {
    let allNodes = this.get('nodes');
    allNodes.update({ id, color });
  }

});
