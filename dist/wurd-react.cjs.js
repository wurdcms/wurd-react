'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var wurd = require('wurd-web');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var wurd__default = /*#__PURE__*/_interopDefaultLegacy(wurd);

function WurdText({
  block,
  id, sid,
  type = 'span', component: Component = type,
  vars,
  ...rest
}) {
  block = block || wurd__default["default"].content;

  const text = block.text(id, vars);

  const elProps = { ...rest };

  if (wurd__default["default"].editMode) {
    const editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = block.id(sid || id);
  }

  return React__default["default"].createElement(Component, elProps, text);
}

function WurdMarkdown({
  block,
  id, sid,
  type = 'div', component: Component = type,
  vars, inline,
  ...rest
}) {
  block = block || wurd__default["default"].content;

  const text = block.markdown(id, vars, { inline });

  const elProps = {
    ...rest,
    dangerouslySetInnerHTML: { __html: text }
  };

  if (wurd__default["default"].editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return React__default["default"].createElement(Component, elProps);
}

function WurdImage({ block, id, sid, ...rest }) {
  block = block || wurd__default["default"].content;

  const url = block.text(id);

  const elProps = {
    ...rest,
    src: url
  };

  if (wurd__default["default"].editMode) {
    elProps['data-wurd-img'] = block.id(sid || id);
  }

  return React__default["default"].createElement('img', elProps);
}

function WurdList({
  block, id,
  children,
  type = 'ul', component: Component = type,
  keys = 'title',
  ...rest
}) {
  block = block || wurd__default["default"].content;

  const elProps = { ...rest };

  if (wurd__default["default"].editMode) {
    elProps['data-wurd-list'] = block.id(id);
    elProps['data-wurd-list-props'] = keys;
  }
  return React__default["default"].createElement(Component, elProps,
    block.map(id, (item, itemId) => children(item, itemId))
  );
}

/**
 * WurdObject is used to wrap multiple wurd items in one edit dialog
 * ```
 * @param {object} props
 * @param {string} [props.id]
 * @param {string|array} [props.keys] list of wurds ids
 */
function WurdObject({
  block,
  id, sid,
  keys,
  type = 'span', component: Component = type,
  children,
  ...rest
}) {
  block = block || wurd__default["default"].content;

  const elProps = { ...rest };

  if (wurd__default["default"].editMode) {
    // Normalise keys to string in form 'key1,key2'

    elProps['data-wurd-obj'] = block.id(sid || id);
    elProps['data-wurd-obj-props'] = Array.isArray(keys) ? keys.join(',') : keys;
  }

  return React__default["default"].createElement(Component, elProps, children);
}

wurd__default["default"].setBlockHelpers({
  Text: function (props) {
    return React__default["default"].createElement(WurdText, { block: this, ...props });
  },
  Markdown: function (props) {
    return React__default["default"].createElement(WurdMarkdown, { block: this, ...props });
  },
  Image: function (props) {
    return React__default["default"].createElement(WurdImage, { block: this, ...props });
  },
  List: function (props) {
    return React__default["default"].createElement(WurdList, { block: this, ...props });
  },
  Object: function (props) {
    return React__default["default"].createElement(WurdObject, { block: this, ...props });
  },
});

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function () { return wurd__default["default"]; }
});
exports.WurdImage = WurdImage;
exports.WurdList = WurdList;
exports.WurdMarkdown = WurdMarkdown;
exports.WurdObject = WurdObject;
exports.WurdText = WurdText;
