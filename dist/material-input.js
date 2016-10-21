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
            var value = '';
            // set value of material-input
            Object.defineProperty(this, "value", {
                configurable: true,
                enumerable: true,
                get: function get() {
                    return value;
                },
                set: function set(newValue) {
                    value = !newValue ? '' : newValue;
                    this._value(value);
                    if (this.$input.value !== value) {
                        this.$input.value = value;
                    }
                }
            });

            this.createShadowRoot().innerHTML = '\n            <style>\n                :host{\n                    display: block;\n                    position: relative;\n                    background: transparent;\n                    margin: .5em 0;\n                }\n                .material-input__container{\n                    width: inherit;\n                    display: block;\n                    position: relative;\n                }\n                .material-input__input{\n                    box-sizing: border-box;\n                    position: relative;\n                    background-color: transparent;\n                    font-size: 1em;\n                    color: var(--material-input-text-color, black);\n                    padding: 1.4em 1em .6em 10px;\n                    display: block;\n                    width: 100%;\n                    border: none;\n                    border-bottom: var(--material-input-line-height, 1px) solid var(--material-input-border-color, rgb(206,212,218));\n                    box-shadow: none;\n                }\n                .material-input__container.invalid .material-input__input{\n                    border-bottom-color: var(--material-input-invalid-color, rgb(224,49,49));\n                }\n                .material-input__container.valid .material-input__input{\n                    border-bottom-color: var(--material-input-valid-color, rgb(47,158,68));\n                }\n                .material-input__input:focus{\n                    outline: none;\n                }\n                /* placeholder and placeholder fade on focus */\n                .material-input__input::-webkit-input-placeholder {\n                    color: var(--material-input-placeholder-color, rgb(134,142,150));\n                    opacity: 1;\n                }\n                .material-input__input:focus::-webkit-input-placeholder {\n                    opacity: .5;\n                    transition: opacity .35s ease;\n                }\n                .material-input__input::-moz-placeholder {\n                    color: var(--material-input-placeholder-color, rgb(134,142,150));\n                    opacity: 1;\n                }\n                .material-input__input:focus::-moz-placeholder {\n                    opacity: .5;\n                    transition: opacity .35s ease;\n                }\n                .material-input__input:-ms-input-placeholder {\n                    color: var(--material-input-placeholder-color, rgb(134,142,150));\n                    opacity: 1;\n                }\n                .material-input__input:-ms-input-placeholder {\n                    opacity: .5;\n                    transition: opacity .35s ease;\n                }\n                /* Labels */\n                .material-input__label{\n                    color: var(--material-input-placeholder-color, rgb(134,142,150));\n                    font-size: inherit;\n                    pointer-events: none;\n                    position: absolute;\n                    left: 10px;\n                    top: 1.42em;\n                    transition: 0.2s ease all;\n                }\n                .material-input__container.no-animation .material-input__label,\n                .material-input__container.label-always-floats .material-input__label{\n                    transition: 0s ease all;\n                }\n                .material-input__container.is-empty .material-input__input[placeholder] ~ .material-input__label{\n                    color: var(--material-input-text-color, black);\n                }\n                /* active state */\n                .material-input__input:focus ~ .material-input__label,\n                .material-input__container:not(.is-empty) .material-input__label,\n                .material-input__container.label-always-floats .material-input__label{\n                    top: .6em;\n                    font-size: .75em;\n                }\n                .material-input__input:focus ~ .material-input__label,\n                .material-input__container.is-empty .material-input__input[placeholder]:focus ~ .material-input__label{\n                    color: var(--material-input-highlight-color, rgb(54,79,199));\n                }\n                /* errror state */\n                .material-input__container.invalid.label-always-floats .material-input__label,\n                .material-input__container.invalid .material-input__input:focus ~ .material-input__label,\n                .material-input__container.is-empty.invalid .material-input__input[placeholder]:focus ~ .material-input__label,\n                .material-input__container.is-empty.invalid .material-input__input[placeholder] ~ .material-input__label{\n                    color: var(--material-input-invalid-color, rgb(224,49,49));\n                }\n                /* valid state */\n                .material-input__container.valid.label-always-floats .material-input__label,\n                .material-input__container.valid .material-input__input:focus ~ .material-input__label,\n                .material-input__container.is-empty.valid .material-input__input[placeholder]:focus ~ .material-input__label,\n                .material-input__container.is-empty.valid .material-input__input[placeholder] ~ .material-input__label{\n                    color: var(--material-input-valid-color, rgb(47,158,68));\n                }\n                /* bar */\n                .material-input__bar{\n                    position:relative;\n                    display:block;\n                    width:100%;\n                }\n                .material-input__bar::before, .material-input__bar::after {\n                    content:\'\';\n                    height: var(--material-input-highlight-line-height, 2px);\n                    width:0;\n                    bottom:0;\n                    position:absolute;\n                    background: var(--material-input-highlight-color, rgb(54,79,199));\n                    transition:0.2s ease all;\n                }\n                .material-input__container.invalid .material-input__bar::before,\n                .material-input__container.invalid .material-input__bar::after{\n                    background: var(--material-input-invalid-color, rgb(224,49,49));\n                }\n                .material-input__container.valid .material-input__bar::before,\n                .material-input__container.valid .material-input__bar::after{\n                    background: var(--material-input-valid-color, rgb(47,158,68));\n                }\n                .material-input__bar::before {\n                    left:50%;\n                }\n                .material-input__bar::after {\n                    right:50%;\n                }\n                .material-input__input:focus ~ .material-input__bar:before, .material-input__input:focus ~ .material-input__bar:after{\n                    width:50%;\n                }\n                .material-input__message{\n                    font-size: 70%;\n                    color: var(--material-input-invalid-color, rgb(224,49,49));\n                    padding: .3rem 0 .5rem 10px;\n                }\n                .material-input__message:empty{\n                    display: none;\n                }\n            </style>\n            <div class="material-input__container no-animation' + (this.value == '' ? ' is-empty' : '') + '">\n                <content></content>\n                <input class="material-input__input" tabindex="-1" />\n                <label class="material-input__label"></label>\n                <div class="material-input__bar"></div>\n                <div class="material-input__message"></div>\n            </div>\n        ';
            this.attributesExceptions = ['name', 'id', 'style', 'label', 'tabindex', 'placeholder', 'autofocus', 'autocomplete', 'autovalidate'];
            // set tab index to make element focussable
            this.setAttribute('tabindex', 0);
            // shim shadowDOM styling
            if (WebComponents !== undefined && WebComponents.flags.shadow === true) {
                WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'material-input');
            }
            // add hidden input
            this.insertAdjacentHTML('afterend', '<input tabindex="-1" class="material-input__hidden-input" style="pointer-events: none; margin:0; border: 0; height: 0; opacity: 0; position: absolute; top: ' + (this.offsetTop + this.offsetHeight) + 'px; left: ' + this.offsetLeft + 'px;" name="' + this.getAttribute('name') + '"/>');
            this.$hiddenInput = document.querySelector('.material-input__hidden-input[name=' + this.getAttribute('name') + ']');
            // elements
            this.$container = this.shadowRoot.querySelector('.material-input__container');
            this.$input = this.$container.querySelector('.material-input__input');
            this.$label = this.$container.querySelector('.material-input__label');
            this.$message = this.$container.querySelector('.material-input__message');
            this.$form = this._getParentForm(this);
            //
            this.validity = this.hasAttribute('valid') ? true : this.hasAttribute('invalid') ? false : undefined;
            // add events
            this._addEvents();
            // transfer attribtues to input & hiddenInput
            this._transferAttributes();
            // set value, label, etc.
            this._setValue(this.getAttribute('value'));
            this.$input.value = this.value;
            this._setLabel(this.getAttribute('label'));
            this._setPlaceholder(this.getAttribute('placeholder'));
            this._setValid(this.validity);
            this._setMessage(this.getAttribute('message'));
            // remove no-animation loading class
            setTimeout(function () {
                this.$container.classList.remove('no-animation');
            }.bind(this), 100);
        }
        /**
         * when an attribute is changed
         */

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attrName, oldVal, newVal) {
            // define callbacks
            var callbacks = {
                'value': this._setValue,
                'label': this._setLabel,
                'placeholder': this._setPlaceholder,
                'name': this._setName,
                'message': this._setMessage
            };
            // call callback if it exists
            if (callbacks.hasOwnProperty(attrName)) {
                callbacks[attrName].call(this, newVal, oldVal);
            } else {
                // if other attributes are updated, transfer updates to hidden input field
                this._transferAttribute(attrName, newVal, this.attributesExceptions);
            }
        }
        /**
         * set the custom validity of the input
         */

    }, {
        key: 'setCustomValidity',
        value: function setCustomValidity(msg) {
            this.$input.setCustomValidity(msg);
            this.$hiddenInput.setCustomValidity(msg);
        }
        /**
         * add events for all items
         */

    }, {
        key: '_addEvents',
        value: function _addEvents() {
            // on focuse pass to input
            this.addEventListener('focus', function () {
                this.$input.focus();
            });
            // set validation status when hiddenInput is invalid
            this.$hiddenInput.addEventListener('invalid', function () {
                this._setValid(false);
            }.bind(this));
            // submit on enters
            this.$input.addEventListener('keydown', function (e) {
                if (e.keyCode === 13) {
                    if (this.$form.checkValidity()) {
                        this.$form.submit();
                    } else if (this.$form.querySelector('[type="submit"]') !== null) {
                        // needed to trigger validation
                        this.$form.querySelector('[type="submit"]').click();
                    }
                    return;
                }
            }.bind(this));
            // pass on value when user enters content
            this.$input.addEventListener('input', function (e) {
                this._setValue(this.$input.value);
            }.bind(this));
            // pass in value and validate when user exits input field
            this.$input.addEventListener('blur', function () {
                this._setValue(this.$input.value);
                if (this.hasAttribute('autovalidate') && String(this.getAttribute('autovalidate')) !== 'false') {
                    // check if is valid
                    this._checkValidity();
                }
            }.bind(this));
            // if autovalidate is set to true, validate on key event
            if (this.hasAttribute('autovalidate') && String(this.getAttribute('autovalidate')) !== 'false') {
                this.$input.addEventListener('input', function () {
                    // check if is valid
                    this._checkValidity();
                }.bind(this));
            } else {
                this.$input.addEventListener('input', function () {
                    // check if is valid
                    if (this.$container.classList.contains('invalid') && this.$input.value !== '' && this.$input.validity.valid === true) {
                        this._setValid(true);
                    }
                }.bind(this));
            }
        }
        /**
         * get parent form
         */

    }, {
        key: '_getParentForm',
        value: function _getParentForm(current) {
            current = current.parentElement;
            // return form
            if (current.constructor === HTMLFormElement) return current;
            // return false on body
            if (current.constructor === HTMLBodyElement) return false;
            // dig one level deeper
            return this._getParentForm(current);
        }
        /**
         * check validity
         */

    }, {
        key: '_checkValidity',
        value: function _checkValidity() {
            if (this.$input.value !== '' && (this.$input.validity.valid === true || this.$input.validity.valid === false)) {
                this._setValid(this.$input.validity.valid);
            } else {
                this._setValid(undefined);
            }
        }
        /**
         * set value
         */

    }, {
        key: '_setValue',
        value: function _setValue(newValue) {
            this.value = newValue;
        }
        /**
         * set message
         */

    }, {
        key: '_setMessage',
        value: function _setMessage(msg) {
            this.$message.innerHTML = msg;
        }
        /**
         * set name
         */

    }, {
        key: '_setName',
        value: function _setName(newName) {
            this.$hiddenInput.setAttribute('name', newName);
        }
        /**
         * set field to valid or invalid
         */

    }, {
        key: '_setValid',
        value: function _setValid() {
            var validity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            // valid is not set
            if (validity === undefined) {
                this.valid = undefined;
                this.$container.classList.remove('valid');
                this.$container.classList.remove('invalid');
            }
            // valid is true
            if (validity === true) {
                this.valid = true;
                this.$container.classList.add('valid');
                this.$container.classList.remove('invalid');
            }
            // valid is false
            if (validity === false) {
                this.valid = false;
                this.$container.classList.add('invalid');
                this.$container.classList.remove('valid');
            }
        }
        /**
         * transfer attributes to input
         */

    }, {
        key: '_transferAttributes',
        value: function _transferAttributes() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(this.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    if (this.attributes.hasOwnProperty(key)) {
                        this._transferAttribute(this.attributes[key].name, this.attributes[key].value, this.attributesExceptions);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        /**
         * transfer attribute to input
         */

    }, {
        key: '_transferAttribute',
        value: function _transferAttribute(attrName, val, attributesExceptions) {
            if (attributesExceptions.indexOf(attrName) === -1) {
                this.$hiddenInput.setAttribute(attrName, val);
                this.$input.setAttribute(attrName, val);
            }
        }
        /**
         * update value and toggle is-empty class
         */

    }, {
        key: '_value',
        value: function _value(val) {
            // set value of hidden input for form submission
            this.$hiddenInput.value = val;
            this.setAttribute('value', val);
            // set state depending on value
            this._toggle(this.$container, 'is-empty', val === '');
        }
        /**
         * add label to material-input
         */

    }, {
        key: '_setLabel',
        value: function _setLabel(label) {
            if (label !== undefined && label !== null) {
                return this.$label.innerHTML = label;
            }
            this.$label.innerHTML = '';
        }
        /**
         * set placeholder and add label-always-floats class
         */

    }, {
        key: '_setPlaceholder',
        value: function _setPlaceholder(placeholder) {
            if (placeholder !== null && placeholder !== undefined) {
                this.$input.setAttribute('placeholder', placeholder);
                this.$container.classList.add('label-always-floats');
                return;
            }
            this.$input.removeAttribute('placeholder');
            this.$container.classList.remove('label-always-floats');
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
