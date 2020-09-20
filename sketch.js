var engine, world;

var umbrella, drops;
var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(600, 700);
   engine = Matter.Engine.create();
   world = engine.world; 

   umbrella = new Umbrella(300, 600);

   for(var i = 0; i < maxDrops; i++) {
       drops.push(new Drops(random(0, 400), random(0, 400)));
   }
}

function draw(){
    background(0);

    umbrella.display();
    drops.display();
    drops.update();
}   

