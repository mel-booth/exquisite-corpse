canvas = document.getElementById('paper')
ctx = canvas.getContext('2d')

var mouseX, mouseY, mouseDown = 0

var draw = function() {
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke()
}

canvas.addEventListener('mousemove', function(e) {
  getMousePos(e)
  if (mouseDown ==1){
    draw(ctx, mouseX, mouseY, 2)
  }
})

canvas.addEventListener('mousedown', function(evt) {
    ctx.beginPath()
    ctx.moveTo(mouseX, mouseY)

    canvas.addEventListener('mousemove', draw, false)
}, false)

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', draw, false)
}, false)

function clearCanvas(canvas,ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
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

var images = []
document.getElementById('save').onclick=function(e){
  e.preventDefault()
  var img = canvas.toDataURL("image/png")
  var gallery = document.createElement('img')
  gallery.src = img
  images.push(img)
  imgString = JSON.stringify(images)
  document.body.appendChild(gallery)
  console.log(imgString)
}


//NO BUENO


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
