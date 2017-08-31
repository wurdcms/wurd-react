/**
 * Entry point for the build system which starts up the application and renders it to the DOM
 */

import React from 'react';
import ReactDOM from 'react-dom';
import wurd from '../../../dist/wurd'; // In your app this should require the `wurd-react` module

import App from './app';


//Connect to Wurd CMS
wurd.connect('example', {
  editMode: 'querystring', //Add '?edit to the URL to trigger edit mode'
  lang: 'en'
});


// Load initial content (e.g. app name, titles etc.)
// Additional content can be loaded later as required; for example loading content by page
wurd.load('home,nav')
  .catch(err => console.error(err))
  .then(content => {

    ReactDOM.render(<App />, document.getElementById('root'));

    document.title = wurd.get('home.meta.title');

  });
