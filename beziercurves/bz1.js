var frame = document.getElementById("cvs");
var ctx = frame.getContext("2d");


function drawShape(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo( (0.0000*w) + x, (0.9940*h) + y );
  ctx.bezierCurveTo( (-0.0200*w) + x, (1.0100*h) + y, (0.0600*w) + x, (0.3160*h) + y, (0.2133*w) + x, (0.5000*h) + y );
  ctx.bezierCurveTo( (0.5167*w) + x, (0.8640*h) + y, (0.3767*w) + x, (0.0080*h) + y, (0.5250*w) + x, (0.0420*h) + y );
  ctx.bezierCurveTo( (0.7417*w) + x, (0.0920*h) + y, (0.6567*w) + x, (0.7700*h) + y, (0.8400*w) + x, (0.4560*h) + y );
  ctx.bezierCurveTo( (0.8550*w) + x, (0.4320*h) + y, (0.9167*w) + x, (1.0460*h) + y, (0.9983*w) + x, (1.0020*h) + y );
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#99ff00';
  ctx.stroke();
}


drawShape(ctx, 20, 20, 800, 600);
