'use strict';

class MaterialInput extends HTMLElement {

    constructor() {
        super(); // always call super() first in the ctor. This also calls the extended class' ctor.
    }

    createdCallback() {
        var value = '';
        // set value of material-input
        Object.defineProperty( this, "value", {
            configurable: true,
            enumerable: true,
            get: function(){
                return value;
            },
            set: function(newValue){
                value = !newValue ? '' : newValue;
                this._value(value);
                this.$input.value = value;
            }
        });

        this.createShadowRoot().innerHTML = `
            <style>
                :host{
                    display: block;
                    position: relative;
                    background: transparent;
                    margin: .5em 0;
                }
                .material-input__container{
                    width: inherit;
                    display: block;
                    position: relative;
                }
                .material-input__input{
                    box-sizing: border-box;
                    position: relative;
                    background-color: transparent;
                    font-size: 1em;
                    color: var(--material-input-text-color, black);
                    padding: 1.4em 1em .6em 10px;
                    display: block;
                    width: 100%;
                    border: none;
                    border-bottom: var(--material-input-line-height, 1px) solid var(--material-input-border-color, rgb(206,212,218));
                    box-shadow: none;
                }
                .material-input__container.invalid .material-input__input{
                    border-bottom-color: var(--material-input-invalid-color, rgb(224,49,49));
                }
                .material-input__container.valid .material-input__input{
                    border-bottom-color: var(--material-input-valid-color, rgb(47,158,68));
                }
                .material-input__input:focus{
                    outline: none;
                }
                /* placeholder and placeholder fade on focus */
                .material-input__input::-webkit-input-placeholder {
                    color: var(--material-input-placeholder-color, rgb(134,142,150));
                    opacity: 1;
                }
                .material-input__input:focus::-webkit-input-placeholder {
                    opacity: .5;
                    transition: opacity .35s ease;
                }
                .material-input__input::-moz-placeholder {
                    color: var(--material-input-placeholder-color, rgb(134,142,150));
                    opacity: 1;
                }
                .material-input__input:focus::-moz-placeholder {
                    opacity: .5;
                    transition: opacity .35s ease;
                }
                .material-input__input:-ms-input-placeholder {
                    color: var(--material-input-placeholder-color, rgb(134,142,150));
                    opacity: 1;
                }
                .material-input__input:-ms-input-placeholder {
                    opacity: .5;
                    transition: opacity .35s ease;
                }
                /* Labels */
                .material-input__label{
                    color: rgb(134,142,150);
                    font-size: inherit;
                    pointer-events: none;
                    position: absolute;
                    left: 10px;
                    bottom: 1em;
                    transition: 0.2s ease all;
                }
                .material-input__container.no-animation .material-input__label,
                .material-input__container.label-always-floats .material-input__label{
                    transition: 0s ease all;
                }
                .material-input__container.is-empty .material-input__input[placeholder] ~ .material-input__label{
                    color: var(--material-input-text-color, black);
                }
                /* active state */
                .material-input__input:focus ~ .material-input__label,
                .material-input__container:not(.is-empty) .material-input__label,
                .material-input__container.label-always-floats .material-input__label{
                    bottom: 3em;
                    font-size: .75em;
                }
                .material-input__input:focus ~ .material-input__label,
                .material-input__container.is-empty .material-input__input[placeholder]:focus ~ .material-input__label{
                    color: var(--material-input-highlight-color, rgb(54,79,199));
                }
                /* errror state */
                .material-input__container.invalid.label-always-floats .material-input__label,
                .material-input__container.invalid .material-input__input:focus ~ .material-input__label,
                .material-input__container.is-empty.invalid .material-input__input[placeholder]:focus ~ .material-input__label,
                .material-input__container.is-empty.invalid .material-input__input[placeholder] ~ .material-input__label{
                    color: var(--material-input-invalid-color, rgb(224,49,49));
                }
                /* valid state */
                .material-input__container.valid.label-always-floats .material-input__label,
                .material-input__container.valid .material-input__input:focus ~ .material-input__label,
                .material-input__container.is-empty.valid .material-input__input[placeholder]:focus ~ .material-input__label,
                .material-input__container.is-empty.valid .material-input__input[placeholder] ~ .material-input__label{
                    color: var(--material-input-valid-color, rgb(47,158,68));
                }
                /* bar */
                .material-input__bar{
                    position:relative;
                    display:block;
                    width:100%;
                }
                .material-input__bar::before, .material-input__bar::after {
                    content:'';
                    height: var(--material-input-highlight-line-height, 2px);
                    width:0;
                    bottom:0;
                    position:absolute;
                    background: var(--material-input-highlight-color, rgb(54,79,199));
                    transition:0.2s ease all;
                }
                .material-input__container.invalid .material-input__bar::before,
                .material-input__container.invalid .material-input__bar::after{
                    background: var(--material-input-invalid-color, rgb(224,49,49));
                }
                .material-input__container.valid .material-input__bar::before,
                .material-input__container.valid .material-input__bar::after{
                    background: var(--material-input-valid-color, rgb(47,158,68));
                }
                .material-input__bar::before {
                    left:50%;
                }
                .material-input__bar::after {
                    right:50%;
                }
                .material-input__input:focus ~ .material-input__bar:before, .material-input__input:focus ~ .material-input__bar:after{
                    width:50%;
                }
            </style>
            <div class="material-input__container no-animation${this.value == '' ? ' is-empty' : ''}">
                <content></content>
                <input class="material-input__input" tabindex="-1" />
                <label class="material-input__label"></label>
                <div class="material-input__bar"></div>
                <div class="material-input__message"></div>
            </div>
        `;
        this.attributesExceptions = [
            // 'name',
            'id',
            'style',
            'label',
            'tabindex',
            'placeholder',
            'autofocus',
            'autocomplete',
            'autovalidate'
        ];
        // set tab index to make element focussable
        this.setAttribute('tabindex',0);
        // shim shadowDOM styling
        if(WebComponents !== undefined && WebComponents.flags.shadow === true){
            WebComponents.ShadowCSS.shimStyling( this.shadowRoot, 'material-input' )
        }
        // add hidden input
        this.insertAdjacentHTML('afterend','<input tabindex="-1" class="material-input__hidden-input" style="pointer-events: none; margin:0; border: 0; height: 0; opacity: 0; position: absolute; top: '+(this.offsetTop + this.offsetHeight)+'px; left: '+this.offsetLeft+'px;" name="'+this.getAttribute('name')+'"/>');
        this.$hiddenInput = document.querySelector('.material-input__hidden-input[name='+this.getAttribute('name')+']');
        // elements
        this.$container = this.shadowRoot.querySelector('.material-input__container');
        this.$input = this.$container.querySelector('.material-input__input');
        this.$label = this.$container.querySelector('.material-input__label');
        this.$message = this.$container.querySelector('.material-input__message');
        this.$form = this._getParentForm(this);
        // add events
        this._addEvents();
        // transfer attribtues to input & hiddenInput
        this._transferAttributes();
        // set value, label, etc.
        this._setValue(this.getAttribute('value'));
        this.$input.value = this.value;
        this._setLabel(this.getAttribute('label'));
        this._setPlaceholder(this.getAttribute('placeholder'));

        // remove no-animation loading class
        setTimeout(function(){
            this.$container.classList.remove('no-animation');
        }.bind(this),100);
    }
    /**
     * when an attribute is changed
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        // define callbacks
        var callbacks = {
            'value': this._setValue,
            'label': this._setLabel,
            'placeholder': this._setPlaceholder,
            'name': this._setName,
        };
        // call callback if it exists
        if(callbacks.hasOwnProperty(attrName)) {
            callbacks[attrName].call(this, newVal, oldVal);
        }
        else{
            // if other attributes are updated, transfer updates to hidden input field
            this._transferAttribute(attrName, newVal, this.attributesExceptions);
        }
    }
    /**
     * set the custom validity of the input
     */
    setCustomValidity(msg){
        this.$input.setCustomValidity(msg);
        this.$hiddenInput.setCustomValidity(msg)
    }
    /**
     * add events for all items
     */
    _addEvents(){
        // on focuse pass to input
        this.addEventListener('focus', function(){
            this.$input.focus();
        });
        // set validation status when hiddenInput is invalid
        this.$hiddenInput.addEventListener('invalid', function(){
            this._setValid(false);
        }.bind(this));
        // pass on value when user enters content
        this.$input.addEventListener('keydown', function(e){
            if(e.keyCode === 13){
                if(this.$form.checkValidity()){
                    this.$form.submit();
                }else if(this.$form.querySelector('[type="submit"]') !== null){
                    // needed to trigger validation
                    this.$form.querySelector('[type="submit"]').click();
                }
                return;
            }
            this._value(this.$input.value);
        }.bind(this));
        // pass in value and validate when user exits input field
        this.$input.addEventListener('blur', function(){
            this._value(this.$input.value);
            // check if is valid
            this._checkValidity();
        }.bind(this));
        // if autovalidate is set to true, validate on key event
        if(this.hasAttribute('autovalidate') && String(this.getAttribute('autovalidate')) !== 'false'){
            this.$input.addEventListener('keydown', function(){
                // check if is valid
                this._checkValidity();
            }.bind(this));
        } else if(this.$input.validity.valid === false) {
            this.$input.addEventListener('keydown', function(){
                // check if is valid
                if(this.$input.value !== '' && this.$input.validity.valid === true){
                    this._setValid(true);
                }
            }.bind(this));
        }
    }
    /**
     * get parent form
     */
    _getParentForm(current){
        current = current.parentElement;
        // return form
        if( current.constructor === HTMLFormElement ) return current;
        // return false on body
        if(current.constructor === HTMLBodyElement) return false;
        // dig one level deeper
        return this._getParentForm(current);
    }
    /**
     * check validity
     */
    _checkValidity(){
        if(this.$input.value !== '' && (this.$input.validity.valid === true || this.$input.validity.valid === false) ){
            this._setValid(this.$input.validity.valid);
        }else{
            this._setValid(undefined);
        }
    }
    /**
     * set value
     */
    _setValue(newValue){
        this.value = newValue;
    }
    /**
     * set name
     */
    _setName(newName){
        this.$hiddenInput.setAttribute('name', newName);
    }
    /**
     * set field to valid or invalid
     */
    _setValid(validity = undefined){
        // valid is not set
        if(validity === undefined){
            this.valid = undefined;
            this.$container.classList.remove('valid');
            this.$container.classList.remove('invalid');
        }
        // valid is true
        if(validity === true){
            this.valid = true;
            this.$container.classList.add('valid');
            this.$container.classList.remove('invalid');
        }
        // valid is false
        if(validity === false) {
            this.valid = false;
            this.$container.classList.add('invalid');
            this.$container.classList.remove('valid');
        }
    }
    /**
     * transfer attributes to input
     */
    _transferAttributes(){
        for(var key of Object.keys(this.attributes)){
            if (this.attributes.hasOwnProperty(key)) {
                this._transferAttribute(this.attributes[key].name, this.attributes[key].value, this.attributesExceptions);
            }
        }
    }
    /**
     * transfer attribute to input
     */
    _transferAttribute(attrName, val, attributesExceptions){
        if(attributesExceptions.indexOf(attrName) === -1){
            this.$hiddenInput.setAttribute(attrName,val);
            this.$input.setAttribute(attrName,val);
        }
    }
    /**
     * update value and toggle is-empty class
     */
    _value(val){
        // set value of hidden input for form submission
        this.$hiddenInput.value = val;
        this.setAttribute('value',val);
        // set state depending on value
        this._toggle(this.$container, 'is-empty', val === '');
    }
    /**
     * add label to material-input
     */
    _setLabel(label){
        if(label !== undefined && label !== null){
            return this.$label.innerHTML = label;
        }
        this.$label.innerHTML = '';
    }
    /**
     * set placeholder and add label-always-floats class
     */
    _setPlaceholder(placeholder){
        if(placeholder !== null && placeholder !== undefined){
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
    _toggle(el, cls, condition){
        if(condition === true){
            el.classList.add(cls);
        }else{
            el.classList.remove(cls);
        }
    }
}

document.registerElement('material-input', MaterialInput);
