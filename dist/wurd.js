(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("wurd", ["react"], factory);
	else if(typeof exports === 'object')
		exports["wurd"] = factory(require("react"));
	else
		root["wurd"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["wurd"] = factory();else root["wurd"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 4);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * @param {Object} data
       *
       * @return {String}
       */
      var encodeQueryString = exports.encodeQueryString = function encodeQueryString(data) {
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
      var replaceVars = exports.replaceVars = function replaceVars(text) {
        var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (typeof text !== 'string') return text;

        Object.keys(vars).forEach(function (key) {
          var val = vars[key];

          text = text.replace(new RegExp('{{' + key + '}}', 'g'), val);
        });

        return text;
      };

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var marked = __webpack_require__(7);

      var _require = __webpack_require__(0),
          replaceVars = _require.replaceVars;

      module.exports = function () {
        function Block(wurd, path) {
          _classCallCheck(this, Block);

          this.wurd = wurd;
          this.path = path;

          // Private shortcut to the main content getter
          // TODO: Make a proper private variable
          // See http://voidcanvas.com/es6-private-variables/ - but could require Babel Polyfill to be included
          this._get = wurd.store.get.bind(wurd.store);
        }

        /**
         * Gets the ID of a child content item by path (e.g. id('item') returns `block.item`)
         *
         * @param {String} path       Item path e.g. `section.item`
         *
         * @return {String}
         */

        _createClass(Block, [{
          key: 'id',
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
          key: 'get',
          value: function get(path) {
            var result = this._get(this.id(path));

            // If an item is missing, check that the section has been loaded
            if (typeof result === 'undefined' && this.wurd.draft) {
              var section = path.split('.')[0];

              if (!this._get(section)) {
                console.warn('Tried to access unloaded section: ' + section);
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
          key: 'text',
          value: function text(path, vars) {
            var text = this.get(path);

            if (typeof text === 'undefined') {
              return this.wurd.draft ? '[' + path + ']' : '';
            }

            if (typeof text !== 'string') {
              console.warn('Tried to get object as string: ' + path);

              return this.wurd.draft ? '[' + path + ']' : '';
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
          key: 'markdown',
          value: function markdown(path, vars) {
            return marked(this.text(path, vars));
          }

          /**
           * Iterates over a collection / list object with the given callback.
           *
           * @param {String} path
           * @param {Function} fn     Callback function with signature ({Function} itemBlock, {Number} index)
           */

        }, {
          key: 'map',
          value: function map(path, fn) {
            var _this = this;

            var listContent = this.get(path) || _defineProperty({}, Date.now(), {});

            var index = 0;

            var keys = Object.keys(listContent).sort();

            return keys.map(function (key) {
              var currentIndex = index;

              index++;

              var itemPath = [path, key].join('.');
              var itemBlock = _this.block(itemPath);

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
          key: 'block',
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
          key: 'el',
          value: function el(path, vars) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var id = this.id(path);
            var text = options.markdown ? this.markdown(path, vars) : this.text(path, vars);
            var editor = vars || options.markdown ? 'data-wurd-md' : 'data-wurd';

            if (this.wurd.draft) {
              var type = options.type || 'span';

              if (options.markdown) type = 'div';

              return '<' + type + ' ' + editor + '="' + id + '">' + text + '</' + type + '>';
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

        }, {
          key: 'helpers',
          value: function helpers(path) {
            var block = path ? this.block(path) : this;

            var methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(block));

            var boundMethods = methodNames.reduce(function (memo, name) {
              if (name === 'constructor') return memo;

              memo[name] = block[name].bind(block);
              return memo;
            }, {});

            return boundMethods;
          }
        }]);

        return Block;
      }();

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var getValue = __webpack_require__(5);

      module.exports = function () {

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
          key: 'get',
          value: function get(path) {
            return getValue(this.rawContent, path);
          }

          /**
           * @param {Object} sections       Top level sections of content
           */

        }, {
          key: 'setSections',
          value: function setSections(sections) {
            _extends(this.rawContent, sections);
          }
        }]);

        return Store;
      }();

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /*
      eslint
      no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
      padded-blocks: ["error", {"classes": "always"}]
      max-len: ["error", 80]
      */

      module.exports = some;

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

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _utils = __webpack_require__(0);

      var _store = __webpack_require__(2);

      var _store2 = _interopRequireDefault(_store);

      var _block = __webpack_require__(1);

      var _block2 = _interopRequireDefault(_block);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var WIDGET_URL = 'https://edit-v3.wurd.io/widget.js';
      var API_URL = 'https://api-v3.wurd.io';

      var Wurd = function () {
        function Wurd(appName, options) {
          var _this = this;

          _classCallCheck(this, Wurd);

          this.store = new _store2.default();
          this.content = new _block2.default(this, null);

          // Add shortcut methods for accessing content
          ['id', 'get', 'text', 'markdown', 'map', 'block', 'el'].forEach(function (name) {
            _this[name] = function () {
              return this.content[name].apply(this.content, arguments);
            }.bind(_this);
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
          key: 'connect',
          value: function connect(appName) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.app = appName;

            this.draft = false;
            this.editMode = false;

            // Set allowed options
            ['draft', 'lang', 'debug'].forEach(function (name) {
              var val = options[name];

              if (typeof val !== 'undefined') _this2[name] = val;
            });

            // Activate edit mode if required
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

              default:
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
          key: 'load',
          value: function load(path) {
            var _this3 = this;

            var app = this.app,
                store = this.store,
                debug = this.debug;

            return new Promise(function (resolve, reject) {
              if (!app) {
                return reject(new Error('Use wurd.connect(appName) before wurd.load()'));
              }

              // Return cached version if available
              var sectionContent = store.get(path);

              if (sectionContent) {
                debug && console.info('from cache: ', path);
                return resolve(sectionContent);
              }

              // No cached version; fetch from server
              debug && console.info('from server: ', path);

              // Build request URL
              var params = ['draft', 'lang'].reduce(function (memo, param) {
                if (_this3[param]) memo[param] = _this3[param];

                return memo;
              }, {});

              var url = API_URL + '/apps/' + app + '/content/' + path + '?' + (0, _utils.encodeQueryString)(params);

              return fetch(url).then(function (res) {
                return res.json();
              }).then(function (result) {
                if (result.error) {
                  if (result.error.message) {
                    throw new Error(result.error.message);
                  } else {
                    throw new Error('Error loading ' + path);
                  }
                }

                // Cache for next time
                // TODO: Does this cause problems if future load() calls use nested paths e.g. main.subsection
                store.setSections(result);

                resolve(_this3.content);
              }).catch(function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: 'startEditor',
          value: function startEditor() {
            var app = this.app,
                lang = this.lang;

            // Draft mode is always on if in edit mode

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
          key: 'setBlockHelpers',
          value: function setBlockHelpers(helpers) {
            _extends(_block2.default.prototype, helpers);
          }
        }]);

        return Wurd;
      }();

      ;

      var instance = new Wurd();

      instance.Wurd = Wurd;

      exports.default = instance;
      module.exports = exports['default'];

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /*
      eslint
      no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
      padded-blocks: ["error", {"classes": "always"}]
      max-len: ["error", 80]
      */

      var isObject = __webpack_require__(6);
      var some = __webpack_require__(3);

      module.exports = getPropertyValue;

      function getPropertyValue(obj, path) {
        if (!isObject(obj) || typeof path !== 'string') {
          return obj;
        }

        var clone = obj;

        some(path.split('.'), procPath);

        return clone;

        function procPath(p) {
          clone = clone[p];
          if (!clone) {
            return true;
          }
        }
      }

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /*
      eslint
      no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
      padded-blocks: ["error", {"classes": "always"}]
      max-len: ["error", 80]
      */

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      module.exports = isObject;

      function isObject(val) {
        return !(val == null || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object' || Array.isArray(val));
      }

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (global) {
        var __WEBPACK_AMD_DEFINE_RESULT__;

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        /**
         * marked - a markdown parser
         * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
         * https://github.com/markedjs/marked
         */

        ;(function (root) {
          'use strict';

          /**
           * Block-Level Grammar
           */

          var block = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: noop,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            nptable: noop,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: '^ {0,3}(?:' // optional indentation
            + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
            + '|comment[^\\n]*(\\n+|$)' // (2)
            + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
            + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
            + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
            + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
            + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
            + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
            + ')',
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            table: noop,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
            text: /^[^\n]+/
          };

          block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
          block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
          block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();

          block.bullet = /(?:[*+-]|\d+\.)/;
          block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
          block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();

          block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();

          block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
          block._comment = /<!--(?!-?>)[\s\S]*?-->/;
          block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();

          block.paragraph = edit(block.paragraph).replace('hr', block.hr).replace('heading', block.heading).replace('lheading', block.lheading).replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
          .getRegex();

          block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();

          /**
           * Normal Block Grammar
           */

          block.normal = merge({}, block);

          /**
           * GFM Block Grammar
           */

          block.gfm = merge({}, block.normal, {
            fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
            paragraph: /^/,
            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
          });

          block.gfm.paragraph = edit(block.paragraph).replace('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|').getRegex();

          /**
           * GFM + Tables Block Grammar
           */

          block.tables = merge({}, block.gfm, {
            nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
            table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
          });

          /**
           * Pedantic grammar
           */

          block.pedantic = merge({}, block.normal, {
            html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
            + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
          });

          /**
           * Block Lexer
           */

          function Lexer(options) {
            this.tokens = [];
            this.tokens.links = {};
            this.options = options || marked.defaults;
            this.rules = block.normal;

            if (this.options.pedantic) {
              this.rules = block.pedantic;
            } else if (this.options.gfm) {
              if (this.options.tables) {
                this.rules = block.tables;
              } else {
                this.rules = block.gfm;
              }
            }
          }

          /**
           * Expose Block Rules
           */

          Lexer.rules = block;

          /**
           * Static Lex Method
           */

          Lexer.lex = function (src, options) {
            var lexer = new Lexer(options);
            return lexer.lex(src);
          };

          /**
           * Preprocessing
           */

          Lexer.prototype.lex = function (src) {
            src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

            return this.token(src, true);
          };

          /**
           * Lexing
           */

          Lexer.prototype.token = function (src, top) {
            src = src.replace(/^ +$/gm, '');
            var next, loose, cap, bull, b, item, space, i, tag, l, isordered, istask, ischecked;

            while (src) {
              // newline
              if (cap = this.rules.newline.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[0].length > 1) {
                  this.tokens.push({
                    type: 'space'
                  });
                }
              }

              // code
              if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                cap = cap[0].replace(/^ {4}/gm, '');
                this.tokens.push({
                  type: 'code',
                  text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
                });
                continue;
              }

              // fences (gfm)
              if (cap = this.rules.fences.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'code',
                  lang: cap[2],
                  text: cap[3] || ''
                });
                continue;
              }

              // heading
              if (cap = this.rules.heading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'heading',
                  depth: cap[1].length,
                  text: cap[2]
                });
                continue;
              }

              // table no leading pipe (gfm)
              if (top && (cap = this.rules.nptable.exec(src))) {
                item = {
                  type: 'table',
                  header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
                  align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
                };

                if (item.header.length === item.align.length) {
                  src = src.substring(cap[0].length);

                  for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                      item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                      item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                      item.align[i] = 'left';
                    } else {
                      item.align[i] = null;
                    }
                  }

                  for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = splitCells(item.cells[i], item.header.length);
                  }

                  this.tokens.push(item);

                  continue;
                }
              }

              // hr
              if (cap = this.rules.hr.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'hr'
                });
                continue;
              }

              // blockquote
              if (cap = this.rules.blockquote.exec(src)) {
                src = src.substring(cap[0].length);

                this.tokens.push({
                  type: 'blockquote_start'
                });

                cap = cap[0].replace(/^ *> ?/gm, '');

                // Pass `top` to keep the current
                // "toplevel" state. This is exactly
                // how markdown.pl works.
                this.token(cap, top);

                this.tokens.push({
                  type: 'blockquote_end'
                });

                continue;
              }

              // list
              if (cap = this.rules.list.exec(src)) {
                src = src.substring(cap[0].length);
                bull = cap[2];
                isordered = bull.length > 1;

                this.tokens.push({
                  type: 'list_start',
                  ordered: isordered,
                  start: isordered ? +bull : ''
                });

                // Get each top-level item.
                cap = cap[0].match(this.rules.item);

                next = false;
                l = cap.length;
                i = 0;

                for (; i < l; i++) {
                  item = cap[i];

                  // Remove the list item's bullet
                  // so it is seen as the next token.
                  space = item.length;
                  item = item.replace(/^ *([*+-]|\d+\.) +/, '');

                  // Outdent whatever the
                  // list item contains. Hacky.
                  if (~item.indexOf('\n ')) {
                    space -= item.length;
                    item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
                  }

                  // Determine whether the next list item belongs here.
                  // Backpedal if it does not belong in this list.
                  if (this.options.smartLists && i !== l - 1) {
                    b = block.bullet.exec(cap[i + 1])[0];
                    if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                      src = cap.slice(i + 1).join('\n') + src;
                      i = l - 1;
                    }
                  }

                  // Determine whether item is loose or not.
                  // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                  // for discount behavior.
                  loose = next || /\n\n(?!\s*$)/.test(item);
                  if (i !== l - 1) {
                    next = item.charAt(item.length - 1) === '\n';
                    if (!loose) loose = next;
                  }

                  // Check for task list items
                  istask = /^\[[ xX]\] /.test(item);
                  ischecked = undefined;
                  if (istask) {
                    ischecked = item[1] !== ' ';
                    item = item.replace(/^\[[ xX]\] +/, '');
                  }

                  this.tokens.push({
                    type: loose ? 'loose_item_start' : 'list_item_start',
                    task: istask,
                    checked: ischecked
                  });

                  // Recurse.
                  this.token(item, false);

                  this.tokens.push({
                    type: 'list_item_end'
                  });
                }

                this.tokens.push({
                  type: 'list_end'
                });

                continue;
              }

              // html
              if (cap = this.rules.html.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: this.options.sanitize ? 'paragraph' : 'html',
                  pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
                  text: cap[0]
                });
                continue;
              }

              // def
              if (top && (cap = this.rules.def.exec(src))) {
                src = src.substring(cap[0].length);
                if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
                tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
                if (!this.tokens.links[tag]) {
                  this.tokens.links[tag] = {
                    href: cap[2],
                    title: cap[3]
                  };
                }
                continue;
              }

              // table (gfm)
              if (top && (cap = this.rules.table.exec(src))) {
                item = {
                  type: 'table',
                  header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
                  align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: cap[3] ? cap[3].replace(/(?: *\| *)?\n$/, '').split('\n') : []
                };

                if (item.header.length === item.align.length) {
                  src = src.substring(cap[0].length);

                  for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                      item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                      item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                      item.align[i] = 'left';
                    } else {
                      item.align[i] = null;
                    }
                  }

                  for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
                  }

                  this.tokens.push(item);

                  continue;
                }
              }

              // lheading
              if (cap = this.rules.lheading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'heading',
                  depth: cap[2] === '=' ? 1 : 2,
                  text: cap[1]
                });
                continue;
              }

              // top-level paragraph
              if (top && (cap = this.rules.paragraph.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'paragraph',
                  text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
                });
                continue;
              }

              // text
              if (cap = this.rules.text.exec(src)) {
                // Top-level should never reach here.
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'text',
                  text: cap[0]
                });
                continue;
              }

              if (src) {
                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
              }
            }

            return this.tokens;
          };

          /**
           * Inline-Level Grammar
           */

          var inline = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: noop,
            tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
            + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
            + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
            + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
            + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
            link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
            nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
            strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
            em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
            code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            del: noop,
            text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
          };

          inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

          inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
          inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
          inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();

          inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

          inline.tag = edit(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();

          inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
          inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/;
          inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

          inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();

          inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();

          /**
           * Normal Inline Grammar
           */

          inline.normal = merge({}, inline);

          /**
           * Pedantic Inline Grammar
           */

          inline.pedantic = merge({}, inline.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
            link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
            reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
          });

          /**
           * GFM Inline Grammar
           */

          inline.gfm = merge({}, inline.normal, {
            escape: edit(inline.escape).replace('])', '~|])').getRegex(),
            url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace('email', inline._email).getRegex(),
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text: edit(inline.text).replace(']|', '~]|').replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|').getRegex()
          });

          /**
           * GFM + Line Breaks Inline Grammar
           */

          inline.breaks = merge({}, inline.gfm, {
            br: edit(inline.br).replace('{2,}', '*').getRegex(),
            text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
          });

          /**
           * Inline Lexer & Compiler
           */

          function InlineLexer(links, options) {
            this.options = options || marked.defaults;
            this.links = links;
            this.rules = inline.normal;
            this.renderer = this.options.renderer || new Renderer();
            this.renderer.options = this.options;

            if (!this.links) {
              throw new Error('Tokens array requires a `links` property.');
            }

            if (this.options.pedantic) {
              this.rules = inline.pedantic;
            } else if (this.options.gfm) {
              if (this.options.breaks) {
                this.rules = inline.breaks;
              } else {
                this.rules = inline.gfm;
              }
            }
          }

          /**
           * Expose Inline Rules
           */

          InlineLexer.rules = inline;

          /**
           * Static Lexing/Compiling Method
           */

          InlineLexer.output = function (src, links, options) {
            var inline = new InlineLexer(links, options);
            return inline.output(src);
          };

          /**
           * Lexing/Compiling
           */

          InlineLexer.prototype.output = function (src) {
            var out = '',
                link,
                text,
                href,
                title,
                cap;

            while (src) {
              // escape
              if (cap = this.rules.escape.exec(src)) {
                src = src.substring(cap[0].length);
                out += cap[1];
                continue;
              }

              // autolink
              if (cap = this.rules.autolink.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[2] === '@') {
                  text = escape(this.mangle(cap[1]));
                  href = 'mailto:' + text;
                } else {
                  text = escape(cap[1]);
                  href = text;
                }
                out += this.renderer.link(href, null, text);
                continue;
              }

              // url (gfm)
              if (!this.inLink && (cap = this.rules.url.exec(src))) {
                cap[0] = this.rules._backpedal.exec(cap[0])[0];
                src = src.substring(cap[0].length);
                if (cap[2] === '@') {
                  text = escape(cap[0]);
                  href = 'mailto:' + text;
                } else {
                  text = escape(cap[0]);
                  if (cap[1] === 'www.') {
                    href = 'http://' + text;
                  } else {
                    href = text;
                  }
                }
                out += this.renderer.link(href, null, text);
                continue;
              }

              // tag
              if (cap = this.rules.tag.exec(src)) {
                if (!this.inLink && /^<a /i.test(cap[0])) {
                  this.inLink = true;
                } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
                  this.inLink = false;
                }
                src = src.substring(cap[0].length);
                out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
                continue;
              }

              // link
              if (cap = this.rules.link.exec(src)) {
                src = src.substring(cap[0].length);
                this.inLink = true;
                href = cap[2];
                if (this.options.pedantic) {
                  link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

                  if (link) {
                    href = link[1];
                    title = link[3];
                  } else {
                    title = '';
                  }
                } else {
                  title = cap[3] ? cap[3].slice(1, -1) : '';
                }
                href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
                out += this.outputLink(cap, {
                  href: InlineLexer.escapes(href),
                  title: InlineLexer.escapes(title)
                });
                this.inLink = false;
                continue;
              }

              // reflink, nolink
              if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
                src = src.substring(cap[0].length);
                link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
                link = this.links[link.toLowerCase()];
                if (!link || !link.href) {
                  out += cap[0].charAt(0);
                  src = cap[0].substring(1) + src;
                  continue;
                }
                this.inLink = true;
                out += this.outputLink(cap, link);
                this.inLink = false;
                continue;
              }

              // strong
              if (cap = this.rules.strong.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
                continue;
              }

              // em
              if (cap = this.rules.em.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
                continue;
              }

              // code
              if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.codespan(escape(cap[2].trim(), true));
                continue;
              }

              // br
              if (cap = this.rules.br.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.br();
                continue;
              }

              // del (gfm)
              if (cap = this.rules.del.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.del(this.output(cap[1]));
                continue;
              }

              // text
              if (cap = this.rules.text.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.text(escape(this.smartypants(cap[0])));
                continue;
              }

              if (src) {
                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
              }
            }

            return out;
          };

          InlineLexer.escapes = function (text) {
            return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
          };

          /**
           * Compile Link
           */

          InlineLexer.prototype.outputLink = function (cap, link) {
            var href = link.href,
                title = link.title ? escape(link.title) : null;

            return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
          };

          /**
           * Smartypants Transformations
           */

          InlineLexer.prototype.smartypants = function (text) {
            if (!this.options.smartypants) return text;
            return text
            // em-dashes
            .replace(/---/g, '\u2014')
            // en-dashes
            .replace(/--/g, '\u2013')
            // opening singles
            .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
            // closing singles & apostrophes
            .replace(/'/g, '\u2019')
            // opening doubles
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201C')
            // closing doubles
            .replace(/"/g, '\u201D')
            // ellipses
            .replace(/\.{3}/g, '\u2026');
          };

          /**
           * Mangle Links
           */

          InlineLexer.prototype.mangle = function (text) {
            if (!this.options.mangle) return text;
            var out = '',
                l = text.length,
                i = 0,
                ch;

            for (; i < l; i++) {
              ch = text.charCodeAt(i);
              if (Math.random() > 0.5) {
                ch = 'x' + ch.toString(16);
              }
              out += '&#' + ch + ';';
            }

            return out;
          };

          /**
           * Renderer
           */

          function Renderer(options) {
            this.options = options || marked.defaults;
          }

          Renderer.prototype.code = function (code, lang, escaped) {
            if (this.options.highlight) {
              var out = this.options.highlight(code, lang);
              if (out != null && out !== code) {
                escaped = true;
                code = out;
              }
            }

            if (!lang) {
              return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>';
            }

            return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
          };

          Renderer.prototype.blockquote = function (quote) {
            return '<blockquote>\n' + quote + '</blockquote>\n';
          };

          Renderer.prototype.html = function (html) {
            return html;
          };

          Renderer.prototype.heading = function (text, level, raw) {
            if (this.options.headerIds) {
              return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
            }
            // ignore IDs
            return '<h' + level + '>' + text + '</h' + level + '>\n';
          };

          Renderer.prototype.hr = function () {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          };

          Renderer.prototype.list = function (body, ordered, start) {
            var type = ordered ? 'ol' : 'ul',
                startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
            return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
          };

          Renderer.prototype.listitem = function (text) {
            return '<li>' + text + '</li>\n';
          };

          Renderer.prototype.checkbox = function (checked) {
            return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
          };

          Renderer.prototype.paragraph = function (text) {
            return '<p>' + text + '</p>\n';
          };

          Renderer.prototype.table = function (header, body) {
            if (body) body = '<tbody>' + body + '</tbody>';

            return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
          };

          Renderer.prototype.tablerow = function (content) {
            return '<tr>\n' + content + '</tr>\n';
          };

          Renderer.prototype.tablecell = function (content, flags) {
            var type = flags.header ? 'th' : 'td';
            var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
            return tag + content + '</' + type + '>\n';
          };

          // span level renderer
          Renderer.prototype.strong = function (text) {
            return '<strong>' + text + '</strong>';
          };

          Renderer.prototype.em = function (text) {
            return '<em>' + text + '</em>';
          };

          Renderer.prototype.codespan = function (text) {
            return '<code>' + text + '</code>';
          };

          Renderer.prototype.br = function () {
            return this.options.xhtml ? '<br/>' : '<br>';
          };

          Renderer.prototype.del = function (text) {
            return '<del>' + text + '</del>';
          };

          Renderer.prototype.link = function (href, title, text) {
            if (this.options.sanitize) {
              try {
                var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
              } catch (e) {
                return text;
              }
              if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
                return text;
              }
            }
            if (this.options.baseUrl && !originIndependentUrl.test(href)) {
              href = resolveUrl(this.options.baseUrl, href);
            }
            try {
              href = encodeURI(href).replace(/%25/g, '%');
            } catch (e) {
              return text;
            }
            var out = '<a href="' + escape(href) + '"';
            if (title) {
              out += ' title="' + title + '"';
            }
            out += '>' + text + '</a>';
            return out;
          };

          Renderer.prototype.image = function (href, title, text) {
            if (this.options.baseUrl && !originIndependentUrl.test(href)) {
              href = resolveUrl(this.options.baseUrl, href);
            }
            var out = '<img src="' + href + '" alt="' + text + '"';
            if (title) {
              out += ' title="' + title + '"';
            }
            out += this.options.xhtml ? '/>' : '>';
            return out;
          };

          Renderer.prototype.text = function (text) {
            return text;
          };

          /**
           * TextRenderer
           * returns only the textual part of the token
           */

          function TextRenderer() {}

          // no need for block level renderers

          TextRenderer.prototype.strong = TextRenderer.prototype.em = TextRenderer.prototype.codespan = TextRenderer.prototype.del = TextRenderer.prototype.text = function (text) {
            return text;
          };

          TextRenderer.prototype.link = TextRenderer.prototype.image = function (href, title, text) {
            return '' + text;
          };

          TextRenderer.prototype.br = function () {
            return '';
          };

          /**
           * Parsing & Compiling
           */

          function Parser(options) {
            this.tokens = [];
            this.token = null;
            this.options = options || marked.defaults;
            this.options.renderer = this.options.renderer || new Renderer();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
          }

          /**
           * Static Parse Method
           */

          Parser.parse = function (src, options) {
            var parser = new Parser(options);
            return parser.parse(src);
          };

          /**
           * Parse Loop
           */

          Parser.prototype.parse = function (src) {
            this.inline = new InlineLexer(src.links, this.options);
            // use an InlineLexer with a TextRenderer to extract pure text
            this.inlineText = new InlineLexer(src.links, merge({}, this.options, { renderer: new TextRenderer() }));
            this.tokens = src.reverse();

            var out = '';
            while (this.next()) {
              out += this.tok();
            }

            return out;
          };

          /**
           * Next Token
           */

          Parser.prototype.next = function () {
            return this.token = this.tokens.pop();
          };

          /**
           * Preview Next Token
           */

          Parser.prototype.peek = function () {
            return this.tokens[this.tokens.length - 1] || 0;
          };

          /**
           * Parse Text Tokens
           */

          Parser.prototype.parseText = function () {
            var body = this.token.text;

            while (this.peek().type === 'text') {
              body += '\n' + this.next().text;
            }

            return this.inline.output(body);
          };

          /**
           * Parse Current Token
           */

          Parser.prototype.tok = function () {
            switch (this.token.type) {
              case 'space':
                {
                  return '';
                }
              case 'hr':
                {
                  return this.renderer.hr();
                }
              case 'heading':
                {
                  return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape(this.inlineText.output(this.token.text)));
                }
              case 'code':
                {
                  return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                }
              case 'table':
                {
                  var header = '',
                      body = '',
                      i,
                      row,
                      cell,
                      j;

                  // header
                  cell = '';
                  for (i = 0; i < this.token.header.length; i++) {
                    cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
                  }
                  header += this.renderer.tablerow(cell);

                  for (i = 0; i < this.token.cells.length; i++) {
                    row = this.token.cells[i];

                    cell = '';
                    for (j = 0; j < row.length; j++) {
                      cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
                    }

                    body += this.renderer.tablerow(cell);
                  }
                  return this.renderer.table(header, body);
                }
              case 'blockquote_start':
                {
                  body = '';

                  while (this.next().type !== 'blockquote_end') {
                    body += this.tok();
                  }

                  return this.renderer.blockquote(body);
                }
              case 'list_start':
                {
                  body = '';
                  var ordered = this.token.ordered,
                      start = this.token.start;

                  while (this.next().type !== 'list_end') {
                    body += this.tok();
                  }

                  return this.renderer.list(body, ordered, start);
                }
              case 'list_item_start':
                {
                  body = '';

                  if (this.token.task) {
                    body += this.renderer.checkbox(this.token.checked);
                  }

                  while (this.next().type !== 'list_item_end') {
                    body += this.token.type === 'text' ? this.parseText() : this.tok();
                  }

                  return this.renderer.listitem(body);
                }
              case 'loose_item_start':
                {
                  body = '';

                  while (this.next().type !== 'list_item_end') {
                    body += this.tok();
                  }

                  return this.renderer.listitem(body);
                }
              case 'html':
                {
                  // TODO parse inline content if parameter markdown=1
                  return this.renderer.html(this.token.text);
                }
              case 'paragraph':
                {
                  return this.renderer.paragraph(this.inline.output(this.token.text));
                }
              case 'text':
                {
                  return this.renderer.paragraph(this.parseText());
                }
            }
          };

          /**
           * Helpers
           */

          function escape(html, encode) {
            return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
          }

          function unescape(html) {
            // explicitly match decimal, hex, and named HTML entities
            return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
              n = n.toLowerCase();
              if (n === 'colon') return ':';
              if (n.charAt(0) === '#') {
                return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
              }
              return '';
            });
          }

          function edit(regex, opt) {
            regex = regex.source || regex;
            opt = opt || '';
            return {
              replace: function replace(name, val) {
                val = val.source || val;
                val = val.replace(/(^|[^\[])\^/g, '$1');
                regex = regex.replace(name, val);
                return this;
              },
              getRegex: function getRegex() {
                return new RegExp(regex, opt);
              }
            };
          }

          function resolveUrl(base, href) {
            if (!baseUrls[' ' + base]) {
              // we can ignore everything in base after the last slash of its path component,
              // but we might need to add _that_
              // https://tools.ietf.org/html/rfc3986#section-3
              if (/^[^:]+:\/*[^/]*$/.test(base)) {
                baseUrls[' ' + base] = base + '/';
              } else {
                baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
              }
            }
            base = baseUrls[' ' + base];

            if (href.slice(0, 2) === '//') {
              return base.replace(/:[\s\S]*/, ':') + href;
            } else if (href.charAt(0) === '/') {
              return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
            } else {
              return base + href;
            }
          }
          var baseUrls = {};
          var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

          function noop() {}
          noop.exec = noop;

          function merge(obj) {
            var i = 1,
                target,
                key;

            for (; i < arguments.length; i++) {
              target = arguments[i];
              for (key in target) {
                if (Object.prototype.hasOwnProperty.call(target, key)) {
                  obj[key] = target[key];
                }
              }
            }

            return obj;
          }

          function splitCells(tableRow, count) {
            var cells = tableRow.replace(/([^\\])\|/g, '$1 |').split(/ +\| */),
                i = 0;

            if (cells.length > count) {
              cells.splice(count);
            } else {
              while (cells.length < count) {
                cells.push('');
              }
            }

            for (; i < cells.length; i++) {
              cells[i] = cells[i].replace(/\\\|/g, '|');
            }
            return cells;
          }

          /**
           * Marked
           */

          function marked(src, opt, callback) {
            // throw error in case of non string input
            if (typeof src === 'undefined' || src === null) {
              throw new Error('marked(): input parameter is undefined or null');
            }
            if (typeof src !== 'string') {
              throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
            }

            if (callback || typeof opt === 'function') {
              if (!callback) {
                callback = opt;
                opt = null;
              }

              opt = merge({}, marked.defaults, opt || {});

              var highlight = opt.highlight,
                  tokens,
                  pending,
                  i = 0;

              try {
                tokens = Lexer.lex(src, opt);
              } catch (e) {
                return callback(e);
              }

              pending = tokens.length;

              var done = function done(err) {
                if (err) {
                  opt.highlight = highlight;
                  return callback(err);
                }

                var out;

                try {
                  out = Parser.parse(tokens, opt);
                } catch (e) {
                  err = e;
                }

                opt.highlight = highlight;

                return err ? callback(err) : callback(null, out);
              };

              if (!highlight || highlight.length < 3) {
                return done();
              }

              delete opt.highlight;

              if (!pending) return done();

              for (; i < tokens.length; i++) {
                (function (token) {
                  if (token.type !== 'code') {
                    return --pending || done();
                  }
                  return highlight(token.text, token.lang, function (err, code) {
                    if (err) return done(err);
                    if (code == null || code === token.text) {
                      return --pending || done();
                    }
                    token.text = code;
                    token.escaped = true;
                    --pending || done();
                  });
                })(tokens[i]);
              }

              return;
            }
            try {
              if (opt) opt = merge({}, marked.defaults, opt);
              return Parser.parse(Lexer.lex(src, opt), opt);
            } catch (e) {
              e.message += '\nPlease report this to https://github.com/markedjs/marked.';
              if ((opt || marked.defaults).silent) {
                return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
              }
              throw e;
            }
          }

          /**
           * Options
           */

          marked.options = marked.setOptions = function (opt) {
            merge(marked.defaults, opt);
            return marked;
          };

          marked.getDefaults = function () {
            return {
              baseUrl: null,
              breaks: false,
              gfm: true,
              headerIds: true,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: true,
              pedantic: false,
              renderer: new Renderer(),
              sanitize: false,
              sanitizer: null,
              silent: false,
              smartLists: false,
              smartypants: false,
              tables: true,
              xhtml: false
            };
          };

          marked.defaults = marked.getDefaults();

          /**
           * Expose
           */

          marked.Parser = Parser;
          marked.parser = Parser.parse;

          marked.Renderer = Renderer;
          marked.TextRenderer = TextRenderer;

          marked.Lexer = Lexer;
          marked.lexer = Lexer.lex;

          marked.InlineLexer = InlineLexer;
          marked.inlineLexer = InlineLexer.output;

          marked.parse = marked;

          if (typeof module !== 'undefined' && (false ? 'undefined' : _typeof(exports)) === 'object') {
            module.exports = marked;
          } else if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return marked;
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
            root.marked = marked;
          }
        })(undefined || (typeof window !== 'undefined' ? window : global));
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(8));

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _wurdWeb = __webpack_require__(0);

