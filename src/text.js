import React from 'react';
import wurd from 'wurd-web';
import marked from 'marked';


const WurdText = ({id, sid, type, vars, markdown}) => {
  let text = wurd.get(id);

  // Replace variables with {{mustache}} style tags
  if (vars) {
    Object.keys(vars).forEach(key => {
      let val = vars[key];

      text = text.replace(`{{${key}}}`, val);
    });
  }

  if (markdown && text) { // Check for text first to prevent markdown error
    return (
      React.createElement(type || 'div', {
        'data-wurd-md': sid || id,
        'dangerouslySetInnerHTML': { __html: marked(text) }
      })
    );
  }

  return React.createElement(type || 'span', { 'data-wurd': sid || id }, text);

};


export default WurdText;
