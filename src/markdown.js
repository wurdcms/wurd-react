import React from 'react';
import wurd from 'wurd-web';


export default function WurdMarkdown({
  block,
  id, sid,
  type = 'div', component: Component = type,
  vars,
  ...rest
}) {
  block = block || wurd.content;

  const text = block.markdown(id, vars, rest);

  const elProps = {
    ...rest,
    dangerouslySetInnerHTML: { __html: text }
  };

  if (wurd.editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return React.createElement(Component, elProps);
}
