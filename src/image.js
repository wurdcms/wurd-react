import React from 'react'; // eslint-disable-line no-unused-vars
import wurd from 'wurd-web';


const WurdImage = (props) => {
  let {id} = props;

  let url = wurd.get(id);

  return (
    <img {...props} data-wurd-img={id} src={url} />
  );
};


export default WurdImage;
