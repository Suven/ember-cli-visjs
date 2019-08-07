import Object from '@ember/object';
import ContainerMixin from 'ember-cli-visjs/mixins/container';
import { module, test } from 'qunit';

module('Unit | Mixin | container');

// Replace this with your real tests.
test('it works', function(assert) {
  let ContainerObject = Object.extend(ContainerMixin);
  let subject = ContainerObject.create();
  assert.ok(subject);
});
