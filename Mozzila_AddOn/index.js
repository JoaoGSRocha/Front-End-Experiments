var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});
var selection = require("sdk/selection");
function myListener() {
  console.log("A selection has been made.");
}

function handleClick(state) {
  tabs.open("https://developer.mozilla.org/");
if (selection.text)
  console.log(selection.text);
}
