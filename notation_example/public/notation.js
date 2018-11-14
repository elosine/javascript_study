var socket = io();
socket.on('gliss1viz',
  function(msg) {
    if (msg == 0) {
      document.getElementById("nframe").style.visibility = "hidden";
    } else {
      document.getElementById("nframe").style.visibility = "visible";
    }
  });


VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "nframe".
var div = document.getElementById("nframe")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
