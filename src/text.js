import React from 'react';


const WurdText = ({block, id, sid, type = 'span', vars, ...rest}) => {

  const text = block.text(id, vars);

  const elProps = { ...rest };

  if (block.editMode) {
    const editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = block.id(sid || id);
  }

  return React.createElement(type, elProps, text);

};


export default WurdText;
