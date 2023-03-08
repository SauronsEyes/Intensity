function MenuScreen ()
{
    this.x = windowWidth/15,
    this.y = 200;
    let modes = ["ENDLESS","TIME TRIAL"];
    this.mode = modes[0];
    this.hoveredOption = -1;
    this.hoveredChar = -1;
    this.selectDifficulty = 0;
    this.charSelect = 0;
    this.difficulties = ['GENOCIDE','HOMICIDE', 'SUICIDE']
    
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
        },
        {
            text: `MODE:ENDLESS`,
            fontSize: windowWidth/20,
            x:this.x,
            y:this.y+(windowWidth/20*4),
            type: 0
        }
    ]
    this.charItems = [
        
        {
            text:"SELECT SURVIVOR",
            x:1100,
            y:200
        },
        {
            text:"<",
            x:1100,
            y:400,
        },
        {
            text:">",
            x:1550,
            y:400,
        }
    ]
    this.character_images = []
    this.characterInfo = [
        {
            name: 'Ava',
            health: 90,
            damage: 80,
            desc: 'Detective'
        },
        {
            name: 'Noah',
            health: 80,
            damage: 100,
            desc: 'Detective'
        }
    ]
    if(windowWidth<1550 && windowHeight>600)
    {
        this.charItems[0].x =this.x
        this.charItems[0].y = 350;
        this.charItems[1].x =this.x
        this.charItems[1].y = 400;
        this.charItems[2].x =this.x +100
        this.charItems[2].y = 400;
    }
    else if(windowWidth<1550 && windowHeight<600)
    {
      
        this.charItems[0].x =500
        this.charItems[0].y = 200;
        this.charItems[1].x =500+50
        this.charItems[1].y = 250;
        this.charItems[2].x =500 +180
        this.charItems[2].y = 250;
    }

    this.init_images = function()
    {
        
        this.characterInfo.map((character)=>{
            this.character_images.push(loadImage(`assets/character/images/$Characters/profile/${character.name}.png`));
        })
        
        
    }
    

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
        noHover = true;
        index = 0;
        this.charItems.map((charItem)=>{
            fill(255,255,255);
            if(mouseX>=charItem.x && mouseX<charItem.x+50 && mouseY<=charItem.y && mouseY>charItem.y-50)
            {
                fill(200,50,0);
                noHover = false;
                this.hoveredChar = index;
            }
            text(charItem.text,charItem.x,charItem.y);
            index ++;
        })
        if(noHover)
        {
            this.hoveredChar = -1;
        }
        
        
        
        if(windowWidth<1550 && windowHeight>600)
        {
            image(this.character_images[this.charSelect],this.x+30,370,50,50);
            textSize(20);
            textAlign(CENTER);
            fill(255,255,255);
            text(this.characterInfo[this.charSelect].name,this.x,450,100,50);
            textSize(20);
            text(`Health: ${this.characterInfo[this.charSelect].health}`,this.x,480,100,30);
            text(`Damage: ${this.characterInfo[this.charSelect].damage}`,this.x,500,100,30);
            
        }
        else if(windowWidth<1550 && windowHeight<600)
        {
            
            image(this.character_images[this.charSelect],600,210,50,50);
            textSize(20);
            textAlign(CENTER);
            fill(255,255,255);
            text(this.characterInfo[this.charSelect].name,575,280,100,30);
            textSize(20);
            text(`Health: ${this.characterInfo[this.charSelect].health}`,575,300,100,30);
            text(`Damage: ${this.characterInfo[this.charSelect].damage}`,575,320,100,30); 
        }
        else
        {
            
            image(this.character_images[this.charSelect],1300,300,100,100);
            textSize(40);
            textAlign(CENTER);
            fill(255,255,255);
            text(this.characterInfo[this.charSelect].name,1100,450,500,50);
            textSize(20);
            text(`Health: ${this.characterInfo[this.charSelect].health}`,1100,480,500,30);
            text(`Damage: ${this.characterInfo[this.charSelect].damage}`,1100,500,500,30);
        }


    }
    this.handleSelect = function()
    {
        cameraShake(80,30);
        if(this.hoveredChar == 2 && this.charSelect<this.character_images.length-1)
        {
            this.charSelect++;
            plyr.init_images(`assets/character/images/$Characters/${this.characterInfo[this.charSelect].name}`,4);
        }
        if(this.hoveredChar == 1 && this.charSelect>0)
        {
            this.charSelect--;
            plyr.init_images(`assets/character/images/$Characters/${this.characterInfo[this.charSelect].name}`,4);
        }
        if(this.hoveredOption == 1)
        {
            
            plyr.health = 100;
            plyr.score = 0;
            
            
            var speed;
            var attack = 0.2;
            var MAX_HEALTH =5;
            var MIN_HEALTH =1;
            if(this.selectDifficulty ==0)
            {
                speed = 3;
            }
            else if(this.selectDifficulty == 1)
            {
                speed = 5;
                generateEnemy(10);
                attack = 0.3;
                MAX_HEALTH = 8;
                MIN_HEALTH = 3;
            }
            else 
            {
                speed = 10;
                generateEnemy(20);
                attack = 2;
                MAX_HEALTH = 10;
                MIN_HEALTH = 5;
            }
            bgImage.x =-2300;
            bgImage.y = -2053;
            enemies.map((enemy)=>{
                enemy.movement_speed = speed;
                enemy.damage = attack;
                enemy.MAX_HEALTH = MAX_HEALTH;
                enemy.MIN_HEALTH = MIN_HEALTH;
                enemy.health = Math.random() * (MAX_HEALTH - MIN_HEALTH) + MIN_HEALTH
                
               
            })
            
            
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
        if(this.hoveredOption == 3)
        {   
            if (this.menuItems[3].text=="MODE:ENDLESS") {
            this.menuItems[3].text = "MODE:TIME TRIAL";
            this.mode = modes[1];
            } else {
            this.menuItems[3].text = "MODE:ENDLESS";
            this.mode = modes[0];
            }
        }
    }
}