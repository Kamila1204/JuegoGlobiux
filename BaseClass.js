class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8, //rebote
            'friction':1.0, //Rozarse
            'density':1.0 //peso
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Fondo.jpg");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        /*Si no tuviese push-pop todos los objetos tendrían
        la misma confi y no solo los indicados*/
        push();//activa-desactiva una configuracion
        //si se golpea el objeto, cambia constantemente
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}