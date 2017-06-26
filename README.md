# React components for the Wurd CMS
Wurd is a service that lets you integrate a CMS into any website or app in minutes.  This module provides components for integrating content and inline editing into your React app as easily as possible.


## Example
```jsx
import {wurd, WurdText} from 'wurd-react';

wurd.connect('myApp');

wurd.load('main,homepage')
  .then(() => {
    ReactDOM.render(
      <WurdText id="main.title"/>, 
      document.getElementById('root')
    );
  });
```

See more in the [examples](https://github.com/wurdcms/wurd-react/tree/master/examples) folder or run them with `npm run example`.


## Installation
Using NPM:
```
npm install wurd-react
```

## Usage
1. Create a Wurd account and app
2. Connect to a Wurd app with `wurd.connect('appName', {editMode: true})`
3. Load top level 'sections' of content you'll be using with `wurd.load('section')`
4. In your views/templates etc., use the provided components to integrate content and editing functionality: `<WurdText id="section.title"/>`
