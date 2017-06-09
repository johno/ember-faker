import { module, test } from 'qunit';
import faker from 'faker';

module('faker');

test('it exists', function(assert) {
  assert.ok(
    faker,
    `The module 'faker' is imported`
  );
});
