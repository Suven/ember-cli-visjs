import Ember from 'ember';
import ContainerMixin from 'elvis-network/mixins/container';
import { module, test } from 'qunit';

module('Unit | Mixin | container');

// Replace this with your real tests.
test('it works', function(assert) {
  let ContainerObject = Ember.Object.extend(ContainerMixin);
  let subject = ContainerObject.create();
  assert.ok(subject);
});
