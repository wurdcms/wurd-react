import React from 'react';
import wurd from 'wurd-web';


/**
 * WurdObject is used to wrap multiple wurd items in one edit dialog
 * ```
 * @param {object} props
 * @param {string} [props.id]
 * @param {string|array} [props.keys] list of wurds ids
 */
export default function WurdObject({
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
