import { module, test } from 'qunit';
import { setupRenderingTest } from 'quotes/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | profile-details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ProfileDetails />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ProfileDetails>
        template block text
      </ProfileDetails>
    `);

    assert.dom().hasText('template block text');
  });
});
