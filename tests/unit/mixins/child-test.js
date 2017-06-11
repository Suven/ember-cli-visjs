import Ember from 'ember';
import ChildMixin from 'elvis-network/mixins/child';
import { module, test } from 'qunit';

module('Unit | Mixin | child');

// Replace this with your real tests.
test('it works', function(assert) {
  let ChildObject = Ember.Object.extend(ChildMixin);
  let subject = ChildObject.create();
  assert.ok(subject);
});
