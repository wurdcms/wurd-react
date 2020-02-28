import React from 'react';
import wurd from 'wurd-web';

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

  block = block || wurd.content;
  var text = block.text(id, vars);

  var elProps = _objectSpread2({}, rest);

  if (wurd.editMode) {
    var editorType = vars ? 'data-wurd-md' : 'data-wurd';
    elProps[editorType] = block.id(sid || id);
  }

  return React.createElement(Component, elProps, text);
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

  block = block || wurd.content;
  var text = block.markdown(id, vars);

  var elProps = _objectSpread2({}, rest, {
    dangerouslySetInnerHTML: {
      __html: text
    }
  });

  if (wurd.editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return React.createElement(Component, elProps);
}

function WurdImage(_ref) {
  var block = _ref.block,
      id = _ref.id,
      sid = _ref.sid,
      rest = _objectWithoutProperties(_ref, ["block", "id", "sid"]);

  block = block || wurd.content;
  var url = block.text(id);

  var elProps = _objectSpread2({}, rest, {
    src: url
  });

  if (wurd.editMode) {
    elProps['data-wurd-img'] = block.id(sid || id);
  }

  return React.createElement('img', elProps);
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

  block = block || wurd.content;

  var elProps = _objectSpread2({}, rest);

  if (wurd.editMode) {
    elProps['data-wurd-list'] = block.id(id);
    elProps['data-wurd-list-props'] = keys;
  }
  return React.createElement(Component, elProps, block.map(id, function (item, itemId) {
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

  block = block || wurd.content;

  var elProps = _objectSpread2({}, rest);

  if (wurd.editMode) {
    // Normalise keys to string in form 'key1,key2'
    elProps['data-wurd-obj'] = block.id(sid || id);
    elProps['data-wurd-obj-props'] = Array.isArray(keys) ? keys.join(',') : keys;
  }

  return React.createElement(Component, elProps, children);
}

wurd.setBlockHelpers({
  Text: function Text(props) {
    return React.createElement(WurdText, _objectSpread2({
      block: this
    }, props));
  },
  Markdown: function Markdown(props) {
    return React.createElement(WurdMarkdown, _objectSpread2({
      block: this
    }, props));
  },
  Image: function Image(props) {
    return React.createElement(WurdImage, _objectSpread2({
      block: this
    }, props));
  },
  List: function List(props) {
    return React.createElement(WurdList, _objectSpread2({
      block: this
    }, props));
  },
  Object: function Object(props) {
    return React.createElement(WurdObject, _objectSpread2({
      block: this
    }, props));
  }
});

export default wurd;
export { WurdImage, WurdList, WurdMarkdown, WurdObject, WurdText };
