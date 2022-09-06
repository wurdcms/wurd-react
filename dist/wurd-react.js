(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.wurd = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
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
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
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

  /**
   * @param {Object} data
   *
   * @return {String}
   */
  function encodeQueryString(data) {
    var parts = Object.keys(data).map(function (key) {
      var value = data[key];
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    });
    return parts.join('&');
  }
  /**
   * Replaces {{mustache}} style placeholders in text with variables
   *
   * @param {String} text
   * @param {Object} vars
   *
   * @return {String}
   */


  function replaceVars(text) {
    var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof text !== 'string') return text;
    return text.replace(/{{([\w.-]+)}}/g, function (_, key) {
      return vars[key] || '';
    });
  }

  var Store = /*#__PURE__*/function () {
    /**
     * @param {Object} rawContent           Initial content
     * @param {String} opts.storageKey      localStorage key
     * @param {Number} opts.ttl             cache time to live in ms (defaults to 1 hour)
     */
    function Store() {
      var _opts$ttl;

      var rawContent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Store);

      this.rawContent = rawContent;
      this.storageKey = opts.storageKey || 'wurdContent';
      this.ttl = (_opts$ttl = opts.ttl) !== null && _opts$ttl !== void 0 ? _opts$ttl : 3600000;
    }
    /**
     * Get a specific piece of content, top-level or nested
     *
     * @param {String} path e.g. 'section','section.subSection','a.b.c.d'
     * @return {Mixed}
     */


    _createClass(Store, [{
      key: "get",
      value: function get(path) {
        if (!path) return this.rawContent;
        return path.split('.').reduce(function (acc, k) {
          return acc && acc[k];
        }, this.rawContent);
      }
      /**
       * Load top-level sections of content from localStorage
       *
       * @param {String[]} sectionNames Names of top-level content sections to load e.g. ['main','nav']
       *    Unused here but likely to be used in future/other Store implementation
       * @param {Object} [options]
       * @param {String} [options.lang] Language
       * @return {Object} content
       */

    }, {
      key: "load",
      value: function load(sectionNames) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            lang = _ref.lang;

        var rawContent = this.rawContent,
            storageKey = this.storageKey,
            ttl = this.ttl;

        try {
          // Find cached content
          var cachedContent = JSON.parse(localStorage.getItem(storageKey));
          var metaData = cachedContent && cachedContent._wurd; // Check if it has expired

          if (!cachedContent || !metaData || metaData.savedAt + ttl < Date.now()) {
            return rawContent;
          } // Check it's in the correct language


          if (metaData.lang !== lang) {
            return rawContent;
          } // Remove metadata


          delete cachedContent['_wurd']; // Add cached content to memory content

          Object.assign(rawContent, cachedContent);
          return rawContent;
        } catch (err) {
          console.error('Wurd: error loading cache:', err);
          return rawContent;
        }
      }
      /**
       * Save top-level sections of content to localStorage
       *
       * @param {Object} sections
       * @param {Boolean} [options.cache] Whether to save the content to cache
       */

    }, {
      key: "save",
      value: function save(sections) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            lang = _ref2.lang;

        var rawContent = this.rawContent,
            storageKey = this.storageKey;
        Object.assign(rawContent, sections);
        localStorage.setItem(storageKey, JSON.stringify(_objectSpread2(_objectSpread2({}, rawContent), {}, {
          _wurd: {
            savedAt: Date.now(),
            lang: lang
          }
        })));
      }
      /**
       * Clears the localStorage cache
       */

    }, {
      key: "clear",
      value: function clear() {
        localStorage.removeItem(this.storageKey);
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
       * @param {Boolean} [opts.inline]
       *
       * @return {Mixed}
       */

    }, {
      key: "markdown",
      value: function markdown(path, vars, opts) {
        var _this$wurd$markdown = this.wurd.markdown,
            parse = _this$wurd$markdown.parse,
            parseInline = _this$wurd$markdown.parseInline;
        var text = this.text(path, vars);

        if (opts !== null && opts !== void 0 && opts.inline && parseInline) {
          return parseInline(text);
        }

        if (parse) {
          return parse(text);
        }

        return text;
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

  var Wurd = /*#__PURE__*/function () {
    /**
     * @param {String} appName
     */
    function Wurd(appName) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Wurd);

      this.widgetUrl = 'https://widget.wurd.io/widget.js';
      this.apiUrl = 'https://api.wurd.io';
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
     * @param {Boolean} [options.lang] Specific language to use
     * @param {Boolean|String} [options.editMode] Options for enabling edit mode: `true` or `'querystring'`
     * @param {Boolean} [options.draft] If true, loads draft content; otherwise loads published content
     * @param {Object} [options.markdown] Enable markdown parsing. Works directly with `marked` npm package
     *                                    or an object of shape {parse: Function, parseInline: Function}
     * @param {Object} [options.blockHelpers] Functions to help accessing content and creating editable regions
     * @param {Object} [options.rawContent] Content to populate the store with
     * @param {Function} [options.onLoad] Callback that runs whenever load() completes. Signature: onLoad(content) => {}
     */


    _createClass(Wurd, [{
      key: "connect",
      value: function connect(appName) {
        var _this4 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.app = appName;
        this.draft = false;
        this.editMode = false; // Set allowed options

        ['draft', 'lang', 'markdown', 'debug', 'onLoad'].forEach(function (name) {
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
          this.store.save(options.rawContent, {
            lang: options.lang
          });
        }

        if (options.storageKey) this.store.storageKey = options.storageKey;
        if (options.ttl) this.store.ttl = options.ttl;

        if (options.blockHelpers) {
          this.setBlockHelpers(options.blockHelpers);
        }

        return this;
      }
      /**
       * Loads sections of content so that items are ready to be accessed with #get(id)
       *
       * @param {String|Array<String>} sectionNames     Top-level sections to load e.g. `main,home`
       */

    }, {
      key: "load",
      value: function load(sectionNames) {
        var app = this.app,
            store = this.store,
            lang = this.lang,
            editMode = this.editMode,
            debug = this.debug,
            onLoad = this.onLoad,
            content = this.content;

        if (!app) {
          return Promise.reject(new Error('Use wurd.connect(appName) before wurd.load()'));
        } // Normalise string sectionNames to array


        var sections = typeof sectionNames === 'string' ? sectionNames.split(',') : sectionNames; // When in editMode we skip the cache completely

        if (editMode) {
          return this._fetchSections(sections).then(function (result) {
            store.save(result, {
              lang: lang
            }); // Clear the cache so changes are reflected immediately when out of editMode

            store.clear(); // Pass main content Block to callbacks

            if (onLoad) onLoad(content);
            return content;
          });
        } // Check for cached sections


        var cachedContent = store.load(sections, {
          lang: lang
        });
        var uncachedSections = sections.filter(function (section) {
          return cachedContent[section] === undefined;
        });
        if (debug) console.info('Wurd: from cache:', sections.filter(function (section) {
          return cachedContent[section] !== undefined;
        })); // Return now if all content was in cache

        if (uncachedSections.length === 0) {
          // Pass main content Block to callbacks
          if (onLoad) onLoad(content);
          return Promise.resolve(content);
        } // Otherwise fetch remaining sections


        return this._fetchSections(uncachedSections).then(function (result) {
          // Cache for next time
          store.save(result, {
            lang: lang
          }); // Pass main content Block to callbacks

          if (onLoad) onLoad(content);
          return content;
        });
      }
    }, {
      key: "_fetchSections",
      value: function _fetchSections(sectionNames) {
        var _this5 = this;

        var app = this.app,
            debug = this.debug; // Some sections not in cache; fetch them from server

        if (debug) console.info('Wurd: from server:', sectionNames); // Build request URL

        var params = ['draft', 'lang'].reduce(function (memo, param) {
          if (_this5[param]) memo[param] = _this5[param];
          return memo;
        }, {});
        var url = "".concat(this.apiUrl, "/apps/").concat(app, "/content/").concat(sectionNames, "?").concat(encodeQueryString(params));
        return this._fetch(url).then(function (result) {
          if (result.error) {
            if (result.error.message) {
              throw new Error(result.error.message);
            } else {
              throw new Error("Error loading ".concat(sectionNames));
            }
          }

          return result;
        });
      }
    }, {
      key: "_fetch",
      value: function _fetch(url) {
        return fetch(url).then(function (res) {
          if (!res.ok) throw new Error("Error loading ".concat(url, ": ").concat(res.statusText));
          return res.json();
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
        script.src = this.widgetUrl;
        script.async = true;
        script.setAttribute('data-app', app);

        if (lang) {
          script.setAttribute('data-lang', lang);
        }

        var prevScript = document.body.querySelector("script[src=\"".concat(this.widgetUrl, "\"]"));

        if (prevScript) {
          document.body.removeChild(prevScript);
        }

        document.body.appendChild(script);
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

  var _excluded$4 = ["block", "id", "sid", "type", "component", "vars"];
  function WurdText(_ref) {
    var block = _ref.block,
        id = _ref.id,
        sid = _ref.sid,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'span' : _ref$type,
        _ref$component = _ref.component,
        Component = _ref$component === void 0 ? type : _ref$component,
        vars = _ref.vars,
        rest = _objectWithoutProperties(_ref, _excluded$4);

    block = block || instance.content;
    var text = block.text(id, vars);

    var elProps = _objectSpread2({}, rest);

    if (instance.editMode) {
      var editorType = vars ? 'data-wurd-md' : 'data-wurd';
      elProps[editorType] = block.id(sid || id);
    }

    return /*#__PURE__*/React__default["default"].createElement(Component, elProps, text);
  }

  var _excluded$3 = ["block", "id", "sid", "type", "component", "vars"];
  function WurdMarkdown(_ref) {
    var block = _ref.block,
        id = _ref.id,
        sid = _ref.sid,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'div' : _ref$type,
        _ref$component = _ref.component,
        Component = _ref$component === void 0 ? type : _ref$component,
        vars = _ref.vars,
        rest = _objectWithoutProperties(_ref, _excluded$3);

    block = block || instance.content;
    var text = block.markdown(id, vars);

    var elProps = _objectSpread2(_objectSpread2({}, rest), {}, {
      dangerouslySetInnerHTML: {
        __html: text
      }
    });

    if (instance.editMode) {
      elProps['data-wurd-md'] = block.id(sid || id);
    }

    return /*#__PURE__*/React__default["default"].createElement(Component, elProps);
  }

  var _excluded$2 = ["block", "id", "sid"];
  function WurdImage(_ref) {
    var block = _ref.block,
        id = _ref.id,
        sid = _ref.sid,
        rest = _objectWithoutProperties(_ref, _excluded$2);

    block = block || instance.content;
    var url = block.text(id);

    var elProps = _objectSpread2(_objectSpread2({}, rest), {}, {
      src: url
    });

    if (instance.editMode) {
      elProps['data-wurd-img'] = block.id(sid || id);
    }

    return /*#__PURE__*/React__default["default"].createElement('img', elProps);
  }

  var _excluded$1 = ["block", "id", "children", "type", "component", "keys"];
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
        rest = _objectWithoutProperties(_ref, _excluded$1);

    block = block || instance.content;

    var elProps = _objectSpread2({}, rest);

    if (instance.editMode) {
      elProps['data-wurd-list'] = block.id(id);
      elProps['data-wurd-list-props'] = keys;
    }
    return /*#__PURE__*/React__default["default"].createElement(Component, elProps, block.map(id, function (item, itemId) {
      return children(item, itemId);
    }));
  }

  var _excluded = ["block", "id", "sid", "keys", "type", "component", "children"];
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
        rest = _objectWithoutProperties(_ref, _excluded);

    block = block || instance.content;

    var elProps = _objectSpread2({}, rest);

    if (instance.editMode) {
      // Normalise keys to string in form 'key1,key2'
      elProps['data-wurd-obj'] = block.id(sid || id);
      elProps['data-wurd-obj-props'] = Array.isArray(keys) ? keys.join(',') : keys;
    }

    return /*#__PURE__*/React__default["default"].createElement(Component, elProps, children);
  }

  instance.setBlockHelpers({
    Text: function Text(props) {
      return /*#__PURE__*/React__default["default"].createElement(WurdText, _objectSpread2({
        block: this
      }, props));
    },
    Markdown: function Markdown(props) {
      return /*#__PURE__*/React__default["default"].createElement(WurdMarkdown, _objectSpread2({
        block: this
      }, props));
    },
    Image: function Image(props) {
      return /*#__PURE__*/React__default["default"].createElement(WurdImage, _objectSpread2({
        block: this
      }, props));
    },
    List: function List(props) {
      return /*#__PURE__*/React__default["default"].createElement(WurdList, _objectSpread2({
        block: this
      }, props));
    },
    Object: function Object(props) {
      return /*#__PURE__*/React__default["default"].createElement(WurdObject, _objectSpread2({
        block: this
      }, props));
    }
  });

  exports.WurdImage = WurdImage;
  exports.WurdList = WurdList;
  exports.WurdMarkdown = WurdMarkdown;
  exports.WurdObject = WurdObject;
  exports.WurdText = WurdText;
  exports["default"] = instance;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
