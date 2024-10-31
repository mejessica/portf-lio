import { module, test } from 'qunit';
import { setupRenderingTest } from 'portfolio-jessica/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | background-video', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BackgroundVideo />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BackgroundVideo>
        template block text
      </BackgroundVideo>
    `);

    assert.dom().hasText('template block text');
  });
});
