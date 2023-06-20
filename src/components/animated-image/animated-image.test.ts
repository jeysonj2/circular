import { clickOnElement } from '../../internal/test';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import type OAnimatedImage from './animated-image';

describe('<o-animated-image>', () => {
  it('should render a component', async () => {
    const animatedImage = await fixture(html` <o-animated-image></o-animated-image> `);

    expect(animatedImage).to.exist;
  });

  it('should render be accessible', async () => {
    const animatedImage = await fixture(html` <o-animated-image></o-animated-image> `);

    await expect(animatedImage).to.be.accessible();
  });

  const files = ['docs/assets/images/walk.gif', 'docs/assets/images/tie.webp'];

  files.forEach((file: string) => {
    it(`should load a ${file} without errors`, async () => {
      const animatedImage = await fixture<OAnimatedImage>(html` <o-animated-image></o-animated-image> `);
      let errorCount = 0;
      oneEvent(animatedImage, 'o-error').then(() => errorCount++);
      await loadImage(animatedImage, file);

      expect(errorCount).to.be.equal(0);
    });

    it(`should play ${file} on click`, async () => {
      const animatedImage = await fixture<OAnimatedImage>(html` <o-animated-image></o-animated-image> `);
      await loadImage(animatedImage, file);

      expect(animatedImage.play).not.to.be.true;

      await clickOnElement(animatedImage);

      expect(animatedImage.play).to.be.true;
    });

    it(`should pause and resume ${file} on click`, async () => {
      const animatedImage = await fixture<OAnimatedImage>(html` <o-animated-image></o-animated-image> `);
      await loadImage(animatedImage, file);

      animatedImage.play = true;

      await clickOnElement(animatedImage);

      expect(animatedImage.play).to.be.false;

      await clickOnElement(animatedImage);

      expect(animatedImage.play).to.be.true;
    });
  });

  it('should emit an error event on invalid url', async () => {
    const animatedImage = await fixture<OAnimatedImage>(html` <o-animated-image></o-animated-image> `);

    const errorPromise = oneEvent(animatedImage, 'o-error');
    animatedImage.src = 'completelyWrong';

    await errorPromise;
  });
});
async function loadImage(animatedImage: OAnimatedImage, file: string) {
  const loadingPromise = oneEvent(animatedImage, 'o-load');
  animatedImage.src = file;
  await loadingPromise;
}