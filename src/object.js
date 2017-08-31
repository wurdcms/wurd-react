import React from 'react';
import wurd from 'wurd-web';


const WurdObject = ({id, sid, type = 'span', keys, children, ...rest}) => {

  // Only render Wurd wrapper in edit mode
  if (!wurd.editMode) return children;

  // Normalise propNames to string in form prop1,prop2
  if (Array.isArray(keys)) {
    keys = keys.join(',');
  }

  return React.createElement(type, {
    ...rest,
    'data-wurd-obj': sid || id,
    'data-wurd-obj-props': keys
  }, children);

};


export default WurdObject;
