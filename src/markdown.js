import React from 'react';
import wurd from 'wurd-web';


export default function WurdMarkdown({
  block,
  id, sid,
  type = 'div', component: Component = type,
  vars, inline,
  ...rest
}) {
  block = block || wurd.content;

  const text = block.markdown(id, vars, { inline });

  const elProps = {
    ...rest,
    dangerouslySetInnerHTML: { __html: text }
  };

  if (wurd.editMode) {
    elProps['data-wurd-md'] = block.id(sid || id);
  }

  return React.createElement(Component, elProps);
}
