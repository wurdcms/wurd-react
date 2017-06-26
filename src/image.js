import React from 'react'; // eslint-disable-line no-unused-vars
import wurd from 'wurd-web';


const WurdImage = (props) => {
  let {id, sid, ...rest} = props;

  let url = wurd.get(id);

  return (
    <img {...rest} data-wurd-img={sid || id} src={url} />
  );
};


export default WurdImage;
