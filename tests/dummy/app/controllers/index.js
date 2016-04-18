import Ember from 'ember';

export default Ember.Controller.extend({

  networkOptions: {
    nodes: {
      color: '#C7F110'
    }
  },

  nodeColor: '#FF0000',

  actions: {
    nodeClicked(nodeId) {
      this.set('nodeColor', `#${Math.floor(Math.random() * 16777215).toString(16)}`);
      console.log(`${nodeId} was clicked`);
    }
  }

});
