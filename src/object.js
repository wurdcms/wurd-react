import React from 'react';
import wurd from 'wurd-web';


const WurdObject = ({id, sid, type = 'span', keys, children, ...rest}) => {

  let elProps = { ...rest };

  if (wurd.editMode) {
    // Normalise keys to string in form 'key1,key2'
    if (Array.isArray(keys)) {
      keys = keys.join(',');
    }

    elProps['data-wurd-obj'] = sid || id;
    elProps['data-wurd-obj-props'] = keys;
  }

  return React.createElement(type, elProps, children);

};


export default WurdObject;
