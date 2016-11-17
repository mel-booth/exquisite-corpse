// var canvas = document.getElementById('paper')
// var context = canvas.getContext('2d')
//
// var images = []
//
// var mouse = {x: 0, y: 0};
// var test = document.createElement('img')
// test.src = "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"
// console.log('adding a test image');
//
//
// document.getElementById('Save').onclick=function(e){
//   e.preventDefault()
//   var img = canvas.toDataURL("image/png")
//   document.body.appendChild(test)
//   console.log(img);
// }
// // 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAcvUlEQ…QIECBQIyDQa9yNSoAAAQIEUgUEeiqnYgQIECBAoEbg/wFWiy6vijmVoAAAAABJRU5ErkJggg=='
//
//
// canvas.addEventListener('mousemove', function(evt) {
//   mouse.x = evt.pageX - this.offsetLeft;
//   mouse.y = evt.pageY - this.offsetTop;
//   console.log(this.offsetTop, this.offsetLeft);
// }, false);
//
// context.lineWidth = 2;
// context.lineCap = 'round';
// context.strokeStyle = '#000000';
//
// canvas.addEventListener('mousedown', function(evt) {
//     context.beginPath();
//     context.moveTo(mouse.x, mouse.y);
//
//     canvas.addEventListener('mousemove', draw, false);
// }, false);
//
// canvas.addEventListener('mouseup', function() {
//     canvas.removeEventListener('mousemove', draw, false);
// }, false);
//
// var draw = function() {
//     context.lineTo(mouse.x, mouse.y);
//     context.stroke();
// }

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



var canvas,ctx;

// Variables to keep track of the mouse position and left-button status
var mouseX,mouseY,mouseDown=0;

// Draws a dot at a specific position on the supplied canvas name
// Parameters are: A canvas context, the x position, the y position, the size of the dot
function drawDot(ctx,x,y,size) {
    // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)
    r=0; g=0; b=0; a=255;

    // Select a fill style
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    // Draw a filled circle
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

// Clear the canvas context using the canvas width and height
function clearCanvas(canvas,ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Keep track of the mouse button being pressed and draw a dot at current location
function sketchpad_mouseDown() {
    mouseDown=1;
    drawDot(ctx,mouseX,mouseY,12);
}

// Keep track of the mouse button being released
function sketchpad_mouseUp() {
    mouseDown=0;
}

// Keep track of the mouse position and draw a dot if mouse button is currently pressed
function sketchpad_mouseMove(e) {
    // Update the mouse co-ordinates when moved
    getMousePos(e);

    // Draw a dot if the mouse button is currently being pressed
    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,12);
    }
}

// Get the current mouse position relative to the top-left of the canvas
function getMousePos(e) {
    if (!e)
        var e = event;

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
 }


// Set-up the canvas and add our event handlers after the page has loaded
function init() {
    // Get the specific canvas element from the HTML document
    canvas = document.getElementById('sketchpad');

    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext)
        ctx = canvas.getContext('2d');

    // Check that we have a valid context to draw on/with before adding event handlers
    if (ctx) {
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);
    }
}
