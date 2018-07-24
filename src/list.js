import React from 'react';


const WurdList = ({block, id, children, type = 'ul', ...rest}) => {

  const elProps = { ...rest };

  if (block.editMode) {
    elProps['data-wurd-list'] = block.id(id);
  };

  return React.createElement(type, elProps, 
    block.map(id, (item, itemId) => children(item, itemId))
  );
};


export default WurdList;
