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
Validation works just like with any default `<input>` element. Add a `required` or set the `type` to `email` and you will get the browsers validation notifications.

Additionally it is possible to explicitly set a field to be `invalid` by using the default `setCustomValidity` method on the `material-input`. You can read more about the [setCustomValidity feature on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Controlling_the_text_of_constraints_violation).

```javascript
document.querySelector('material-input.customValidatedItem').setCustomValidity('This is not valid.');
```

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
