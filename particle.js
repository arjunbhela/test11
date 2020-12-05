class Particle {
    constructor(x,y,r) {
var options ={
    restitution:0.4,
    isStatic:false
}
this.r=r
this.body = Bodies.circle(x,y,this.r,options)
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)

    }
display() {
    var angle = this.body.angle
    push()
    translate(this.body.x,this.body.y)
    noStroke();
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    pop()
}


}