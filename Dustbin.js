class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0,
            friction: 0,
            density: 0.1,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

    }
}