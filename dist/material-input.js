'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialInput = function (_HTMLElement) {
    _inherits(MaterialInput, _HTMLElement);

    function MaterialInput() {
        _classCallCheck(this, MaterialInput);

        return _possibleConstructorReturn(this, (MaterialInput.__proto__ || Object.getPrototypeOf(MaterialInput)).call(this)); // always call super() first in the ctor. This also calls the extended class' ctor.
    }

    _createClass(MaterialInput, [{
        key: 'createdCallback',
        value: function createdCallback() {
            this.createShadowRoot().innerHTML = '\n            <style>\n                :host{\n                    color: rgb(54,79,199);\n                    display: block;\n                    position: relative;\n                }\n                .material-input__container{\n                    width: inherit;\n                    display: block;\n                    position: relative;\n                    margin: .5em 0;\n                }\n                .material-input__input{\n                    box-sizing: border-box;\n                    position: relative;\n                    background-color: transparent;\n                    font-size: 1em;\n                    color: black;\n                    padding: 1em 1em 1em 10px;\n                    display: block;\n                    width: 100%;\n                    border: none;\n                    border-bottom: .1rem solid rgb(206,212,218);\n                }\n                .material-input__input:focus{\n                    outline: none;\n                    color: black;\n                }\n                /* placeholder and placeholder fade on focus */\n                .material-input__input::-webkit-input-placeholder {\n                    color: rgb(134,142,150);\n                    opacity: 1;\n                }\n                .material-input__input:focus::-webkit-input-placeholder {\n                    opacity: .5;\n                    transition: opacity .35s ease;\n                }\n                .material-input__input::-moz-placeholder {\n                    color: rgb(134,142,150);\n                    opacity: 1;\n                }\n                .material-input__input:focus::-moz-placeholder {\n                    opacity: .5;\n                    transition: opacity .35s ease;\n                }\n                .material-input__input:-ms-input-placeholder {\n                    color: rgb(134,142,150);\n                    opacity: 1;\n                }\n                .material-input__input:-ms-input-placeholder {\n                    opacity: .5;\n                    transition: opacity .35s ease;\n                }\n                /* Labels */\n                .material-input__label{\n                    color: rgb(134,142,150);\n                    font-size: inherit;\n                    pointer-events: none;\n                    position: absolute;\n                    left: 10px;\n                    bottom: 1em;\n                    transition: 0.2s ease all;\n                }\n                .material-input__container.is-empty .material-input__input[placeholder] ~ .material-input__label{\n                    color: black;\n                }\n                /* active state */\n                .material-input__input:focus ~ .material-input__label,\n                .material-input__container:not(.is-empty) .material-input__label,\n                .material-input__container.label-always-floats .material-input__label{\n                    bottom: 3em;\n                    font-size: .75em;\n                }\n                .material-input__input:focus ~ .material-input__label,\n                .material-input__container.is-empty .material-input__input[placeholder]:focus ~ .material-input__label{\n                    color: inherit;\n                }\n                .material-input__bar{\n                    position:relative;\n                    display:block;\n                    width:100%;\n                }\n                .material-input__bar::before, .material-input__bar::after {\n                    content:\'\';\n                    height:2px;\n                    width:0;\n                    bottom:0;\n                    position:absolute;\n                    background: currentColor;\n                    transition:0.2s ease all;\n                }\n                .material-input__bar::before {\n                    left:50%;\n                }\n                .material-input__bar::after {\n                    right:50%;\n                }\n                .material-input__input:focus ~ .material-input__bar:before, .material-input__input:focus ~ .material-input__bar:after{\n                    width:50%;\n                }\n            </style>\n            <div class="material-input__container">\n                <input class="material-input__input" tabindex="-1" />\n                <label class="material-input__label"></label>\n                <div class="material-input__bar"></div>\n                <div class="material-input__message"></div>\n            </div>\n        ';
            // initialize attributes
            this.setAttribute('tabindex', 0);
            this.type = this.getAttribute('type') || 'text';
            this.value = this.getAttribute('value') || null;
            this.name = this.getAttribute('name') || 'material-input';
            this.label = this.getAttribute('label') || null;
            this.placeholder = this.getAttribute('placeholder') || null;
            this.invalid = this.hasAttribute('invalid') || false;
            this.valid = this.hasAttribute('valid') || false;
            // add input field for form submisson
            this.insertAdjacentHTML('afterend', '<input tabindex="-1" type="hidden" name="' + this.name + '"/>');
            // elements
            this.$container = this.shadowRoot.querySelector('.material-input__container');
            this.$input = this.$container.querySelector('.material-input__input');
            this.$label = this.$container.querySelector('.material-input__label');
            this.$message = this.$container.querySelector('.material-input__message');
            this.$hiddenInput = document.querySelector('input[name=' + this.name + ']');

            this.$input.setAttribute('type', this.type);

            this.$input.addEventListener('keydown', function () {
                this._value(this.$input.value);
            }.bind(this));

            this.$input.addEventListener('blur', function () {
                this._value(this.$input.value);
            }.bind(this));

            this.addEventListener('focus', function () {
                this.$input.focus();
            });

            if (this.value) {
                this.$input.value = this.value;
            }

            this._value(this.value);
            this._label(this.label);
            this._placeholder(this.placeholder);

            if (this.required) {
                this.$hiddenInput.setAttribute('required', '');
            }
        }
    }, {
        key: '_value',
        value: function _value(value) {
            // set value of material-input
            this.value = !value ? '' : value;
            // set value of hidden input for form submission
            this.$hiddenInput.value = this.value;
            // set state depending on value
            this._toggle(this.$container, 'is-empty', this.value === '');
        }
        /**
         * add label to material-input
         */

    }, {
        key: '_label',
        value: function _label(label) {
            this.$label.innerHTML = label;
            this._toggle(this.$container, 'label-always-floats', this.placeholder !== null);
        }
    }, {
        key: '_placeholder',
        value: function _placeholder(placeholder) {
            if (placeholder !== null) {
                this.$input.placeholder = placeholder;
            } else {
                this.$input.removeAttribute('placeholder');
            }
        }

        /**
         * since classList.toggle with a second param is not supported in IE11 and below
         */

    }, {
        key: '_toggle',
        value: function _toggle(el, cls, condition) {
            if (condition === true) {
                el.classList.add(cls);
            } else {
                el.classList.remove(cls);
            }
        }
    }]);

    return MaterialInput;
}(HTMLElement);

document.registerElement('material-input', MaterialInput);
//# sourceMappingURL=material-input.js.map
