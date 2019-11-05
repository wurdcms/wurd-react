import React from 'react';
import wurd from 'wurd-web';


const WurdObject = ({ block, id, sid, component = 'span', keys, children, ...rest }) => {

  block = block || wurd.content;

  const elProps = { ...rest };

  if (wurd.editMode) {
    // Normalise keys to string in form 'key1,key2'
    if (Array.isArray(keys)) {
      keys = keys.join(',');
    }

    elProps['data-wurd-obj'] = block.id(sid || id);
    elProps['data-wurd-obj-props'] = keys;
  }

  return React.createElement(component, elProps, children);

};


export default WurdObject;
