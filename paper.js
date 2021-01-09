class paper {
    constructor(x, y, r) {
       var options = { 
            'restitution': 0.3,
            'friction' : 0.5,
            'density' : 1.2
         }
         this.body = Bodies.circle(50,545,55,options)
         this.radius=55;
         World.add (world, this.body);
     }
         display() {
             var pos = this.body.position;
             push();
             translate(pos.x, pos.y);
             rotate(angle);
             rectMode(CENTER);
             strokeWeight(4);
             stroke('blue');
             fill ('255,0,0');
              ellipse(0, 0, this.radius, this.radius);
             pop();     
         }
 };

 //(56, 46, 55, 55); 