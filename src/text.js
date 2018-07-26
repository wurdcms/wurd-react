import React from 'react';
import wurd from 'wurd-web';


const WurdText = ({block, id, sid, type = 'span', vars, ...rest}) => {

  block = block || wurd.content;

  const text = block.text(id, vars);

  const elProps = { ...rest };

  if (wurd.editMode) {
    const editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = block.id(sid || id);
  }

  return React.createElement(type, elProps, text);

};


export default WurdText;
