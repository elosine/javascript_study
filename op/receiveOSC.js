var osc = require('osc');
var port = new osc.UDPPort({
  localAddress: "127.0.0.1",
  localPort: 12321
});

port.on("message", function (oscMsg) {
  console.log(oscMsg.args[2]);
  let tn = document.createTextNode(oscMsg.args[2]);
  document.body.appendChild(tn);
})

port.open();
