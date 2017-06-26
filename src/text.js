import React from 'react';
import wurd from 'wurd-web';
import {replaceVars} from './utils';


const WurdText = ({id, sid, type = 'span', vars, ...rest}) => {

  let text = wurd.get(id);

  // Replace variables with {{mustache}} style tags
  if (vars) text = replaceVars(text, vars);

  return React.createElement(type, {
    ...rest,
    'data-wurd': sid || id
  }, text);

};


export default WurdText;
