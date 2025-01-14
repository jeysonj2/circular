import '../../../dist/circular.js';
import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type OOption from './option.js';

describe('<o-option>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<OOption>(html`
      <o-select label="Select one">
        <o-option value="1">Option 1</o-option>
        <o-option value="2">Option 2</o-option>
        <o-option value="3">Option 3</o-option>
        <o-option value="4" disabled>Disabled</o-option>
      </o-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<OOption>(html` <o-option>Test</o-option> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<OOption>(html` <o-option>Test</o-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits the slotchange event when the label changes', async () => {
    const el = await fixture<OOption>(html` <o-option>Text</o-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should convert non-string values to string', async () => {
    const el = await fixture<OOption>(html` <o-option>Text</o-option> `);

    // @ts-expect-error - intentional
    el.value = 10;
    await el.updateComplete;

    expect(el.value).to.equal('10');
  });
});
