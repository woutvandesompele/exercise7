import Vector from './Vector.js';
export default class Ball {
    constructor($canvas, x, y, color) {
        this.$canvas = $canvas;
        this.ctx = $canvas.getContext('2d');
        // this.x = x;
        // this.y = y;
        // this.velocityX = 1;
        // this.velocityY = 1.3;
        this.color = color;
        this.size = 24;
        this.location = new Vector(x, y);
        this.velocity = new Vector(1.2, 1.3);
        this.acceleration =new Vector(-0.001,0.01);
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.rect(this.location.x, this.location.y, this.size, this.size);
        this.ctx.fill();
        this.ctx.closePath();
        this.location.add(this.velocity);
        // generate a decimal (float) between -0.9999and 0.9999
        this.acceleration.x = 1 - Math.random() * 2;
        this.acceleration.y = 1 - Math.random() * 2;
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.checkCollision();
    }
    checkCollision() {
        if (this.location.x > this.$canvas.width) {
            this.location.x = 0;
        }
        if (this.location.x < 0) {
            this.location.x = this.$canvas.width;
        }
        if (this.location.y > this.$canvas.height) {
            this.location.y = 0;
        }
        if (this.location.y < 0) {
            this.location.y = this.$canvas.width;
        }

        
    }
}