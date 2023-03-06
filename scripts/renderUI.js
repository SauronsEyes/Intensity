function RenderUI(character)
{
    this.healthImages = [];
    this.overlayImages = [];
    this.healthBars = 50
    this.rainParticles = [];
    for(let i =0; i<200;i++)
    {
        this.rainParticles[i] = new Rain();
    }

    this.renderHealth = function()
    {
        if(character.health <90)
        {
            image(this.overlayImages[0],0,0);   
        }
        
        let initial = 0;
        for(let i=0;i<this.healthBars;i++)
        {
            
            image(this.healthImages[0],(i+1)*15,10);
            if(character.health> initial)
            {
                image(this.healthImages[1],(i+1)*15,10);
            }
            else{
                image(this.healthImages[2],(i+1)*15,10);
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