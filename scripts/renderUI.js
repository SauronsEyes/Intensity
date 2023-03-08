function RenderUI(character)
{
    this.healthImages = [];
    this.overlayImages = [];
    this.healthBars = 10;
    this.rainParticles = [];
    for(let i =0; i<200;i++)
    {
        this.rainParticles[i] = new Rain();
    }
    this.renderBloodOverlay = function()
    {
        image(this.overlayImages[0],0,0,windowWidth,windowHeight);   
    }
    this.renderScore = function(player)
    {
        textSize(40);
        textAlign(RIGHT);
        fill(255,255,255);

        if (renderMenu.mode=="TIME TRIAL"){
            if (renderMenu.selectDifficulty==1){
                kills_needed = 200
            } else if(renderMenu.selectDifficulty==2) {
                kills_needed = 400
            } else {
                kills_needed = 100
            }
            if (kills_needed-player.score==0){
                kills_needed= player.score+150;
                timer+=10000;
            }
            text(`TIME: ${timer/100}`,0,40,windowWidth-100,50);
            text(`KILLS NEEDED: ${kills_needed-player.score}`,0,80,windowWidth-100,50);
        }   else {
        
        text(`Score: ${player.score}`,0,40,windowWidth-100,50);

        }
    }
    this.renderHealth = function()
    {
        if(character.health <30)
        {   
            // tint(255, 127);
            this.renderBloodOverlay();
            // tint(255, 255);  
        }
        
        let initial = 0;
        for(let i=0;i<this.healthBars;i++)
        {
            
            image(this.healthImages[0],(i+1)*30+10,10, 30,30);
            if(character.health> initial)
            {
                image(this.healthImages[1],(i+1)*30+10,10, 30,30);
            }
            else{
                image(this.healthImages[2],(i+1)*30+10,10,30,30);
            }
            initial += (100/this.healthBars);
            
        }   
    }
    this.renderRainParticles = function()
    {
        let i=0;
        this.rainParticles.map((rainParticle)=>
        {
            rainParticle.show();
            rainParticle.move();
            if(rainParticle.y>1920)
            {
                this.rainParticles[i] = new Rain();
            }
            i+=1;
        })
    }
    
    this.init_images= function(path){
        this.healthImages[0] = loadImage(`${path}/border.png`);
        this.healthImages[1] = loadImage(`${path}/full.png`);
        this.healthImages[2] = loadImage(`${path}/empty.png`);
        this.overlayImages[0] = loadImage(`${path}bloodOverlay.png`);
    }
    
}

let pickups = ["replenisher","health_pack","revive"];
function characterEssentials(x,y,pickup_type = pickups[Math.floor(Math.random() * pickups.length)]){
    this.images = []
    this.x = x;
    this.y = y;
    this.used = false;
    this.type = {replenisher:{images_path:""},health_pack:{images_path:"assets/pickups/health_pack/"}, revive:{images_path:""}};
    let no_of_frames = 11
    this.init_images= function(){
        for (let i=1;i<no_of_frames+1;i++){
            this.images[i-1]=loadImage(`${this.type[pickup_type].images_path}${pickup_type} (${i}).png`);  
        }   
    }

    this.show = function(img , shadow_frame) {
        noStroke();
        fill(20, 20, 20,150);
        image(img,bgImage.x+this.x,bgImage.y+this.y, 75,75);
        ellipse(bgImage.x+this.x+38,bgImage.y+this.y+70, shadow_frame -6 + 40, shadow_frame -6 + 15);
        // console.log(this.x,this.y);
        // console.log(-(bgImage.x-plyr.x),-(bgImage.y-plyr.y));
    }

    this.activate =  function (){
        // console.log(Math.sqrt(Math.abs(Math.pow(bgImage.x-this.x,2)+Math.pow(bgImage.y- this.y,2))));
        if(Math.sqrt(Math.abs(Math.pow(-(bgImage.x-plyr.x)-this.x,2)+Math.pow(-(bgImage.y-plyr.y) - this.y,2)))<100){
                plyr.health+=20;
                timer += 2000;
                if (plyr.health>100){
                        plyr.health = 100;
                }
                
                this.used =  true;
               
        }
    }

    


}