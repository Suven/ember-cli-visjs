import Object from '@ember/object';
import ChildMixin from 'ember-cli-visjs/mixins/child';
import { module, test } from 'qunit';

module('Unit | Mixin | child');

// Replace this with your real tests.
test('it works', function(assert) {
  let ChildObject = Object.extend(ChildMixin);
  let subject = ChildObject.create();
  assert.ok(subject);
});
