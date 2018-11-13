var box = document.getElementById('box'),
boxPos = 10,
boxVelocity = 2,
limit = 300;

var nt1 = document.getElementById('newtime1')
var nt2 = document.getElementById('newtime2')
var nt3 = document.getElementById('newtime3')
var nt4 = document.getElementById('newtime4')

var realnow = 0.0;
var rnupdate = 0.0;

var nowtxt = document.getElementById('nt');

nt1.addEventListener('click', nt1f)
nt2.addEventListener('click', nt2f)
//nt3.addEventListener('click', nt3f)
//nt4.addEventListener('click', nt4f)

function nt1f() {
  rnupdate = 0 - window.performance.now();
}

function nt2f() {
  rnupdate = 1000000 - window.performance.now();
}

function update() {
  boxPos += boxVelocity;
  if (boxPos >= limit || boxPos <=0) boxVelocity = -boxVelocity;
}

function draw() {
  box.style.left = boxPos + 'px';
}

function time(){
  realnow = rnupdate  + window.performance.now();
  nowtxt.innerHTML = realnow;
}

function mainLoop() {
  update();
  draw();
  time();
  requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
