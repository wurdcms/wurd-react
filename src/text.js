import React from 'react';
import wurd from 'wurd-web';


const WurdText = ({ block, id, sid, component = 'span', vars, children, ...rest }) => {

  block = block || wurd.content;

  const text = block.text(id, vars);

  const elProps = { ...rest };

  if (wurd.editMode) {
    const editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = block.id(sid || id);
  }

  return React.createElement(component, elProps, text === undefined ? children : text);

};


export default WurdText;
