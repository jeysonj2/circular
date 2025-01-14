---
meta:
  title: Spinner
  description: Spinners are used to show the progress of an indeterminate operation.
layout: component
---

```html:preview
<o-spinner></o-spinner>
```

```jsx:react
import { OSpinner } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html:preview
<o-spinner></o-spinner>
<o-spinner style="font-size: 2rem;"></o-spinner>
<o-spinner style="font-size: 3rem;"></o-spinner>
```

{% raw %}

```jsx:react
import { OSpinner } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <>
    <OSpinner />
    <OSpinner style={{ fontSize: '2rem' }} />
    <OSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

{% endraw %}

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html:preview
<o-spinner style="font-size: 50px; --track-width: 10px;"></o-spinner>
```

{% raw %}

```jsx:react
import { OSpinner } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

{% endraw %}

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html:preview
<o-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></o-spinner>
```

{% raw %}

```jsx:react
import { OSpinner } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

{% endraw %}
