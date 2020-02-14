import React from 'react';
import wurd from 'wurd-web';


export default function WurdList({
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
  };

  return React.createElement(Component, elProps,
    block.map(id, (item, itemId) => children(item, itemId))
  );
}
