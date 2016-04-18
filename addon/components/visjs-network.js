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
          let simplifiedEdge = { from: c.get('from'), to: c.get('to') };
          if (c.get('arrows')) {
            simplifiedEdge.arrows = c.get('arrows');
          }
          edges.push(simplifiedEdge);
          break;
        case 'node':
          let simplifiedNode = { id: c.get('id'), label: c.get('label') };

          if (c.get('color')) {
            simplifiedNode.color = c.get('color');
          }

          if (c.get('posX') || c.get('posX') === 0) {
            simplifiedNode.x = c.get('posX');
          }

          if (c.get('posY') || c.get('posY') === 0) {
            simplifiedNode.y = c.get('posY');
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

    let _this = this;

    if (this.get('backgroundImage')) {
      let backgroundImage = new Image();

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
      network.on('selectNode', (e) => {
        let [ selectedNode ] = e.nodes;
        let matchingChildNode = nodesWithEvents.findBy('id', selectedNode);

        if (matchingChildNode) {
          matchingChildNode.get('select')(selectedNode, e);
        }
      });
    }

    network.on('dragEnd', (e) => {
      let newPositions = network.getPositions(e.nodes);

      Object.keys(newPositions).forEach((id) => {
        let matchingChild = _this.get('_childLayers').find((c) => {
          return `${c.get('id')}` === id;
        });
        matchingChild.set('posX', newPositions[id].x);
        matchingChild.set('posY', newPositions[id].y);
      });
    });

    this.set('network', network);
  },

  updateNodeColor(id, color) {
    let allNodes = this.get('nodes');
    allNodes.update({ id, color });
  }

});
