import { module, test } from 'qunit';
import { setupRenderingTest } from 'portfolio-jessica/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | project/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Project::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Project::Image>
        template block text
      </Project::Image>
    `);

    assert.dom().hasText('template block text');
  });
});
