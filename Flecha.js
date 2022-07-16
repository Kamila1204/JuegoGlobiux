class Flecha{
    constructor(x,y, width, height, angle){
      var options = {
        'restitution':0.8,
            'friction':1.0,
            'density':1.0
    }
      //super quiere decir que todo lo de constructor se copia aquí
      //para ya no andar escribiendo completo 
      //si quiero pponerle otras opciones, hay que quitar el super
      //super(x,y,50,50);
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 100;
      this.height = 20;
      this.image = loadImage ("Flechita.png");
      World.add(world, this.body);
      }
    
      display() {
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