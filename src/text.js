import React from 'react';
import wurd from 'wurd-web';


const WurdText = ({id, sid, type = 'span', vars, ...rest}) => {

  let text = wurd.text(id, vars);

  let elProps = { ...rest };

  if (wurd.editMode) {
    let editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = sid || id;
  }

  return React.createElement(type, elProps, text);

};


export default WurdText;
