import { module, test } from 'qunit';
import { setupTest } from 'quotes/tests/helpers';

module('Unit | Route | user/followers', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user/followers');
    assert.ok(route);
  });
});
