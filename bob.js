class bob{

    constructor(x, y) {
        
                var option={
        
                       isStatic: true 
        
                }

                this.body=Bodies.circle(x, y, 100, option);

                World.add(World, this.body);
        
               
            }
        
             display() {
               
                push();
                 rectMode(CENTER)
                 fill("blue");
                // translate(this.body.position.x, this.body.position.y);
                // rotate(this.body.angle);
                 pop();        
                 
             }
        
        }