var _wurdWeb2 = _interopRequireDefault(_wurdWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WurdImage = function WurdImage(_ref) {
  var block = _ref.block,
      id = _ref.id,
      sid = _ref.sid,
      rest = _objectWithoutProperties(_ref, ['block', 'id', 'sid']);

  block = block || _wurdWeb2.default.content;

  var url = block.text(id);

  var elProps = _extends({}, rest, {
    src: url
  });

  if (_wurdWeb2.default.editMode) {
    elProps['data-wurd-img'] = block.id(sid || id);
  }

  return _react2.default.createElement('img', elProps);
};

exports.default = WurdImage;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _wurdWeb = __webpack_require__(0);

var _wurdWeb2 = _interopRequireDefault(_wurdWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WurdList = function WurdList(_ref) {
  var block = _ref.block,
      id = _ref.id,
      children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'ul' : _ref$type,
      _ref$keys = _ref.keys,
      keys = _ref$keys === undefined ? 'title' : _ref$keys,
      rest = _objectWithoutProperties(_ref, ['block', 'id', 'children', 'type', 'keys']);

  block = block || _wurdWeb2.default.content;

  var elProps = _extends({}, rest);

  if (_wurdWeb2.default.editMode) {
    elProps['data-wurd-list'] = block.id(id);
    elProps['data-wurd-list-props'] = keys;
  };

  return _react2.default.createElement(type, elProps, block.map(id, function (item, itemId) {
    return children(item.helpers(), itemId);
  }));
};

exports.default = WurdList;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _wurdWeb = __webpack_require__(0);

var _wurdWeb2 = _interopRequireDefault(_wurdWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WurdMarkdown = function WurdMarkdown(_ref) {
  var block = _ref.block,
      id = _ref.id,
      sid = _ref.sid,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'div' : _ref$type,
      vars = _ref.vars,
      rest = _objectWithoutProperties(_ref, ['block', 'id', 'sid', 'type', 'vars']);

  block = block || _wurdWeb2.default.content;

  var text = block.markdown(id, vars);

  var elProps = _extends({}, rest, {
    dangerouslySetInnerHTML: { __html: text }
  });

  if (_wurdWeb2.default.editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return _react2.default.createElement(type, elProps);
};

exports.default = WurdMarkdown;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _wurdWeb = __webpack_require__(0);

var _wurdWeb2 = _interopRequireDefault(_wurdWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WurdObject = function WurdObject(_ref) {
  var block = _ref.block,
      id = _ref.id,
      sid = _ref.sid,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'span' : _ref$type,
      keys = _ref.keys,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['block', 'id', 'sid', 'type', 'keys', 'children']);

  block = block || _wurdWeb2.default.content;

  var elProps = _extends({}, rest);

  if (_wurdWeb2.default.editMode) {
    // Normalise keys to string in form 'key1,key2'
    if (Array.isArray(keys)) {
      keys = keys.join(',');
    }

    elProps['data-wurd-obj'] = block.id(sid || id);
    elProps['data-wurd-obj-props'] = keys;
  }

  return _react2.default.createElement(type, elProps, children);
};

exports.default = WurdObject;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _wurdWeb = __webpack_require__(0);

var _wurdWeb2 = _interopRequireDefault(_wurdWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WurdText = function WurdText(_ref) {
  var block = _ref.block,
      id = _ref.id,
      sid = _ref.sid,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'span' : _ref$type,
      vars = _ref.vars,
      rest = _objectWithoutProperties(_ref, ['block', 'id', 'sid', 'type', 'vars']);

  block = block || _wurdWeb2.default.content;

  var text = block.text(id, vars);

  var elProps = _extends({}, rest);

  if (_wurdWeb2.default.editMode) {
    var editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = block.id(sid || id);
  }

  return _react2.default.createElement(type, elProps, text);
};

exports.default = WurdText;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WurdObject = exports.WurdList = exports.WurdImage = exports.WurdMarkdown = exports.WurdText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _wurdWeb = __webpack_require__(0);

var _wurdWeb2 = _interopRequireDefault(_wurdWeb);

var _text = __webpack_require__(6);

var _text2 = _interopRequireDefault(_text);

var _markdown = __webpack_require__(4);

var _markdown2 = _interopRequireDefault(_markdown);

var _image = __webpack_require__(2);

var _image2 = _interopRequireDefault(_image);

var _list = __webpack_require__(3);

var _list2 = _interopRequireDefault(_list);

var _object = __webpack_require__(5);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _wurdWeb2.default;


_wurdWeb2.default.setBlockHelpers({
  Text: function Text(props) {
    return _react2.default.createElement(_text2.default, _extends({ block: this }, props));
  },
  Markdown: function Markdown(props) {
    return _react2.default.createElement(_markdown2.default, _extends({ block: this }, props));
  },
  Image: function Image(props) {
    return _react2.default.createElement(_image2.default, _extends({ block: this }, props));
  },
  List: function List(props) {
    return _react2.default.createElement(_list2.default, _extends({ block: this }, props));
  },
  Object: function Object(props) {
    return _react2.default.createElement(_object2.default, _extends({ block: this }, props));
  }
});

exports.WurdText = _text2.default;
exports.WurdMarkdown = _markdown2.default;
exports.WurdImage = _image2.default;
exports.WurdList = _list2.default;
exports.WurdObject = _object2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);
});