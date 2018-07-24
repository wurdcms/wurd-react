import React from 'react';
import wurd from 'wurd-web';


const WurdList = ({block, id, children, type = 'ul', keys = 'title', ...rest}) => {

  block = block || wurd.content;

  const elProps = { ...rest };

  if (block.editMode) {
    elProps['data-wurd-list'] = block.id(id);
    elProps['data-wurd-list-props'] = keys;
  };

  return React.createElement(type, elProps,
    block.map(id, (item, itemId) => children(item, itemId))
  );
};


export default WurdList;
