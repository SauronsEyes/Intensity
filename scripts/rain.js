function Rain()
{
    this.slope = 1;
    this.x = Math.floor(Math.random()*1920);
    this.y = Math.random()*1000;
    this.c = this.y - this.x*this.slope;
    
    this.show = function ()
    {
        let randomLength = Math.random()*100
        line(this.x,this.y,this.generateX(this.y+randomLength),this.y+randomLength);
        stroke(200);
    }

    this.move = function()
    {
        this.y = this.y + (Math.random()*30)
        this.x = this.generateX(this.y);
    }
    this.generateX = function(y)
    {
        return (y-this.c)/this.slope;
    }
}