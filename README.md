# React components for the Wurd CMS
Wurd is a service that lets you integrate a CMS into any website or app in minutes.  This module provides components for integrating content and inline editing into your React app as easily as possible.


## Example
```jsx
import wurd from 'wurd-react';

wurd.connect('my-app', {
  editMode: true
});

wurd.load('shared,homepage')
  .then(content => {
    //Access content via getters
    document.title = content.text('homepage.title');

    //Use blocks for accessing subsections of content
    const page = content.block('homepage');

    ReactDOM.render(
      <div>
        <h1><content.Text id="shared.company" /></h1>

        <h2><page.Text id="title" /></h2>

        <page.Image id="hero.image" width="300" />
        <page.Text id="hero.title" />
      </div>, 
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
### Text
Creates an editable text region.

![WurdText example](https://wurdcms.github.io/images/text-vars.gif)

```jsx
<content.Text
  id="title",             // Required
  type="h1",              // Defaults to `span` 
  vars={{name: 'John'}},  // Replaces mustache style tokens (e.g. `{{name}}`) with the given data
  // Other standard props (className, style etc.) can be passed too
/>
```

### Image
Creates an editable image (`<img>`).

![WurdImage example](https://wurdcms.github.io/images/image.gif)

```jsx
<content.Image
  id="hero.image",     //Required
  // Other standard props (className, style etc.) can be passed too
/>
```

### Markdown
Creates an editable text region that displays formatted Markdown.

NOTE: This uses dangerouslySetInnerHTML, [read up on it here](https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml).

![WurdMarkdown example](https://wurdcms.github.io/images/markdown.gif)

```jsx
<content.Markdown
  id="home.intro",        // Required
  type="div",             // Defaults to `div`
  vars={{name: 'John'}},  // Replaces mustache style tokens (e.g. `{{name}}`) with the given data
  // Other standard props (className, style etc.) can be passed too
/>
```

### List
Creates an editable list of content. The children passed will represent an item in the list.

```jsx
<content.List 
  id="team.members"       //Required
  keys="name"             //At least 1 property of the list item
>
  {item => 
    <li key={item.id()}>
      <item.Image id="pic" width="50" />
      <item.Text id="name" />
    </li>
  }
</content.List>
```


### Object
Allows editing a section of content, (like the properties of an object).

This editor is useful for:
- Off-page content such as metadata
- The content of complex page elements such as dropdowns, modals and popovers
- Editing many properties at once

```jsx
<content.Object
  id="meta"
  keys="title,description" // Required; will define with items can be edited
  type="span"              // Defaults to `div`
  // Other standard props (className, style etc.) can be passed too
/>
```
