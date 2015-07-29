import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('x-accordion-toggle', 'Integration | Component | x accordion toggle', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-accordion-toggle}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-accordion-toggle}}
      template block text
    {{/x-accordion-toggle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
