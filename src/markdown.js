import React from 'react';
import wurd from 'wurd-web';


const WurdMarkdown = ({block, id, sid, type = 'div', vars, ...rest}) => {

  block = block || wurd.content;

  const text = block.markdown(id, vars);

  const elProps = {
    ...rest,
    dangerouslySetInnerHTML: { __html: text }
  };

  if (block.editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return React.createElement(type, elProps);

};


export default WurdMarkdown;
