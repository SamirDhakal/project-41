class Drops {
    constructor(x, y) {
        options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Body.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);
    }

    update() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)});
        }
    }

    display() {
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}