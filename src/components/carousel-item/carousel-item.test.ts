import '../../../dist/circular.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<o-carousel-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-carousel-item></o-carousel-item> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    // Arrange
    const el = await fixture(html` <div role="list"><o-carousel-item></o-carousel-item></div> `);

    // Assert
    await expect(el).to.be.accessible({ ignoredRules: ['aria-required-children'] });
  });
});
