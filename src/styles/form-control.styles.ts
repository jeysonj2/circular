import { css } from 'lit';

export default css`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--o-input-label-color);
    margin-bottom: var(--o-spacing-3x-small);
    line-height: var(--o-line-height-loose);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--o-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--o-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--o-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--o-input-required-content);
    margin-inline-start: var(--o-input-required-content-offset);
    color: var(--o-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--o-input-help-text-color);
    margin-top: var(--o-spacing-3x-small);
    line-height: var(--o-line-height-loose);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--o-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--o-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--o-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--o-spacing-2x-small);
  }
`;
