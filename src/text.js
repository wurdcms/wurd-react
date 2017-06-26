import React from 'react';
import wurd from 'wurd-web';
import {replaceVars} from './utils';


const WurdText = ({id, sid, type = 'span', vars, ...rest}) => {

  let text = wurd.get(id);
  let editorType = 'data-wurd';

  // Replace variables with {{mustache}} style tags
  if (vars) {
    text = replaceVars(text, vars);
    editorType = 'data-wurd-md';
  }

  return React.createElement(type, {
    ...rest,
    [editorType]: sid || id
  }, text);

};


export default WurdText;
