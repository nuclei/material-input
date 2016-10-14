'use strict';

class MaterialInput extends HTMLElement {

    constructor() {
        super(); // always call super() first in the ctor. This also calls the extended class' ctor.
    }

    createdCallback() {
        this.createShadowRoot().innerHTML = `
            <style>
                :host{
                    color: rgb(54,79,199);
                    display: block;
                    position: relative;
                }
                .material-input__container{
                    width: inherit;
                    display: block;
                    position: relative;
                    margin: .5em 0;
                }
                .material-input__input{
                    box-sizing: border-box;
                    position: relative;
                    background-color: transparent;
                    font-size: 1em;
                    color: black;
                    padding: 1em 1em 1em 10px;
                    display: block;
                    width: 100%;
                    border: none;
                    border-bottom: .1rem solid rgb(206,212,218);
                }
                .material-input__input:focus{
                    outline: none;
                    color: black;
                }
                /* placeholder and placeholder fade on focus */
                .material-input__input::-webkit-input-placeholder {
                    color: rgb(134,142,150);
                    opacity: 1;
                }
                .material-input__input:focus::-webkit-input-placeholder {
                    opacity: .5;
                    transition: opacity .35s ease;
                }
                .material-input__input::-moz-placeholder {
                    color: rgb(134,142,150);
                    opacity: 1;
                }
                .material-input__input:focus::-moz-placeholder {
                    opacity: .5;
                    transition: opacity .35s ease;
                }
                .material-input__input:-ms-input-placeholder {
                    color: rgb(134,142,150);
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
                .material-input__container.is-empty .material-input__input[placeholder] ~ .material-input__label{
                    color: black;
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
                    color: inherit;
                }
                .material-input__bar{
                    position:relative;
                    display:block;
                    width:100%;
                }
                .material-input__bar::before, .material-input__bar::after {
                    content:'';
                    height:2px;
                    width:0;
                    bottom:0;
                    position:absolute;
                    background: currentColor;
                    transition:0.2s ease all;
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
            <div class="material-input__container">
                <input class="material-input__input" tabindex="-1" />
                <label class="material-input__label"></label>
                <div class="material-input__bar"></div>
                <div class="material-input__message"></div>
            </div>
        `;
        // initialize attributes
        this.setAttribute('tabindex',0);
        this.type = this.getAttribute('type') || 'text';
        this.value = this.getAttribute('value') || null;
        this.name = this.getAttribute('name') || 'material-input';
        this.label = this.getAttribute('label') || null;
        this.placeholder = this.getAttribute('placeholder') || null;
        this.invalid = this.hasAttribute('invalid') || false;
        this.valid = this.hasAttribute('valid') || false;
        // add input field for form submisson
        this.insertAdjacentHTML('afterend','<input tabindex="-1" type="hidden" name="'+this.name+'"/>');
        // elements
        this.$container = this.shadowRoot.querySelector('.material-input__container');
        this.$input = this.$container.querySelector('.material-input__input');
        this.$label = this.$container.querySelector('.material-input__label');
        this.$message = this.$container.querySelector('.material-input__message');
        this.$hiddenInput = document.querySelector('input[name='+this.name+']');

        this.$input.setAttribute('type', this.type);

        this.$input.addEventListener('keydown', function(){
            this._value(this.$input.value);
        }.bind(this));

        this.$input.addEventListener('blur', function(){
            this._value(this.$input.value);
        }.bind(this));

        this.addEventListener('focus', function(){
            this.$input.focus();
        });

        if(this.value){
            this.$input.value = this.value;
        }

        this._value(this.value);
        this._label(this.label);
        this._placeholder(this.placeholder);

        if(this.required){
            this.$hiddenInput.setAttribute('required','');
        }
    }

    _value(value){
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
    _label(label){
        this.$label.innerHTML = label;
        this._toggle(this.$container, 'label-always-floats',this.placeholder !== null);
    }

    _placeholder(placeholder){
        if(placeholder !== null){
            this.$input.placeholder = placeholder;
        }
        else{
            this.$input.removeAttribute('placeholder');
        }
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
