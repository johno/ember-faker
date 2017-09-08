import { module, test } from 'qunit';
import faker from 'faker';

module('faker');

test(`it imports the 'faker' module`, function(assert) {
  assert.ok(faker, `The module 'faker' is imported`);
});

test(`it has 'faker.name'`, function(assert) {
  assert.ok(faker.name, `It has 'faker.name'`);
});
