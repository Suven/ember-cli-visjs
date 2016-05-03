import Ember from 'ember';

const { A } = Ember;

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),

  network: false,

  visNodes: A([
    { id: 0, to: 4 },
    { id: 1, to: 1 },
    { id: 2, to: 3 },
    { id: 3, to: 1 },
    { id: 4, to: 6 },
    { id: 5, to: 7 },
    { id: 6, to: 3 },
    { id: 7, to: 2 },
    { id: 8, to: 9 },
    { id: 9, to: 7 }
  ]),

  networkOptions: {
    nodes: {
      color: '#C7F110'
    }
  },

  noPhysicsOptions: {
    edges: {
      smooth: {
        type: 'discrete',
        forceDirection: 'none'
      }
    },
    physics: {
      enabled: false
    }
  },

  nodeColor: '#FFFFFF',

  bX: 50,
  bY: 50,

  posOfBChanged: Ember.observer('bX', 'bY', function() {
    this.get('notify').info(`B was moved to ${this.get('bX')}/${this.get('bY')}`);
  }),

  randomNode() {
    let index = Math.floor(Math.random() * this.get('visNodes.length'));
    return this.get('visNodes').objectAt(index);
  },

  actions: {

    nodeClicked(nodeId) {
      this.set('nodeColor', `#${Math.floor(Math.random() * 16777215).toString(16)}`);
      this.get('notify').info(`${nodeId} was clicked`);
    },

    moveToK() {
      this.get('network').moveTo(11);
    },

    focusB() {
      this.get('network').focus(2);
    },

    addNode() {
      let id = 1;

      while (this.get('visNodes').findBy('id', id)) {
        id = Math.floor(Math.random() * 100);
      }

      let randomExistingId = this.randomNode().id;
      this.get('visNodes').pushObject({ id, to: randomExistingId });
    },

    removeNode() {
      this.get('visNodes').removeObject(this.randomNode());
    },

    toggleEdgeManipulation() {
      this.toggleProperty('edgeManipulation');
    },

    edgeAdded(edge) {
      this.get('notify').info(JSON.stringify(edge));
    }
  }

});
