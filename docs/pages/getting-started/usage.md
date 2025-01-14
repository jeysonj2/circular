---
meta:
  title: Usage
  description: Learn more about using custom elements.
---

# Usage

O-LIBRARY-NAME-O components are just regular HTML elements, or [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) to be precise. You can use them like any other element. Each component has detailed documentation that describes its full API, including properties, events, methods, and more.

If you're new to custom elements, often referred to as "web components," this section will familiarize you with how to use them.

## Attributes & Properties

Many components have properties that can be set using attributes. For example, buttons accept a `size` attribute that maps to the `size` property which dictates the button's size.

```html
<o-button size="small">Click me</o-button>
```

Some properties are boolean, so they only have true/false values. To activate a boolean property, add the corresponding attribute without a value.

```html
<o-button disabled>Click me</o-button>
```

In rare cases, a property may require an array, an object, or a function. For example, to customize the color picker's list of preset swatches, you set the `swatches` property to an array of colors. This must be done with JavaScript.

```html
<o-color-picker></o-color-picker>

<script>
  const colorPicker = document.querySelector('o-color-picker');
  colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
</script>
```

Refer to a component's documentation for a complete list of its properties.

## Events

You can listen for standard events such as `click`, `mouseover`, etc. as you normally would. However, it's important to note that many events emitted within a component's shadow root will be [retargeted](https://dom.spec.whatwg.org/#retarget) to the host element. This may result in, for example, multiple `click` handlers executing even if the user clicks just once. Furthermore, `event.target` will point to the host element, making things even more confusing.

As a result, you should almost always listen for custom events instead. For example, instead of listening to `click` to determine when an `<o-checkbox>` gets toggled, listen to `o-change`.

```html
<o-checkbox>Check me</o-checkbox>

<script>
  const checkbox = document.querySelector('o-checkbox');
  checkbox.addEventListener('o-change', event => {
    console.log(event.target.checked ? 'checked' : 'not checked');
  });
</script>
```

All custom events are prefixed with `o-` to prevent collisions with standard events and other libraries. Refer to a component's documentation for a complete list of its custom events.

### Connected and Disconnected events

In some cases, you want to know when the component is added to the document's DOM and when it is removed from the document's DOM. For those cases, the events `o-connected` and `o-disconnected` are dispatched so you can listen to them, the `o-connected` event is providing the custom element reference in the `{ detail: { ref } }` property.

```html:preview
<div class="connected-disconnected-example">
  <o-alert class="alert-message" variant="neutral" open>Click the button below</o-alert>
  <o-button class="add-button">Add</o-button>
  <div class="container"></div>
</div>

<script>
  const container = document.querySelector('.connected-disconnected-example .container');
  const alert = document.querySelector('.connected-disconnected-example .alert-message');
  const addButton = document.querySelector('.connected-disconnected-example .add-button');
  let buttonRef = null;

  const showMessage = (message, type) => {
    alert.innerHTML = message || 'Click the button below';
    alert.variant = type || 'neutral';
  };

  const resetAll = () => {
    // Reset alert
    showMessage();

    // Reset addButton
    addButton.style.display = '';
  };

  addButton.addEventListener('click', () => {
    addButton.style.display = 'none';

    const button = Object.assign(document.createElement('o-button'), {
      innerHTML: 'Click me',
      variant: 'success'
    });

    button.addEventListener('o-connected', ({ detail }) => {
      showMessage(`A new button was added to the document's DOM (Tag: '${detail.tagName}')`, 'success');

      buttonRef = detail.ref;

      buttonRef.addEventListener('o-disconnected', () => {
        showMessage("The button was removed from the document's DOM", 'danger');
        buttonRef = null;
        setTimeout(() => resetAll(), 4000);
      });

      buttonRef.addEventListener('click', () => {
        buttonRef.remove();
      });
    });

    container.append(button);
  });
</script>
```

```jsx:react
import { useRef, useState } from 'react';
import { OAlert, OButton } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  const [alertVariant, setAlertVariant] = useState('neutral');
  const [alertMessage, setAlertMessage] = useState('Click the button below');
  const [showAddButton, setShowAddButton] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);

  const showMessage = (message, type) => {
    setAlertMessage(message || 'Click the button below');
    setAlertVariant(type || 'neutral');
  };

  const resetAll = () => {
    // Reset alert
    showMessage();

    // Reset addButton
    setShowAddButton(true);
  };

  const addClickHandler = () => {
    setShowAddButton(false);
    setShowButton(true);
  };

  const buttonConnectedHandler = ({ detail }) => {
    showMessage(`A new button was added to the document's DOM (Tag: '${detail.tagName}')`, 'success', 'success');

    buttonRef.current = detail.ref;

    buttonRef.current.addEventListener('o-disconnected', () => {
      showMessage("The button was removed from the document's DOM", 'danger');
      buttonRef.current = null;
      setTimeout(() => resetAll(), 4000);
    });

    buttonRef.current.addEventListener('click', () => {
      // buttonRef.current.remove();
      setShowButton(false);
    });
  };

  return (
    <>
      <div className="connected-disconnected-example">
        <OAlert variant={alertVariant} open>
          {alertMessage}
        </OAlert>
        {showAddButton && <OButton onClick={addClickHandler}>Add</OButton>}

        {showButton && (
          <OButton variant="success" onOConnected={buttonConnectedHandler}>
            Click me
          </OButton>
        )}
      </div>
    </>
  );
};
```

## Methods

Some components have methods you can call to trigger various behaviors. For example, you can set focus on a O-LIBRARY-NAME-O input using the `focus()` method.

```html
<o-input></o-input>

<script>
  const input = document.querySelector('o-input');
  input.focus();
