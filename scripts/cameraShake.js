function cameraShake(intensity,shakes)
{
    document.getElementById('defaultCanvas0');
    let initX = plyr.x;
    let initY = plyr.y;
    let shakeShiftX = 0;
    let shakeShiftY = 0;
    for(let i=0; i<shakes;i++)
    {
        setTimeout(()=>{
            
            // console.log(shakeShiftX,shakeShiftY);   
            if(i%2 == 1)
            {
                shakeShiftX = -shakeShiftX;
                shakeShiftY = -shakeShiftY;
            }
            else
            {
                shakeShiftX = ( Math.floor((2*Math.random()-1) * intensity));
                shakeShiftY = (Math.floor((2*Math.random()-1) * intensity));
            }
            plyr.x += shakeShiftX;
            plyr.y += shakeShiftY;
            enemies.map((enemy)=>{
                enemy.x +=shakeShiftX;
                enemy.y += shakeShiftY;
            })
            bgImage.x += shakeShiftX;
            bgImage.y += shakeShiftY;

        },5*i)
        

    }

}
