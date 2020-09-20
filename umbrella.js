class Umbrella {
    constructor(x, y) {
        var options ={
            isStatic:true
        }
        this.body = Matter.Bodies.circle(x, y, 200, options);
        this.radius = 200;
        this.image = loadImage("umbrella.png");
        Matter.World.add(world, this.body);
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}