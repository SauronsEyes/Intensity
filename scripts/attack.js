function Attack(x,y,dir){
    this.x = x-30;
    this.y = y+30;
    this.r = 5;
    this.movement_speed = 15;
    this.toDelete = false;

    this.show = function(){
        noStroke();
        fill(236,165,0);
        ellipse(this.x, this.y,this.r*2,this.r*2);
        fill(255, 170, 51,4);
        for(i = 0; i < this.r*3; i++){
            ellipse(this.x,this.y, i*3);
          }
    }

    this.hits = function(flower){
        var d = dist(this.x-100, this.y-130, flower.x, flower.y);//changed the +20 and -20 for enemy.png
        if (d<this.r +flower.r)
        {
            return true;
        } else {
            return false;
        }
    }

    this.evaporate = function(){
            this.toDelete=true;

    }
    this.move = function(){
        if (dir=="u"){
            this.y = this.y -this.movement_speed ;
        }
        if (dir=="d"){
            this.y = this.y +this.movement_speed ;
        }
        if (dir=="r"){
            this.x = this.x +this.movement_speed ;
        }
        if (dir=="l"){
            this.x = this.x -this.movement_speed ;
        }
        
        
        
    }
}
