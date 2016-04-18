import Ember from 'ember';

export default Ember.Controller.extend({

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
    console.log(`B was moved to ${this.get('bX')}/${this.get('bY')}`);
  }),

  actions: {
    nodeClicked(nodeId) {
      this.set('nodeColor', `#${Math.floor(Math.random() * 16777215).toString(16)}`);
      console.log(`${nodeId} was clicked`);
    }
  }

});
