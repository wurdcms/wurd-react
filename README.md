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


## Components
### WurdText
Creates an editable text region.

![WurdText example](https://wurdcms.github.io/images/text-vars.gif)

```jsx
<WurdText
  id="section.itemId",    // Required
  type="h1",              // Defaults to `span` 
  vars={{name: 'John'}},  // Replaces mustache style tokens (e.g. `{{name}}`) with the given data
  // Other standard props (className, style etc.) can be passed too
/>
```

### WurdImage
Creates an editable image (`<img>`).

![WurdImage example](https://wurdcms.github.io/images/image.gif)

```jsx
<WurdImage
  id="section.itemId",     //Required
  // Other standard props (className, style etc.) can be passed too
/>
```

### WurdMarkdown
Creates an editable text region that displays formatted Markdown.

![WurdMarkdown example](https://wurdcms.github.io/images/markdown.gif)

NOTE: This uses dangerouslySetInnerHTML, [read up on it here](https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml).
```jsx
<WurdMarkdown
  id="section.itemId",    // Required
  type="div",             // Defaults to `div`
  vars={{name: 'John'}},  // Replaces mustache style tokens (e.g. `{{name}}`) with the given data
  // Other standard props (className, style etc.) can be passed too
/>
```

### WurdList
Creates an editable list of content. The children passed will represent an item in the list.

Any `WurdText`, `WurdItem` etc. children should be immediate children and use the `.itemId` notation (not the full item ID. Note the use of `.image` instead of `section.listId.${itemId}.image`:
```jsx
<WurdList 
  id="section.listId"     //Required
>
  <WurdImage id=".image"/>
  <WurdText id=".name" />
</WurdList>
```
