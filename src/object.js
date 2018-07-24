import React from 'react';


const WurdObject = ({block, id, sid, type = 'span', keys, children, ...rest}) => {

  const elProps = { ...rest };

  if (block.editMode) {
    // Normalise keys to string in form 'key1,key2'
    if (Array.isArray(keys)) {
      keys = keys.join(',');
    }

    elProps['data-wurd-obj'] = block.id(sid || id);
    elProps['data-wurd-obj-props'] = keys;
  }

  return React.createElement(type, elProps, children);

};


export default WurdObject;
