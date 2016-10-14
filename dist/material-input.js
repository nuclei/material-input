'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONTAINER_CLASS = 'material-input-container';

var MaterialInput = function (_HTMLInputElement) {
    _inherits(MaterialInput, _HTMLInputElement);

    // static get extends() {
    //     return 'input';
    // }

    // static get is() {
    //     return 'material-input';
    // }

    function MaterialInput() {
        _classCallCheck(this, MaterialInput);

        return _possibleConstructorReturn(this, (MaterialInput.__proto__ || Object.getPrototypeOf(MaterialInput)).call(this)); // always call super() first in the ctor. This also calls the extended class' ctor.
    }

    _createClass(MaterialInput, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            if (!this.parentNode.classList.contains(CONTAINER_CLASS)) {
                var container = document.createElement('div');
                container.className = CONTAINER_CLASS;
                this.parentNode.insertBefore(container, this);
                container.appendChild(this);
            }
        }
        // Use createdCallback instead of constructor to init an element.
        // createdCallback() {
        //   //   this.appendChild(mi);
        //     this.innerHTML = `
        //       <label for="">Label</label>
        //       <input type="text" name="text" />
        //     `;
        //   }

    }]);

    return MaterialInput;
}(HTMLInputElement);

customElements.define('material-input', MaterialInput, { extends: 'input' });
// document.registerElement('material-input', MaterialInput);
//# sourceMappingURL=material-input.js.map
