    class Task1Level1 {

        constructor(football){
            
            this.PlayerImage = loadImage("images/FootballPlayer - Copy.png");
            this.FootballImage = loadImage("images/goodFootball.png");
            this.goalImage = loadImage("images/goal.png");
            this.kickCounter = 0;
        }

        display(){

            //textSize(35);
            //text("hello",100,100);

            player = createSprite(1000,500,20,20);
            player.addImage("player",this.PlayerImage);
            player.scale = 0.5;
            //image(this.PlayerImage,200,200,150,150);

            //goalPost = createSprite(170,170,30,30);
            //goalPost.addImage("goal",this.goalImage);

            //football = createSprite(900,600,20,20);
            //football.addImage("ball",this.FootballImage);
            //football.scale = 0.3;
            football.visible = true;
            
            goalPost.visible = true;
            

            
        }


    }