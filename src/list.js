import React from 'react';
import wurd from 'wurd-web';


const WurdList = ({id, children, type = 'ul', itemType = 'li', itemProps = {}, ...rest}) => {

  let elProps = { ...rest };

  if (wurd.editMode) {
    elProps['data-wurd-list'] = id;
  };

  return (
    <ul {...elProps}>
      {wurd.map(id, (item, itemId) => {

        let customItemProps = {
          key: itemId
        };

        if (wurd.editMode) {
          customItemProps['data-wurd-block'] = itemId;
        }

        let itemChildren = React.Children.map(children, child =>
          React.cloneElement(child, {
            id: [itemId, child.props.id].join(''),
            sid: child.props.id
          })
        );

        return React.createElement(itemType, {...itemProps, ...customItemProps}, itemChildren);
      })}
    </ul>
  );
};


export default WurdList;
