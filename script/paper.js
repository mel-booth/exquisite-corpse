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

var test = document.createElement('img')
test.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAUBklEQVR4Xu3dO481WXUG4DXD3CfgIiScOoExJsSBIUAkkPADLMeWAzsAy3/Af8BISEhIFjEiJsOJ5cAQQGhziUhBsmVPMPfxRdtzSnOm6e/rOrurau216xkJzUicqr3qWavr7ao6fc4z4R8CBAgQINAh8EzHNjYhQIAAAQIhQAwBAQIECHQJCJAuNhsRIECAgAAxAwQIECDQJSBAuthsRIAAAQICxAwQIECAQJeAAOlisxEBAgQICBAzQIAAAQJdAgKki81GBAgQICBAzAABAgQIdAkIkC42GxEgQICAADEDBAgQINAlIEC62GxEgAABAgLEDBAgQIBAl4AA6WKzEQECBAgIEDNAgAABAl0CAqSLzUYECBAgIEDMAAECBAh0CQiQLjYbESBAgIAAMQMECBAg0CUgQLrYbESAAAECAsQMECBAgECXgADpYrMRAQIECAgQM0CAAAECXQICpIvNRgQIECAgQMwAAQIECHQJCJAuNhsRIECAgAAxAwQIECDQJSBAuthsRIAAAQICxAwQIECAQJeAAOlisxEBAgQICBAzQIAAAQJdAgKki81GBAgQICBAzAABAgQIdAkIkC42GxEgQICAADEDBAgQINAlIEC62GxEgAABAgLEDBAgQIBAl4AA6WKzEQECBAgIEDNAgAABAl0CAqSLzUYECBAgIEDMAAECBAh0CQiQLjYbESBAgIAAMQMECBAg0CUgQLrYbESAAAECAsQMECBAgECXgADpYrMRAQIECAgQM0CAAAECXQICpIvNRgQIECAgQMwAAQIECHQJCJAuNhsRIECAgAAxAwQIECDQJSBAuthsRIAAAQICxAwQIECAQJeAAOlisxEBAgQICBAzQIAAAQJdAgKki81GBAgQICBAzAABAgQIdAkIkC42GxEgQICAAHn8DLwXER+77OZIz/+9rNn+/T8R8ZWI+MnjD8ceCBAgsE7gyBPeuorGfNV/RMQnIqJ5VTJr4fLsmKSqIkCgukClk+He1t+MiL+/OuE+zaadmNv/Xo+IT+1d2Mr9fyki/vlS/1L78u9Wa7tSenHlvryMAAECDwqcNUDev3OivQ9quUX03xHx/IOS476g1X99FdJudy233MatWmUECAwvcKYAaSfOu8e7hET7//42Ir4zfMf6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"
console.log('adding a test image')

document.getElementById('save').onclick=function(e){
  e.preventDefault()
  var img = canvas.toDataURL("image/png")
  document.body.appendChild(test)
  console.log(img);
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
