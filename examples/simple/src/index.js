/**
 * Entry point for the build system which starts up the application and renders it to the DOM
 */

import React from 'react';
import ReactDOM from 'react-dom';
import wurd from 'wurd-react';
import { marked } from 'marked';

import App from './app';


// Connect to Wurd CMS
wurd.connect('example', {
  editMode: 'querystring', // Add '?edit to the URL to trigger edit mode'
  markdown: marked,
});


// Load initial content (e.g. app name, titles etc.)
// Additional content can be loaded later as required; for example loading content by page
wurd.load('nav,home')
  .catch(err => console.error(err))
  .then(cms => {

    document.title = cms.text('home.meta.title');

    ReactDOM.render(<App />, document.getElementById('root'));

  });
