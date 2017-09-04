import React from 'react';
import wurd from 'wurd-web';
import {replaceVars} from './utils';


const WurdText = ({id, sid, type = 'span', vars, ...rest}) => {

  let text = wurd.get(id);

  let elProps = { ...rest };

  // Replace variables with {{mustache}} style tags
  if (vars) {
    text = replaceVars(text, vars);
  }

  if (wurd.editMode) {
    let editorType = vars ? 'data-wurd-md' : 'data-wurd';

    elProps[editorType] = sid || id;
  }

  return React.createElement(type, elProps, text);

};


export default WurdText;
