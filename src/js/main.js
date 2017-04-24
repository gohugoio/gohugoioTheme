import styles from './../css/main.css';

var docsearch = require('docsearch.js/dist/cdn/docsearch.js');
docsearch({
  apiKey: '41fdb7fafd9b009498ef9ab6d3fb1886',
  indexName: 'hugodocsconcept',
  inputSelector: '#search-input',
  debug: true // Set debug to true if you want to inspect the dropdown
});

var hljs = require('highlight.js')
var Clipboard = require('clipboard/dist/clipboard.js');
new Clipboard('.btn', {
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
  }).on('success', function(e) {
    successMessage(e.trigger, 'Copied!');
    e.clearSelection();
  }).on('error', function(e) {
    successMessage(e.trigger, fallbackMessage(e.action));
});

function successMessage(elem, msg) {
  elem.setAttribute('class', 'copied bg-primary-color absolute top-0 right-0 white tc mt1 ph3 pt2 pb2 f6 bn br2 br--top btn');
  elem.setAttribute('aria-label', msg);
}

function fallbackMessage(elem, action) {
  var actionMsg = '';
  var actionKey = (action === 'cut' ? 'X' : 'C');
  if (isMac) {
      actionMsg = 'Press ⌘-' + actionKey;
  } else {
      actionMsg = 'Press Ctrl-' + actionKey;
  }
  return actionMsg;
}







// TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
