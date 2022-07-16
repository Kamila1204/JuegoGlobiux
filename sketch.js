const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var globo1, globo2, globo3, globo4, globo5, globo6;
var arko;
var arrow;
var ground;
var kuerda;
var Canvas;
var backgroungImg;
var cambiaTamaño;

function preload(){ //carga imagenes
  backgroundImg = loadImage("Fondo.jpg");
  
}

function setup() { //corre una vez
  Canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  globo1 = new GlobosRb(1100, 100, 1,1);
  globo2 = new GlobosCs(1000, 300, 1,1);
  globo3 = new GlobosFr(900, 500, 1,1);
  globo4 = new GlobosK(700, 200, 1,1);
  globo5 = new GlobosNa(800, 400, 1,1);
  
  arrow = new Flecha(338, 570, 10, 10);

  ground = new Ground(600,height,1200,20);
  platform = new Ground(600, 690, 1200, 20);

  arko = new Arco(arrow.body,{x:240, y:552});
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  globo1.display();
  globo2.display();
  globo3.display();
  globo4.display();
  globo5.display();

  arko.display();

  arrow.display();

  ground.display();
  platform.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  arko.fly();
}

