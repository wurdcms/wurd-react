import React from 'react';
import wurd from 'wurd-web';
import marked from 'marked';
import {replaceVars} from './utils';


const WurdMarkdown = ({id, sid, type = 'div', vars, ...rest}) => {

  let text = wurd.get(id);

  // Replace variables with {{mustache}} style tags
  if (vars) text = replaceVars(text, vars);

  return (
    React.createElement(type, {
      ...rest,
      'data-wurd-md': sid || id,
      'dangerouslySetInnerHTML': { __html: marked(text) }
    })
  );

};


export default WurdMarkdown;
