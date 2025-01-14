---
meta:
  title: Typography
  description: Typography tokens are used to maintain a consistent set of font styles throughout your app.
---

# Typography Tokens

Typography tokens are used to maintain a consistent set of font styles throughout your app.

## Font Family

The default font stack is designed to be simple and highly available on as many devices as possible.

| Token            | Value                                                                                                                                                    | Example                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `--o-font-sans`  | 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' | <span style="font-family: var(--o-font-sans)">The quick brown fox jumped over the lazy dog.</span>  |
| `--o-font-serif` | Georgia, 'Times New Roman', serif                                                                                                                        | <span style="font-family: var(--o-font-serif)">The quick brown fox jumped over the lazy dog.</span> |
| `--o-font-mono`  | SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;                                                                                           | <span style="font-family: var(--o-font-mono)">The quick brown fox jumped over the lazy dog.</span>  |

## Font Size

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font size.

| Token                    | Value           | Example                                                        |
| ------------------------ | --------------- | -------------------------------------------------------------- |
| `--o-font-size-2x-small` | 0.625rem (10px) | <span style="font-size: var(--o-font-size-2x-small)">Aa</span> |
| `--o-font-size-x-small`  | 0.75rem (12px)  | <span style="font-size: var(--o-font-size-x-small)">Aa</span>  |
| `--o-font-size-small`    | 0.875rem (14px) | <span style="font-size: var(--o-font-size-small)">Aa</span>    |
| `--o-font-size-medium`   | 1rem (16px)     | <span style="font-size: var(--o-font-size-medium)">Aa</span>   |
| `--o-font-size-large`    | 1.5rem (24px)   | <span style="font-size: var(--o-font-size-large)">Aa</span>    |
| `--o-font-size-x-large`  | 2rem (32px)     | <span style="font-size: var(--o-font-size-x-large)">Aa</span>  |
| `--o-font-size-2x-large` | 2.5rem (40px)   | <span style="font-size: var(--o-font-size-2x-large)">Aa</span> |
| `--o-font-size-3x-large` | 3rem (48px)     | <span style="font-size: var(--o-font-size-3x-large)">Aa</span> |
| `--o-font-size-4x-large` | 3.5rem (56px)   | <span style="font-size: var(--o-font-size-4x-large)">Aa</span> |
| `--o-font-size-5x-large` | 4rem (64px)     | <span style="font-size: var(--o-font-size-5x-large)">Aa</span> |
| `--o-font-size-6x-large` | 5.5rem (88px)   | <span style="font-size: var(--o-font-size-6x-large)">Aa</span> |
| `--o-font-size-7x-large` | 4.5rem (72px)   | <span style="font-size: var(--o-font-size-7x-large)">Aa</span> |
| `--o-font-size-8x-large` | 8.75rem (140px) | <span style="font-size: var(--o-font-size-8x-large)">Aa</span> |

## Font Weight

| Token                       | Value | Example                                                                                                         |
| --------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| `--o-font-weight-light`     | 300   | <span style="font-weight: var(--o-font-weight-light);">The quick brown fox jumped over the lazy dog.</span>     |
| `--o-font-weight-normal`    | 400   | <span style="font-weight: var(--o-font-weight-normal);">The quick brown fox jumped over the lazy dog.</span>    |
| `--o-font-weight-medium`    | 500   | <span style="font-weight: var(--o-font-weight-medium);">The quick brown fox jumped over the lazy dog.</span>    |
| `--o-font-weight-semibold`  | 600   | <span style="font-weight: var(--o-font-weight-semibold);">The quick brown fox jumped over the lazy dog.</span>  |
| `--o-font-weight-bold`      | 700   | <span style="font-weight: var(--o-font-weight-bold);">The quick brown fox jumped over the lazy dog.</span>      |
| `--o-font-weight-extrabold` | 800   | <span style="font-weight: var(--o-font-weight-extrabold);">The quick brown fox jumped over the lazy dog.</span> |

## Letter Spacing

| Token                       | Value    | Example                                                                                                            |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `--o-letter-spacing-denser` | -0.03em  | <span style="letter-spacing: var(--o-letter-spacing-denser);">The quick brown fox jumped over the lazy dog.</span> |
| `--o-letter-spacing-dense`  | -0.015em | <span style="letter-spacing: var(--o-letter-spacing-dense);">The quick brown fox jumped over the lazy dog.</span>  |
| `--o-letter-spacing-normal` | normal   | <span style="letter-spacing: var(--o-letter-spacing-normal);">The quick brown fox jumped over the lazy dog.</span> |
| `--o-letter-spacing-loose`  | 0.075em  | <span style="letter-spacing: var(--o-letter-spacing-loose);">The quick brown fox jumped over the lazy dog.</span>  |
| `--o-letter-spacing-looser` | 0.15em   | <span style="letter-spacing: var(--o-letter-spacing-looser);">The quick brown fox jumped over the lazy dog.</span> |

## Line Height

| Token                    | Value | Example                                                                                                                                                                                                      |
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--o-line-height-denser` | 1     | <div style="line-height: var(--o-line-height-denser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--o-line-height-dense`  | 1.2   | <div style="line-height: var(--o-line-height-dense);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--o-line-height-normal` | 1.4   | <div style="line-height: var(--o-line-height-normal);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--o-line-height-loose`  | 1.5   | <div style="line-height: var(--o-line-height-loose);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--o-line-height-looser` | 2     | <div style="line-height: var(--o-line-height-looser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
