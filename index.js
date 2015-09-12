var data = require("sdk/self").data;
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "firesense-link",
  label: "Firesense",
  icon: {
    "16": "./icons/icon_16.png",
    "32": "./icons/icon_32.png",
    "64": "./icons/icon_64.png",
    "128": "./icons/icon_128.png"
  },
  onClick: handleClick
});

function handleClick(state) {
    tabs.open(data.url("source/index.html"));
}