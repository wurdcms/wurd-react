(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('marked')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'marked'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.wurd = {}, global.React, global.marked));
}(this, (function (exports, React, marked) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var marked__default = /*#__PURE__*/_interopDefaultLegacy(marked);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  /*
  eslint
  no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
  padded-blocks: ["error", {"classes": "always"}]
  max-len: ["error", 80]
  */
  var is_object = isObject;

  function isObject(val) {
    return !(val == null || _typeof(val) !== 'object' || Array.isArray(val));
  }

  /*
  eslint
  no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
  padded-blocks: ["error", {"classes": "always"}]
  max-len: ["error", 80]
  */

  var array_some = some;

  function some(arr, fn) {
    var len = arr.length;
    var i = -1;

    while (++i < len) {
      if (fn(arr[i], i, arr)) {
        return true;
      }
    }

    return false;
  }

  /*
  eslint
  no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
  padded-blocks: ["error", {"classes": "always"}]
  max-len: ["error", 80]
  */

  var getPropertyValue_1 = getPropertyValue;

  function getPropertyValue(obj, path) {
    if (!is_object(obj) || typeof path !== 'string') {
      return obj;
    }

    var clone = obj;
    array_some(path.split('.'), procPath);
    return clone;

    function procPath(p) {
      clone = clone[p];

      if (!clone) {
        return true;
      }
    }
  }

  /**
   * @param {Object} data
   *
   * @return {String}
   */

  var encodeQueryString = function encodeQueryString(data) {
    var parts = Object.keys(data).map(function (key) {
      var value = data[key];
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    });
    return parts.join('&');
  };
  /**
   * Replaces {{mustache}} style placeholders in text with variables
   *
   * @param {String} text
   * @param {Object} vars
   *
   * @return {String}
   */


  var replaceVars = function replaceVars(text) {
    var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof text !== 'string') return text;
    Object.keys(vars).forEach(function (key) {
      var val = vars[key];
      text = text.replace(new RegExp("{{".concat(key, "}}"), 'g'), val);
    });
    return text;
  };

  var Store = /*#__PURE__*/function () {
    /**
     * @param {Object} rawContent       Initial content
     */
    function Store() {
      var rawContent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Store);

      this.rawContent = rawContent;
    }
    /**
     * @param {String} path
     *
     * @return {Mixed}
     */


    _createClass(Store, [{
      key: "get",
      value: function get(path) {
        return getPropertyValue_1(this.rawContent, path);
      }
      /**
       * @param {Object} sections       Top level sections of content
       */

    }, {
      key: "setSections",
      value: function setSections(sections) {
        Object.assign(this.rawContent, sections);
      }
    }]);

    return Store;
  }();

  var Block = /*#__PURE__*/function () {
    function Block(wurd, path) {
      var _this = this;

      _classCallCheck(this, Block);

      this.wurd = wurd;
      this.path = path; // Private shortcut to the main content getter
      // TODO: Make a proper private variable
      // See http://voidcanvas.com/es6-private-variables/ - but could require Babel Polyfill to be included

      this._get = wurd.store.get.bind(wurd.store); // Bind methods to the instance to enable 'this' to be available
      // to own methods and added helper methods;
      // This also allows object destructuring, for example:
      // `const {text} = wurd.block('home')`

      var methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      methodNames.forEach(function (name) {
        _this[name] = _this[name].bind(_this);
      });
    }
    /**
     * Gets the ID of a child content item by path (e.g. id('item') returns `block.item`)
     *
     * @param {String} path       Item path e.g. `section.item`
     *
     * @return {String}
     */


    _createClass(Block, [{
      key: "id",
      value: function id(path) {
        if (!path) return this.path;
        return this.path ? [this.path, path].join('.') : path;
      }
      /**
       * Gets a content item by path (e.g. `section.item`).
       * Will return both text and/or objects, depending on the contents of the item
       *
       * @param {String} path       Item path e.g. `section.item`
       *
       * @return {Mixed}
       */

    }, {
      key: "get",
      value: function get(path) {
        var result = this._get(this.id(path)); // If an item is missing, check that the section has been loaded


        if (typeof result === 'undefined' && this.wurd.draft) {
          var section = path.split('.')[0];

          if (!this._get(section)) {
            console.warn("Tried to access unloaded section: ".concat(section));
          }
        }

        return result;
      }
      /**
       * Gets text content of an item by path (e.g. `section.item`).
       * If the item is not a string, e.g. you have passed the path of an object,
       * an empty string will be returned, unless in draft mode in which case a warning will be returned.
       *
       * @param {String} path       Item path e.g. `section.item`
       * @param {Object} [vars]     Variables to replace in the text
       *
       * @return {Mixed}
       */

    }, {
      key: "text",
      value: function text(path, vars) {
        var text = this.get(path);

        if (typeof text === 'undefined') {
          return this.wurd.draft ? "[".concat(path, "]") : '';
        }

        if (typeof text !== 'string') {
          console.warn("Tried to get object as string: ".concat(path));
          return this.wurd.draft ? "[".concat(path, "]") : '';
        }

        if (vars) {
          text = replaceVars(text, vars);
        }

        return text;
      }
      /**
       * Gets HTML from Markdown content of an item by path (e.g. `section.item`).
       * If the item is not a string, e.g. you have passed the path of an object,
       * an empty string will be returned, unless in draft mode in which case a warning will be returned.
       *
       * @param {String} path       Item path e.g. `section.item`
       * @param {Object} [vars]     Variables to replace in the text
       *
       * @return {Mixed}
       */

    }, {
      key: "markdown",
      value: function markdown(path, vars) {
        return marked__default['default'](this.text(path, vars));
      }
      /**
       * Iterates over a collection / list object with the given callback.
       *
       * @param {String} path
       * @param {Function} fn     Callback function with signature ({Function} itemBlock, {Number} index)
       */

    }, {
      key: "map",
      value: function map(path, fn) {
        var _this2 = this;

        var listContent = this.get(path) || _defineProperty({}, Date.now(), {});

        var index = 0;
        var keys = Object.keys(listContent).sort();
        return keys.map(function (key) {
          var currentIndex = index;
          index++;
          var itemPath = [path, key].join('.');

          var itemBlock = _this2.block(itemPath);

          return fn.call(undefined, itemBlock, currentIndex);
        });
      }
      /**
       * Creates a new Block scoped to the child content.
       * Optionally runs a callback with the block as the argument
       *
       * @param {String} path
       * @param {Function} [fn]     Optional callback that receives the child block object
       *
       * @return {Block}
       */

    }, {
      key: "block",
      value: function block(path, fn) {
        var blockPath = this.id(path);
        var childBlock = new Block(this.wurd, blockPath);

        if (typeof fn === 'function') {
          return fn.call(undefined, childBlock);
        }

        return childBlock;
      }
      /**
       * Returns an HTML string for an editable element.
       *
       * This is a shortcut for writing out the HTML tag
       * with the wurd editor attributes and the text content.
       *
       * Use this or create a similar helper to avoid having to type out the item paths twice.
       *
       * @param {String} path
       * @param {Object} [vars]               Optional variables to replace in the text
       * @param {Object} [options]
       * @param {Boolean} [options.markdown]  Parses text as markdown
       * @param {String} [options.type]       HTML node type, defaults to 'span', or 'div' for markdown content
       *
       * @return {String}
       */

    }, {
      key: "el",
      value: function el(path, vars) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var id = this.id(path);
        var text = options.markdown ? this.markdown(path, vars) : this.text(path, vars);
        var editor = vars || options.markdown ? 'data-wurd-md' : 'data-wurd';

        if (this.wurd.draft) {
          var type = options.type || 'span';
          if (options.markdown) type = 'div';
          return "<".concat(type, " ").concat(editor, "=\"").concat(id, "\">").concat(text, "</").concat(type, ">");
        }

        return text;
      }
      /**
       * Returns the block helpers, bound to the block instance.
       * This is useful if using object destructuring for shortcuts,
       * for example `const {text, el} = block.bound()`
       *
       * @return {Object}
       */

      /*
      helpers(path) {
        const block = path ? this.block(path) : this;
         const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(block));
         const boundMethods = methodNames.reduce((memo, name) => {
          if (name === 'constructor') return memo;
           memo[name] = block[name].bind(block);
          return memo;
        }, {});
         return boundMethods;
      }
      */

    }]);

    return Block;
  }();

  var WIDGET_URL = 'https://edit-v3.wurd.io/widget.js';
  var API_URL = 'https://api-v3.wurd.io';

  var Wurd = /*#__PURE__*/function () {
    function Wurd(appName, options) {
      var _this3 = this;

      _classCallCheck(this, Wurd);

      this.store = new Store();
      this.content = new Block(this, null); // Add block shortcut methods to the main Wurd instance

      var methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this.content));
      methodNames.forEach(function (name) {
        _this3[name] = _this3.content[name].bind(_this3.content);
      });
      this.connect(appName, options);
    }
    /**
     * Sets up the default connection/instance
     *
     * @param {String} appName
     * @param {Object} [options]
     * @param {Boolean|String} [options.editMode]   Options for enabling edit mode: `true` or `'querystring'`
     * @param {Boolean} [options.draft]             If true, loads draft content; otherwise loads published content
     * @param {Object} [options.blockHelpers]       Functions to help accessing content and creating editable regions
     * @param {Object} [options.rawContent]         Content to populate the store with
     */


    _createClass(Wurd, [{
      key: "connect",
      value: function connect(appName) {
        var _this4 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.app = appName;
        this.draft = false;
        this.editMode = false; // Set allowed options

        ['draft', 'lang', 'debug'].forEach(function (name) {
          var val = options[name];
          if (typeof val !== 'undefined') _this4[name] = val;
        }); // Activate edit mode if required

        switch (options.editMode) {
          // Edit mode always on
          case true:
            this.startEditor();
            break;
          // Activate edit mode if the querystring contains an 'edit' parameter e.g. '?edit'

          case 'querystring':
            if (/[?&]edit(&|$)/.test(location.search)) {
              this.startEditor();
            }

            break;
        }

        if (options.rawContent) {
          this.store.setSections(options.rawContent);
        }

        if (options.blockHelpers) {
          this.setBlockHelpers(options.blockHelpers);
        }

        return this;
      }
      /**
       * Loads a section of content so that it's items are ready to be accessed with #get(id)
       *
       * @param {String} path     Section path e.g. `section`
       */

    }, {
      key: "load",
      value: function load(path) {
        var _this5 = this;

        var app = this.app,
            store = this.store,
            debug = this.debug;
        return new Promise(function (resolve, reject) {
          if (!app) {
            return reject(new Error('Use wurd.connect(appName) before wurd.load()'));
          } // Return cached version if available


          var sectionContent = store.get(path);

          if (sectionContent) {
            debug && console.info('from cache: ', path);
            return resolve(sectionContent);
          } // No cached version; fetch from server


          debug && console.info('from server: ', path); // Build request URL

          var params = ['draft', 'lang'].reduce(function (memo, param) {
            if (_this5[param]) memo[param] = _this5[param];
            return memo;
          }, {});
          var url = "".concat(API_URL, "/apps/").concat(app, "/content/").concat(path, "?").concat(encodeQueryString(params));
          return fetch(url).then(function (res) {
            return res.json();
          }).then(function (result) {
            if (result.error) {
              if (result.error.message) {
                throw new Error(result.error.message);
              } else {
                throw new Error("Error loading ".concat(path));
              }
            } // Cache for next time
            // TODO: Does this cause problems if future load() calls use nested paths e.g. main.subsection


            store.setSections(result);
            resolve(_this5.content);
          })["catch"](function (err) {
            return reject(err);
          });
        });
      }
    }, {
      key: "startEditor",
      value: function startEditor() {
        var app = this.app,
            lang = this.lang; // Draft mode is always on if in edit mode

        this.editMode = true;
        this.draft = true;
        var script = document.createElement('script');
        script.src = WIDGET_URL;
        script.async = true;
        script.setAttribute('data-app', app);

        if (lang) {
          script.setAttribute('data-lang', lang);
        }

        document.getElementsByTagName('body')[0].appendChild(script);
      }
    }, {
      key: "setBlockHelpers",
      value: function setBlockHelpers(helpers) {
        Object.assign(Block.prototype, helpers);
      }
    }]);

    return Wurd;
  }();

  var instance = new Wurd();
  instance.Wurd = Wurd;

  function WurdText(_ref) {
    var block = _ref.block,
        id = _ref.id,
        sid = _ref.sid,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'span' : _ref$type,
        _ref$component = _ref.component,
        Component = _ref$component === void 0 ? type : _ref$component,
        vars = _ref.vars,
        rest = _objectWithoutProperties(_ref, ["block", "id", "sid", "type", "component", "vars"]);

    block = block || instance.content;
    var text = block.text(id, vars);

    var elProps = _objectSpread2({}, rest);

    if (instance.editMode) {
      var editorType = vars ? 'data-wurd-md' : 'data-wurd';
      elProps[editorType] = block.id(sid || id);
    }

    return /*#__PURE__*/React__default['default'].createElement(Component, elProps, text);
  }

  function WurdMarkdown(_ref) {
    var block = _ref.block,
        id = _ref.id,
        sid = _ref.sid,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'div' : _ref$type,
        _ref$component = _ref.component,
        Component = _ref$component === void 0 ? type : _ref$component,
        vars = _ref.vars,
        rest = _objectWithoutProperties(_ref, ["block", "id", "sid", "type", "component", "vars"]);

    block = block || instance.content;
    var text = block.markdown(id, vars, rest);

    var elProps = _objectSpread2(_objectSpread2({}, rest), {}, {
      dangerouslySetInnerHTML: {
        __html: text
      }
    });

    if (instance.editMode) {
      elProps['data-wurd-md'] = block.id(sid || id);
    }

    return /*#__PURE__*/React__default['default'].createElement(Component, elProps);
  }

  function WurdImage(_ref) {
    var block = _ref.block,
        id = _ref.id,
        sid = _ref.sid,
        rest = _objectWithoutProperties(_ref, ["block", "id", "sid"]);

    block = block || instance.content;
    var url = block.text(id);

    var elProps = _objectSpread2(_objectSpread2({}, rest), {}, {
      src: url
    });

    if (instance.editMode) {
      elProps['data-wurd-img'] = block.id(sid || id);
    }

    return /*#__PURE__*/React__default['default'].createElement('img', elProps);
  }

  function WurdList(_ref) {
    var block = _ref.block,
        id = _ref.id,
        children = _ref.children,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'ul' : _ref$type,
        _ref$component = _ref.component,
        Component = _ref$component === void 0 ? type : _ref$component,
        _ref$keys = _ref.keys,
        keys = _ref$keys === void 0 ? 'title' : _ref$keys,
        rest = _objectWithoutProperties(_ref, ["block", "id", "children", "type", "component", "keys"]);

    block = block || instance.content;

    var elProps = _objectSpread2({}, rest);

    if (instance.editMode) {
      elProps['data-wurd-list'] = block.id(id);
      elProps['data-wurd-list-props'] = keys;
    }
    return /*#__PURE__*/React__default['default'].createElement(Component, elProps, block.map(id, function (item, itemId) {
      return children(item, itemId);
    }));
  }

  /**
   * WurdObject is used to wrap multiple wurd items in one edit dialog
   * ```
   * @param {object} props
   * @param {string} [props.id]
   * @param {string|array} [props.keys] list of wurds ids
   */

  function WurdObject(_ref) {
    var block = _ref.block,
        id = _ref.id,
        sid = _ref.sid,
        keys = _ref.keys,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'span' : _ref$type,
        _ref$component = _ref.component,
        Component = _ref$component === void 0 ? type : _ref$component,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["block", "id", "sid", "keys", "type", "component", "children"]);

    block = block || instance.content;

    var elProps = _objectSpread2({}, rest);

    if (instance.editMode) {
      // Normalise keys to string in form 'key1,key2'
      elProps['data-wurd-obj'] = block.id(sid || id);
      elProps['data-wurd-obj-props'] = Array.isArray(keys) ? keys.join(',') : keys;
    }

    return /*#__PURE__*/React__default['default'].createElement(Component, elProps, children);
  }

  instance.setBlockHelpers({
    Text: function Text(props) {
      return /*#__PURE__*/React__default['default'].createElement(WurdText, _objectSpread2({
        block: this
      }, props));
    },
    Markdown: function Markdown(props) {
      return /*#__PURE__*/React__default['default'].createElement(WurdMarkdown, _objectSpread2({
        block: this
      }, props));
    },
    Image: function Image(props) {
      return /*#__PURE__*/React__default['default'].createElement(WurdImage, _objectSpread2({
        block: this
      }, props));
    },
    List: function List(props) {
      return /*#__PURE__*/React__default['default'].createElement(WurdList, _objectSpread2({
        block: this
      }, props));
    },
    Object: function Object(props) {
      return /*#__PURE__*/React__default['default'].createElement(WurdObject, _objectSpread2({
        block: this
      }, props));
    }
  });

  exports.WurdImage = WurdImage;
  exports.WurdList = WurdList;
  exports.WurdMarkdown = WurdMarkdown;
  exports.WurdObject = WurdObject;
  exports.WurdText = WurdText;
  exports.default = instance;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
