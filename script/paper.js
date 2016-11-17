var canvas, ctx
var mouseX, mouseY, mouseDown = 0

function draw(ctx,x,y,size) {
  ctx.fillStyle = "#000000"
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI*2, true)
  ctx.closePath()
  ctx.fill()
}

function clearCanvas(canvas,ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function onMouseDown() {
  mouseDown = 1
  draw(ctx, mouseX, mouseY, 2)
}

function onMouseUp() {
  mouseDown = 0
}

function onMouseMove(e) {
  getMousePos(e)
  if (mouseDown == 1) {
      draw(ctx, mouseX, mouseY, 2)
  }
}

function getMousePos(e) {
  if (!e)
      var e = event
  if (e.offsetX) {
      mouseX = e.offsetX
      mouseY = e.offsetY
  }
  else if (e.layerX) {
      mouseX = e.layerX
      mouseY = e.layerY
  }
 }

function init() {
  canvas = document.getElementById('paper')
  ctx = canvas.getContext('2d')
  canvas.addEventListener('mousedown', onMouseDown, false)
  canvas.addEventListener('mousemove', onMouseMove, false)
  window.addEventListener('mouseup', onMouseUp, false)
}


// var images = []
//
// var test = document.createElement('img')
// test.src = "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"
// console.log('adding a test image');
//
// document.getElementById('Save').onclick=function(e){
//   e.preventDefault()
//   var img = canvas.toDataURL("image/png")
//   document.body.appendChild(test)
//   console.log(img);
// }
// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAcvUlEQ…QIECBQIyDQa9yNSoAAAQIEUgUEeiqnYgQIECBAoEbg/wFWiy6vijmVoAAAAABJRU5ErkJggg=='
//
//NO BUENO

// document.getElementById('Save').onclick=function(e){
//   e.preventDefault()
//   var img = canvas.toDataURL("image/png")
//   document.getElementById('gallery').appendChild(test)
//   console.log(img);
//   document.write('<img src="'+img+'"/>')
// }

//To save images to images array - not working yet.
// document.getElementById('Save').onclick=function(e){
//   e.preventDefault()
//   var img = canvas.toDataURL("image/png")
//   images.push(img)
// }

// function convertCanvasToImage(canvas) {
// var image = new Image();
// image.src = canvas.toDataURL("image/png");
// return image;
// }
