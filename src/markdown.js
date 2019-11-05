import React from 'react';
import wurd from 'wurd-web';


const WurdMarkdown = ({ block, id, sid, component = 'div', vars, children, ...rest }) => {

  block = block || wurd.content;

  const text = block.markdown(id, vars);

  const elProps = {
    ...rest,
    dangerouslySetInnerHTML: { __html: text === undefined ? children : text } // todo markdown(children)
  };

  if (wurd.editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return React.createElement(component, elProps);

};


export default WurdMarkdown;
