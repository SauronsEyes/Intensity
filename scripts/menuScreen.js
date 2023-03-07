function MenuScreen ()
{
    this.x = windowWidth/15,
    this.y = 200;
    this.hoveredOption = -1;
    this.selectDifficulty = 0;
    this.difficulties = ['ANNIHILATOR','DEAD MEAT', 'BARELY ALIVE']
    this.menuItems =
    [
        {
            text: "Intensity",
            fontSize: windowWidth/20,
            x:this.x,
            y:this.y+(windowWidth/15*0),
            type: 1
        },
        {
            text: "START BLOODBATH",
            fontSize: windowWidth/20,
            y:this.y+(windowWidth/20*2),
            x:this.x,
            type: 0
        },
        {
            text: "DIFFICULTY:",
            fontSize: windowWidth/20,
            x:this.x,
            y:this.y+(windowWidth/20*3),
            type: 0
        }
    ]

    this.show = function()
    {
        
        noStroke();
        fill(0,0,0,120);
        rect(0,0,windowWidth,windowHeight);
        textAlign(LEFT);
        textFont(titleFont);
        let index = 0;
        let noHover = true;
        this.menuItems.map((menuItem)=>{
            textSize(menuItem.fontSize);
            let isHovered = false;
            if(mouseX>=menuItem.x && mouseX<menuItem.x+(menuItem.text.length/1.5*menuItem.fontSize) && mouseY<=menuItem.y && mouseY>menuItem.y-menuItem.fontSize)
            {
               isHovered = true;
                if(menuItem.type == 1)
                {
                     renderUI.renderRainParticles();
                }
                
                    this.hoveredOption = index;
                    noHover = false;
                
            }
            

            
            if(menuItem.type == 1 || isHovered)
            {
                if(index>0)
                {
                    textFont(basicFont);
                }
                
                fill(200,50,0);
            }
            else
            {    
                
                textFont(basicFont);
                fill(255,255,255);

            }
            if(index ==2)
            {
                text(menuItem.text+this.difficulties[this.selectDifficulty],menuItem.x,menuItem.y);
            }
            else{
                text(menuItem.text,menuItem.x,menuItem.y);
            }
            
            index ++;
        });
        if(noHover)
        {
            this.hoveredOption = -1;
        }
    }
    this.handleSelect = function()
    {
        cameraShake(80,30);
        if(this.hoveredOption == 1)
        {
            var speed;
            var attack = 0.2;
            if(this.selectDifficulty ==0)
            {
                speed = 6
            }
            else if(this.selectDifficulty == 1)
            {
                speed = 7;
                generateEnemy(20);
                attack = 0.3;
            }
            else 
            {
                speed = 8;
                generateEnemy(40);
                attack = 0.4;
            }
            enemies.map((enemy)=>{
                enemy.movement_speed = Math.random() *speed + 2;
                enemy.damage = attack;
               
            })
            console.log(speed);
            onMainMenu = false;
        }
        if(this.hoveredOption == 2)
        {
            if(this.selectDifficulty<this.difficulties.length-1)
            {
            this.selectDifficulty++

            }
            else
            {
                this.selectDifficulty = 0;
            }
        }
    }
}