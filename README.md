# Material-input
An easy drop-in material design vanilla custom input element. HTML form ready, no framework dependencies, small footprint.

[![Spec Custom Elements V0](https://img.shields.io/badge/spec-custom%20elements%20v0-979797.svg?style=flat-square)](https://www.w3.org/TR/custom-elements/) 😞
[![Build Status](https://img.shields.io/travis/nuclei/material-input/master.svg?style=flat-square)](https://travis-ci.org/nuclei/material-input) [![npm](https://img.shields.io/npm/v/material-input.svg?style=flat-square)](https://www.npmjs.com/package/material-input) [![npm](https://img.shields.io/npm/dt/material-input.svg?style=flat-square)](https://www.npmjs.com/package/material-input) [![npm](https://img.shields.io/npm/l/material-input.svg?style=flat-square)](https://github.com/nuclei/material-input/blob/master/LICENSE)

## Demo
[![Material Inputs](https://cloud.githubusercontent.com/assets/813754/19432757/350079e4-945e-11e6-9593-e2174285c435.png)](https://nuclei.github.io/material-input/index.html)


<!---
```
<custom-element-demo>
  <template>
    <script src="docs/webcomponentsjs/webcomponents.js"></script>
    <script src="src/material-input.js"></script>
    <material-input name="form" label="Email address" style="font-family: sans-serif;"></material-input>
  </template>
</custom-element-demo>
```
-->

## Installation
```bash
npm install --save material-input
```

You need the [webcomponents-lite polyfill](https://github.com/webcomponents/webcomponentsjs).

Load the `polyfill` and the `material-input.js` in your html page or however you load you javascript dependencies:
```html
<script src="webcomponents-lite.js"></script>
<script src="./node_modules/material-input/dist/material-input.js"></script>
```

## Usage
Just drop the `<material-input>` element into you html `<form>` element and you are ready to go. A visually hidden `<input>` field will be created which syncs its values with the `<material-input>` to allow for normal forms to pick up the value.


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

### Value
Like a normal input field, you can set the value using the attribute `value` in html or via javascript by either setting the attribute or by directly setting the `value` property.

```html
<!-- html -->
<material-input name="animal" value="cat"></material-input>
```

```javascript
// javascript
document.querySelector('material-input.animal').value = 'cat';

document.querySelector('material-input.animal').setAttribute('value','cat');
```

### Validation
Validation works just like with any default `<input>` element. Add a `required` or set the `type` to `email` and you will get the browsers validation notifications. Additionally the `material-input` will have a `valid` or `invalid` style.

Additionally it is possible to explicitly set a field to be `invalid` by using the default `setCustomValidity` method on the `material-input`. You can read more about the [setCustomValidity feature on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Controlling_the_text_of_constraints_violation).

```javascript
document.querySelector('material-input.customValidatedItem').setCustomValidity('This is not valid.');
```

#### Backend validation
If you validate your forms via your backend (which you should!), you cann add an `invalid` or `valid` attribute to the `material-input`. This will set the field in the defined state.

#### Error messages
You can set the `message` attribute, which will add an error message below the field. This is always an error message, no matter what state the field is in.

#### Autovalidate
When adding the `autovalidate` attribute to the `material-input`, the field will be validated on every `keydown` event. However, this means a field with no validation rules will always be valid and receive the `valid` immediately.

## Custom styling
Apart from basic styling on the `material-input` like `margins` or the `font-size` you can use the following `css properties` to for custom styling.

```css
/* select your specific input or all */
material-input.some-class{
    /* the text color of the input */
    --material-input-text-color: black;
    /* the text color of the placeholder or the floating label on an empty field */
    --material-input-placeholder-color: grey;
    /* the color of the border and label when the field is focused */
    --material-input-highlight-color: indigo;
    /* the color of the border and label when the field is in an invalid state */
    --material-input-invalid-color: red;
    /* the color of the border and label when the field is in a valid state */
    --material-input-valid-color: green;
    /* the default color of the bottom border */
    --material-input-border-color: orange;
    /* the height of the bottom border when the field is not focused */
    --material-input-line-height: 1px;
    /* the height of the bottom border when the field is focused */
    --material-input-highlight-line-height: 3px;
}
```
