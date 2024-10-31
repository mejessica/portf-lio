import { module, test } from 'qunit';
import { setupRenderingTest } from 'portfolio-jessica/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | project', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Project />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Project>
        template block text
      </Project>
    `);

    assert.dom().hasText('template block text');
  });
});
