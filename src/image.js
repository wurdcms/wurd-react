import React from 'react';


const WurdImage = ({block, id, sid, ...rest}) => {

  const url = block.text(id);

  const elProps = {
    ...rest,
    src: url
  };

  if (block.editMode) {
    elProps['data-wurd-img'] = block.id(sid || id);
  }

  return React.createElement('img', elProps);

};


export default WurdImage;
