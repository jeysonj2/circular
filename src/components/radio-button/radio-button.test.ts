import '../../../dist/circular.js';
import { expect, fixture, html } from '@open-wc/testing';
import type ORadioButton from './radio-button.js';
import type ORadioGroup from '../radio-group/radio-group.js';

describe('<o-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<ORadioGroup>(html`
      <o-radio-group value="1">
        <o-radio-button id="radio-1" value="1"></o-radio-button>
        <o-radio-button id="radio-2" value="2" disabled></o-radio-button>
      </o-radio-group>
    `);
    const radio1 = radioGroup.querySelector<ORadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<ORadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
