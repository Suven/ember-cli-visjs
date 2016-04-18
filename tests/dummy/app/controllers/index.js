import Ember from 'ember';

export default Ember.Controller.extend({

  networkOptions: {
    nodes: {
      color: '#C7F110'
    }
  },

  actions: {
    nodeClicked(nodeId) {
      alert(`${nodeId} was clicked`);
    }
  }

});
