import React from 'react';
import wurd from 'wurd-web';
export { default } from 'wurd-web';

function WurdText({
  block,
  id, sid,
  type = 'span', component: Component = type,
  vars,
  ...rest
}) {
  block = block || wurd.content;

  const text = block.text(id, vars);

  const elProps = { ...rest };

  if (wurd.editMode) {
    const editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = block.id(sid || id);
  }

  return React.createElement(Component, elProps, text);
}

function WurdMarkdown({
  block,
  id, sid,
  type = 'div', component: Component = type,
  vars,
  ...rest
}) {
  block = block || wurd.content;

  const text = block.markdown(id, vars);

  const elProps = {
    ...rest,
    dangerouslySetInnerHTML: { __html: text }
  };

  if (wurd.editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return React.createElement(Component, elProps);
}

function WurdImage({ block, id, sid, ...rest }) {
  block = block || wurd.content;

  const url = block.text(id);

  const elProps = {
    ...rest,
    src: url
  };

  if (wurd.editMode) {
    elProps['data-wurd-img'] = block.id(sid || id);
  }

  return React.createElement('img', elProps);
}

function WurdList({
  block, id,
  children,
  type = 'ul', component: Component = type,
  keys = 'title',
  ...rest
}) {
  block = block || wurd.content;

  const elProps = { ...rest };

  if (wurd.editMode) {
    elProps['data-wurd-list'] = block.id(id);
    elProps['data-wurd-list-props'] = keys;
  }
  return React.createElement(Component, elProps,
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
  block = block || wurd.content;

  const elProps = { ...rest };

  if (wurd.editMode) {
    // Normalise keys to string in form 'key1,key2'

    elProps['data-wurd-obj'] = block.id(sid || id);
    elProps['data-wurd-obj-props'] = Array.isArray(keys) ? keys.join(',') : keys;
  }

  return React.createElement(Component, elProps, children);
}

wurd.setBlockHelpers({
  Text: function (props) {
    return React.createElement(WurdText, { block: this, ...props });
  },
  Markdown: function (props) {
    return React.createElement(WurdMarkdown, { block: this, ...props });
  },
  Image: function (props) {
    return React.createElement(WurdImage, { block: this, ...props });
  },
  List: function (props) {
    return React.createElement(WurdList, { block: this, ...props });
  },
  Object: function (props) {
    return React.createElement(WurdObject, { block: this, ...props });
  },
});

export { WurdImage, WurdList, WurdMarkdown, WurdObject, WurdText };
