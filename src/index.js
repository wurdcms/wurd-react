import React from 'react';
import wurd from 'wurd-web';
import WurdText from './text';
import WurdMarkdown from './markdown';
import WurdImage from './image';
import WurdList from './list';
import WurdObject from './object';

export default wurd;

wurd.setBlockHelpers({
  Text: function(props) {
    return React.createElement(WurdText, { block: this, ...props });
  },
  Markdown: function(props) {
    return React.createElement(WurdMarkdown, { block: this, ...props });
  },
  Image: function(props) {
    return React.createElement(WurdImage, { block: this, ...props });
  },
  List: function(props) {
    return React.createElement(WurdList, { block: this, ...props });
  },
  Object: function(props) {
    return React.createElement(WurdObject, { block: this, ...props });
  }
});

export {
  WurdText,
  WurdMarkdown,
  WurdImage,
  WurdList,
  WurdObject
};