</script>
```

Refer to a component's documentation for a complete list of its methods and their arguments.

## Slots

Many components use slots to accept content inside of them. The most common slot is the _default_ slot, which includes any content inside the component that doesn't have a `slot` attribute.

For example, a button's default slot is used to populate its label.

```html
<o-button>Click me</o-button>
```

Some components also have _named_ slots. A named slot can be populated by adding a child element with the appropriate `slot` attribute. Notice how the icon below has the `slot="prefix"` attribute? This tells the component to place the icon into its `prefix` slot.

```html
<o-button>
  <o-icon slot="prefix" name="gear"></o-icon>
  Settings
</o-button>
```

The location of a named slot doesn't matter. You can put it anywhere inside the component and the browser will move it to the right place automatically!

Refer to a component's documentation for a complete list of available slots.

## Don't Use Self-closing Tags

Custom elements cannot have self-closing tags. Similar to `<script>` and `<textarea>`, you must always include the full closing tag.

```html
<!-- Don't do this -->
<o-input />

<!-- Always do this -->
<o-input></o-input>
```

## Differences from Native Elements

You might expect similarly named elements to share the same API as native HTML elements, but this is not always the case. O-LIBRARY-NAME-O components **are not** designed to be one-to-one replacements for their HTML counterparts. While they usually share the same API, there may be subtle differences.

For example, `<button>` and `<o-button>` both have a `type` attribute, but the native one defaults to `submit` while the O-LIBRARY-NAME-O one defaults to `button` since this is a better default for most users.

:::tip
**Don't make assumptions about a component's API!** To prevent unexpected behaviors, please take the time to review the documentation and make sure you understand what each attribute, property, method, and event is intended to do.
:::

## Waiting for Components to Load

Web components are registered with JavaScript, so depending on how and when you load O-LIBRARY-NAME-O, you may notice a [Flash of Undefined Custom Elements (FOUCE)](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/) when the page loads. There are a couple ways to prevent this, both of which are described in the linked article.

One option is to use the [`:defined`](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined) CSS pseudo-class to "hide" custom elements that haven't been registered yet. You can scope it to specific tags or you can hide all undefined custom elements as shown below.

```css
:not(:defined) {
  visibility: hidden;
}
```

As soon as a custom element is registered, it will immediately appear with all of its styles, effectively eliminating FOUCE. Note the use of `visibility: hidden` instead of `display: none` to reduce shifting as elements are registered. The drawback to this approach is that custom elements can potentially appear one by one instead of all at the same time.

Another option is to use [`customElements.whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined), which returns a promise that resolves when the specified element gets registered. You'll probably want to use it with [`Promise.allSettled()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) in case an element fails to load for some reason.

A clever way to use this method is to hide the `<body>` with `opacity: 0` and add a class that fades it in as soon as all your custom elements are defined.

```html
<style>
  body {
    opacity: 0;
  }

  body.ready {
    opacity: 1;
    transition: 0.25s opacity;
  }
</style>

<script type="module">
  await Promise.allSettled([
    customElements.whenDefined('o-button'),
    customElements.whenDefined('o-card'),
    customElements.whenDefined('o-rating')
  ]);

  // Button, card, and rating are registered now! Add
  // the `ready` class so the UI fades in.
  document.body.classList.add('ready');
</script>
```

## Component Rendering and Updating

O-LIBRARY-NAME-O components are built with [Lit](https://lit.dev/), a tiny library that makes authoring custom elements easier, more maintainable, and a lot of fun! As a O-LIBRARY-NAME-O user, here is some helpful information about rendering and updating you should probably be aware of.

To optimize performance and reduce re-renders, Lit batches component updates. This means changing multiple attributes or properties at the same time will result in just a single re-render. In most cases, this isn't an issue, but there may be times you'll need to wait for the component to update before continuing.

Consider this example. We're going to change the `checked` property of the checkbox and observe its corresponding `checked` attribute, which happens to reflect.

```js
const checkbox = document.querySelector('o-checkbox');
checkbox.checked = true;

console.log(checkbox.hasAttribute('checked')); // false
```

Most developers will expect this to be `true` instead of `false`, but the component hasn't had a chance to re-render yet so the attribute doesn't exist when `hasAttribute()` is called. Since changes are batched, we need to wait for the update before proceeding. This can be done using the `updateComplete` property, which is available on all Lit-based components.

```js
const checkbox = document.querySelector('o-checkbox');
checkbox.checked = true;

checkbox.updateComplete.then(() => {
  console.log(checkbox.hasAttribute('checked')); // true
});
```

This time we see an empty string, which means the boolean attribute is now present!

:::tip
Avoid using `setTimeout()` or `requestAnimationFrame()` in situations like this. They might work, but it's far more reliable to use `updateComplete` instead.
:::

## Code Completion

### VS Code

O-LIBRARY-NAME-O ships with a file called `vscode.html-custom-data.json` that can be used to describe it's custom elements to Visual Studio Code. This enables code completion for O-LIBRARY-NAME-O components (also known as "code hinting" or "IntelliSense"). To enable it, you need to tell VS Code where the file is.

1. [Install O-LIBRARY-NAME-O locally](/getting-started/installation#local-installation)
2. If it doesn't already exist, create a folder called `.vscode` at the root of your project
3. If it doesn't already exist, create a file inside that folder called `settings.json`
4. Add the following to the file

```js
{
  "html.customData": ["./node_modules/O-PACKAGE-FULL-NAME-O/dist/vscode.html-custom-data.json"]
}
```

If `settings.json` already exists, simply add the above line to the root of the object. Note that you may need to restart VS Code for the changes to take affect.

### Other Editors

Most popular editors support custom code completion with a bit of configuration. Please [submit a feature request](O-REPO-URL-O/issues/new/choose) for your editor of choice. PRs are also welcome!
