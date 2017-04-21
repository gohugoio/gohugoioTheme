import styles from './../css/main.css';

var docsearch = require('docsearch.js/dist/cdn/docsearch.js');
docsearch({
  apiKey: '41fdb7fafd9b009498ef9ab6d3fb1886',
  indexName: 'hugodocsconcept',
  inputSelector: '#search-input',
  debug: true // Set debug to true if you want to inspect the dropdown
});







// TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
