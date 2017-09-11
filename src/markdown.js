import React from 'react';
import wurd from 'wurd-web';
import marked from 'marked';


const WurdMarkdown = ({id, sid, type = 'div', vars, ...rest}) => {

  let text = wurd.text(id, vars);

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
