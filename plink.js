class Plinko {
    constructor(x,y,r) {
var options ={
    restitution:0.4
}
this.r=r
this.body = Bodies.circle(x,y,this.r,options)
World.add(world,this.body)

    }
display() {
    var angle = this.body.angle
    push()
    translate(this.body.x,this.body.y)
    noStroke();
    fill("white")
    ellipseMode(RADIUS)
    ellipse(300,300,this.r,this.r)
    pop()
}


}