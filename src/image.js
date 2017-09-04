import React from 'react'; // eslint-disable-line no-unused-vars
import wurd from 'wurd-web';


const WurdImage = ({id, sid, ...rest}) => {

  let url = wurd.get(id);

  let elProps = {
    ...rest,
    src: url
  };

  if (wurd.editMode) {
    elProps['data-wurd-img'] = sid || id;
  }

  return <img {...elProps} />;
};


export default WurdImage;
