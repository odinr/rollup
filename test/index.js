(function (tslib_1, litElement) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["<style>#test{box-shadow:0,0,0,rgba(0,0,0,.5)}</style>"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var style = litElement.html(_templateObject());

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["", "<p>test</p>"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }

  var Test =
  /*#__PURE__*/
  function (_LitElement) {
    _inherits(Test, _LitElement);

    function Test() {
      _classCallCheck(this, Test);

      return _possibleConstructorReturn(this, _getPrototypeOf(Test).apply(this, arguments));
    }

    _createClass(Test, [{
      key: "render",
      value: function render() {
        return litElement.html(_templateObject$1(), style);
      }
    }]);

    return Test;
  }(litElement.LitElement);

  Test = tslib_1.__decorate([litElement.customElement('test-element')], Test);

}(tslib_1, litElement));
