class Circle {
    x
    y
    radius
    constructor(x,y,radius) {
        this.x = x
        this.y = y
        this.radius = radius;
    }
    getRandomHex() {
        return Math.floor(Math.random()* 255);
    }
    getRandomColor() {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue +"," + green + ")"
    }
    createCircle(ctx) {
        let radius = Math.floor(Math.random()*80);
        let color = this.getRandomColor();
        let x = Math.random() * window.innerWidth;
        let y = Math.random()  * window.innerHeight;
        let circle = new Circle(x,y,radius);
        ctx.beginPath();
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
    createMultipleCircle(ctx) {
        for (let i = 0; i < 40; i++) {
            this.createCircle(ctx);
        }
    }
}
let ctx = document.getElementById("myCanVas").getContext("2d");
let circle = new Circle(100,100,100);
circle.createMultipleCircle(ctx)

function draw() {
    ctx.clearRect(0,0,1300,700)
    circle.createMultipleCircle(ctx)
    setTimeout(draw,1000)
}
draw()