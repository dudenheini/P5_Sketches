var font
var vehicles = []

function preload(){
  font = loadFont("bahnschrift.ttf")
}

function setup() {
  createCanvas(500, 300);
  background(51)

  var points = font.textToPoints("JAN",100,200,128)
  
  for (var i = 0; i < points.length;i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x,pt.y)
    vehicles.push(vehicle);
  }
}

function draw() {
  background(51)
  for (var i = 0; i < vehicles.length;i++){
    var v = vehicles[i]
    v.behaviors()
    v.update()
    v.show()
  }
}