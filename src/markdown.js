import React from 'react';
import wurd from 'wurd-web';
import marked from 'marked';
import {replaceVars} from './utils';


const WurdMarkdown = ({id, sid, type = 'div', vars, ...rest}) => {

  let text = wurd.get(id) || ''; // Prevent error from Markdown parser by always passing a string

  // Replace variables with {{mustache}} style tags
  if (vars) {
    text = replaceVars(text, vars);
  }

  let elProps = {
    ...rest,
    dangerouslySetInnerHTML: { __html: marked(text) }
  };

  if (wurd.editMode) {
    elProps['data-wurd-md'] = sid || id;
  }

  return React.createElement(type, elProps);

};


export default WurdMarkdown;
