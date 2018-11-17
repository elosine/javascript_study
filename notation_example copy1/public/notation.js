

//ANIMATION /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
var frmRate = 60.0;
var box = document.getElementById('c1'), // the box
  boxPos = 150, // the box's position
  boxVelocity = 5.0/frmRate, // the box's velocity px per second
  delta = 0,
  lastFrameTimeMs = 0,
  limit = 500; // how far the box can go before it switches direction
var timestep = 1000 / frmRate;

function draw() {
  box.setAttribute('cx', boxPos);
  let bb = box.getBBox();
  console.log(bb.y);
}

function update(delta) {
  boxPos += boxVelocity * delta;
  // Switch directions if we go too far
  if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
}

function mainLoop(timestamp) {
  delta += timestamp - lastFrameTimeMs;
  lastFrameTimeMs = timestamp;
  while (delta >= timestep) {
    update(timestep);
    delta -= timestep;
  }
  draw();
  requestAnimationFrame(mainLoop);
}

// Start things off
requestAnimationFrame(mainLoop);
//END ANIMATION /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//MAKE SVG ELEMENTS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
var svgNS = "http://www.w3.org/2000/svg";
function mkcirc(id)
{
    var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle. for rectangle use "rectangle"
    myCircle.setAttributeNS(null, "id", id);
    myCircle.setAttributeNS(null, "cx", 1000);
    myCircle.setAttributeNS(null, "cy", 30);
    myCircle.setAttributeNS(null, "r", 15);
    myCircle.setAttributeNS(null, "fill", "Aqua");
    myCircle.setAttributeNS(null, "stroke", "none");

    document.getElementById("timeline_svg").appendChild(myCircle);
}

//END MAKE SVG ELEMENTS /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////



//OSC via websockets /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
var socket = io();
socket.on('mkcirc',
  function(msg) {
    mkcirc(msg);
  });
  //END OSC via websockets /////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "nframe".
var div = document.getElementById("nframe")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(140, 120);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(5, 5, 100);

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
