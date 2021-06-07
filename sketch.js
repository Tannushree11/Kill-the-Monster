const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;


var bgImage;
var ground, hero;
var rope;
var monster;

function preload() {
  bgImage = loadImage("sky1.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(200, 200, 175, 200);

  rope = new Fly(hero.body,{x:300, y:100});

  ground = new Ground(500, 400, 25, 1500);

  monster = new Monster(800, 300, 175, 200);

}

function draw() {
  background(bgImage);

  hero.view();
  rope.view();
  ground.view();
  monster.view();
}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
  rope.remove();
}