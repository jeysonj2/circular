import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import LibraryBaseElement from '../../internal/library-base-element.js';
import OIcon from '../icon/icon.component.js';
import styles from './radio.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation /components/radio
 * @status stable
 * @since 1.5
 *
 * @dependency o-icon
 *
 * @slot - The radio's label.
 *
 * @event o-blur - Emitted when the control loses focus.
 * @event o-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an `<o-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 */
export default class ORadio extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;
  static dependencies = { 'o-icon': OIcon };

  @state() checked = false;
  @state() protected hasFocus = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string;

  /**
   * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  constructor() {
    super();
    this.addEventListener('blur', this.handleBlur);
    this.addEventListener('click', this.handleClick);
    this.addEventListener('focus', this.handleFocus);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }

  private handleBlur = () => {
    this.hasFocus = false;
    this.emit('o-blur');
  };

  private handleClick = () => {
    if (!this.disabled) {
      this.checked = true;
    }
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.emit('o-focus');
  };

  private setInitialAttributes() {
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', '-1');
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.setAttribute('tabindex', this.checked ? '0' : '-1');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          radio: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
          'radio--focused': this.hasFocus,
          'radio--small': this.size === 'small',
          'radio--medium': this.size === 'medium',
          'radio--large': this.size === 'large'
        })}
      >
        <span part="${`control${this.checked ? ' control--checked' : ''}`}" class="radio__control">
          ${this.checked
            ? html` <o-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></o-icon> `
            : ''}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-radio': ORadio;
  }
}
