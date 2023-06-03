import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import LibraryBaseElement from '../../internal/library-base-element';
import styles from './visually-hidden.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://circular-o.github.io/circular/#/components/visually-hidden
 * @status stable
 * @since 2.0
 *
 * @slot - The content to be visually hidden.
 */
@customElement('o-visually-hidden')
export default class OVisuallyHidden extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-visually-hidden': OVisuallyHidden;
  }
}
