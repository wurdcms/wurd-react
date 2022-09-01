/**
 * Entry point for the build system which starts up the application and renders it to the DOM
 */

import React from 'react';
import ReactDOM from 'react-dom';
import wurd from 'wurd-react';
import { marked } from 'marked';

import App from './app';

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}


// Connect to Wurd CMS
wurd.connect('example', {
  // Add '?edit to the URL to trigger edit mode'
  editMode: 'querystring',

  // Enable markdown
  markdown: marked,

  // Switch language when ?lang=es is added to the URL
  lang: new URLSearchParams(window.location.search).get('lang'),

  // Render the app whenever content is fetched
  onLoad: render,

  debug: true, // Log when content is loaded from server vs cache
  ttl: 10000, // How long the cache lasts for
});



// Load initial content (e.g. app name, titles etc.)
// Additional content can be loaded later as required; for example loading content by page
wurd.load('nav,home')
  .then(cms => {
    // The main content is rendered by the onLoad() callback passed above,
    // But we can also react to the specific load() call here
    document.title = cms.text('home.meta.title');
  });
