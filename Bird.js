class Bird extends BaseClass {
  constructor(x,y, width , height){
    super(x, y, width, height)
    
    this.image = loadImage("sprites/bird.png");
    World.add(world, this.body)
  }

  
  
}
