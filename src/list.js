import React from 'react';
import wurd from 'wurd-web';


const WurdList = ({id, children}) => {
  return (
    <ul data-wurd-list={id}>
      {wurd.map(id, (item, itemId) =>
        <li key={itemId} data-wurd-block={itemId}>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              id: [itemId, child.props.id].join(''),
              sid: child.props.id
            })
          )}
        </li>
      )}
    </ul>
  );
};


export default WurdList;
