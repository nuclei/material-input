# Material-input
An easy drop-in material design vanilla custom input element. No framework dependencies, small footprint.

[![npm](https://img.shields.io/npm/v/material-input.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/material-input) [![npm](https://img.shields.io/npm/dt/material-input.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/material-input) [![npm](https://img.shields.io/npm/l/material-input.svg?maxAge=2592000?style=flat-square)](https://github.com/nuclei/material-input/blob/master/LICENSE)

## Demo

https://nuclei.github.io/material-input/index.html

## Installation
Not released yet. Feel free to test it an contribute.
```
# npm install --save material-input
```

You need the [webcomponents-lite polyfill](https://github.com/webcomponents/webcomponentsjs).

Load the `polyfill` and the `material-input.js` in your html page or however you load you javascript dependencies:
```html
<script src="webcomponents-lite.js"></script>
<script src="./node_modules/material-input/dist/material-input.js"></script>
```

## Usage
Just drop the `<material-input>` element into you html and add your text.

```html
<material-input name="username"></material-input>
```

### Labels
By default material inputs use floating labels that can be defined via the `label` attribute. This means that the label looks like a placeholder, but when the field is focuses or filled it is moved above the users text.

```html
<material-input name="username" label="Choose your username"></material-input>
```

### Placeholders
You can use normal input placeholders instead of, or in combination with labels. The label will always be above the input field, if you choose to use both.

```html
<material-input name="username" label="username" placeholder="Choose your username"></material-input>
```

## Custom styling
Until browser support mixins, there is only basic styling. You can change the size of the text of all one one `material-input` which will increase its general size.

Additionally you can set the font color for `material-input` which will change the color of the line below and label when active.

### Limitation
As of now only Chrome supports the `:host` element properly, even with the default polyfill. If you want to change the margin on the `material-input` you will need to wrap it in another element.
