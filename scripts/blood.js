function Blood(x,y)
{
    this.x = x;
    this.y = y;
    this.state = 0;
    this.blood_img = []
    this.init_image = function(path,frames)
    {
        for(let i=0; i<frames;i++)
        {
            this.blood_img[i] = loadImage(`${path}/sprite_${i}.png`);
            
        }
        for(i=1;i<this.blood_img.length;i++)
        {
            setTimeout(()=>{
               
                    this.change_state();
            },90*i)
        }
    }
    this.showAnim = function()
    {
        image(this.blood_img[this.state],this.x+bgImage.x,this.y+bgImage.y); 
     
       
    }
    this.change_state = function(){
        this.state++;
    }
   
    
    
}