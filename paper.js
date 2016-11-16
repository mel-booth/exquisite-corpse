var images = []

var canvas = document.getElementById('paper')
    canvas.width = window.innerWidth * 0.2
    canvas.height = window.innerHeight * 0.4
var context = canvas.getContext('2d')

var mouse = {x: 0, y: 0};
var test = document.createElement('img')
test.src = "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"
console.log('adding a test image');


document.getElementById('Save').onclick=function(e){
  e.preventDefault()
  var img = canvas.toDataURL("image/png")
  document.body.appendChild(test)
  console.log(img);
}
// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAcvUlEQ…QIECBQIyDQa9yNSoAAAQIEUgUEeiqnYgQIECBAoEbg/wFWiy6vijmVoAAAAABJRU5ErkJggg=='


canvas.addEventListener('mousemove', function(evt) {
  mouse.x = evt.pageX - this.offsetLeft;
  mouse.y = evt.pageY - this.offsetTop;
  console.log(this.offsetTop, this.offsetLeft);
}, false);

context.lineWidth = 2;
context.lineCap = 'round';
context.strokeStyle = '#000000';

canvas.addEventListener('mousedown', function(evt) {
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', draw, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', draw, false);
}, false);

var draw = function() {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
}

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
