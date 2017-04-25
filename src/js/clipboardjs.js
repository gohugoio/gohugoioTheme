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
