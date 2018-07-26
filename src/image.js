import React from 'react';
import wurd from 'wurd-web';


const WurdImage = ({block, id, sid, ...rest}) => {

  block = block || wurd.content;

  const url = block.text(id);

  const elProps = {
    ...rest,
    src: url
  };

  if (wurd.editMode) {
    elProps['data-wurd-img'] = block.id(sid || id);
  }

  return React.createElement('img', elProps);

};


export default WurdImage;
