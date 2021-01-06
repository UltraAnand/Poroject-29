const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var firstrow = [];
var secondrow = [];
var thirdrow = [];
var toprow = [];
var ss;

function preload() {

}

function setup() {
  var canvas = createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(320, 350, 320, 20)
  ground2 = new Ground(650, 200, 250, 20)
  for (var i = 0; i < 7; i++) {
    firstrow.push(new Box(200 + i * 40, 300, "cyan"))
  }
  for (var i = 0; i < 5; i++) {
    secondrow.push(new Box(240 + i * 40, 250, "blue"))
  }
  for (var i = 0; i < 3; i++) {
    thirdrow.push(new Box(280 + i * 40, 200, "pink"))
  }
  for (var i = 0; i < 1; i++) {
    toprow.push(new Box(320 + i * 40, 150, "white"))
  }

  for (var i = 0; i < 5; i++) {
    secondrow.push(new Box(575 + i * 40, 170, "blue"))
  }
  for (var i = 0; i < 3; i++) {
    thirdrow.push(new Box(615 + i * 40, 120, "pink"))
  }
  for (var i = 0; i < 1; i++) {
    toprow.push(new Box(655 + i * 40, 70, "white"))
  }

  //polygon = Bodies.circle(1100,250,20, {density:3.5});
  polygon = new Ball(1100,250,20);
  //World.add(world, polygon);

  ss = new SlingShot(polygon.body,{x:1000,y:250})


}

function draw() {
  background("black");
  Engine.update(engine);
  ground1.display();
  ground2.display();
  for (let i = 0; i < firstrow.length; i++) {
    firstrow[i].display();
  };
  for (let i = 0; i < secondrow.length; i++) {
    secondrow[i].display();
  };
  for (let i = 0; i < thirdrow.length; i++) {
    thirdrow[i].display();
  };
  for (let i = 0; i < toprow.length; i++) {
    toprow[i].display();
  };
  ss.display();
  polygon.display();

  
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {
    x: mouseX,
    y: mouseY
  });
}


function mouseReleased() {
  ss.fly();
}
