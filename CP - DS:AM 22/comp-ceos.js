function CompCeos(x,y) {
  // Name for the visualisation to appear in the menu bar.
  this.name = 'Companies CEOs Net Worth: 2022';

  //Visualisation unique ID 
  this.id = 'comps-ceos-2022';

  // Title to display above the plot.
  this.title = 'Hover on company names to see year 2022 CEO and their net worth';

  //size of the Graph
  const marginSize = 35;
  this.x = x;
  this.y = y;
    
  // Layout object to store all common plot layout parameters and methods.
  this.layout = {
    marginSize: marginSize,
    leftMargin: marginSize * 5,
    rightMargin: width - marginSize,
    topMargin: marginSize,
    bottomMargin: height - marginSize * 2,
    pad: 5,
    plotWidth: function(){
      return this.rightMargin - this.leftMargin;
    },
    plotHeight: function(){
      return this.bottomMargin - this.topMargin;
    }
  };
    
  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function()
  {
    let self = this;
    this.data = loadTable
        ('./data/ceo/ceos_net_worth.csv', 'csv', 'header',
            function(table)
        {
         self.loaded = true;
        });
  };
    
  this.setup = function(){
      // Font defaults.
      textSize(16);  
      
      //create a hidden rectangle and assigning its location
      this.rect1 = new p5.Vector();
      this.rect1.x = 180;
      this.rect1.y = 470;
      this.rect1.width = 25;
      this.rect1.over = false; //boolean on false
      
      this.rect2 = new p5.Vector();
      this.rect2.x = 221.5;
      this.rect2.y = 470;
      this.rect2.width = 25;
      this.rect2.over = false;
      
      this.rect3 = new p5.Vector();
      this.rect3.x = 263;
      this.rect3.y = 470;
      this.rect3.width = 25;
      this.rect3.over = false;
      
      this.rect4 = new p5.Vector();
      this.rect4.x = 303;
      this.rect4.y = 470;
      this.rect4.width = 25;
      this.rect4.over = false;
      
      this.rect5 = new p5.Vector();
      this.rect5.x = 343;
      this.rect5.y = 470;
      this.rect5.width = 25;
      this.rect5.over = false;
      
      this.rect6 = new p5.Vector();
      this.rect6.x = 380;
      this.rect6.y = 470;
      this.rect6.width = 25;
      this.rect6.over = false;
      
      this.rect7 = new p5.Vector();
      this.rect7.x = 422.5;
      this.rect7.y = 470;
      this.rect7.width = 25;
      this.rect7.over = false;
      
      this.rect8 = new p5.Vector();
      this.rect8.x = 462;
      this.rect8.y = 470;
      this.rect8.width = 25;
      this.rect8.over = false;
      
      this.rect9 = new p5.Vector();
      this.rect9.x = 502.5;
      this.rect9.y = 470;
      this.rect9.width = 25;
      this.rect9.over = false;
      
      this.rect10 = new p5.Vector();
      this.rect10.x = 542.5;
      this.rect10.y = 470;
      this.rect10.width = 25;
      this.rect10.over = false;
      
      this.rect11 = new p5.Vector();
      this.rect11.x = 581;
      this.rect11.y = 470;
      this.rect11.width = 25;
      this.rect11.over = false;
      
      this.rect12 = new p5.Vector();
      this.rect12.x = 622;
      this.rect12.y = 470;
      this.rect12.width = 25;
      this.rect12.over = false;
      
      this.rect13 = new p5.Vector();
      this.rect13.x = 663;
      this.rect13.y = 470;
      this.rect13.width = 25;
      this.rect13.over = false;
      
      this.rect14 = new p5.Vector();
      this.rect14.x = 702;
      this.rect14.y = 470;
      this.rect14.width = 25;
      this.rect14.over = false;
      
      this.rect15 = new p5.Vector();
      this.rect15.x = 742;
      this.rect15.y = 470;
      this.rect15.width = 25;
      this.rect15.over = false;
      
      this.rect16 = new p5.Vector();
      this.rect16.x = 783;
      this.rect16.y = 470;
      this.rect16.width = 25;
      this.rect16.over = false;
      
      this.rect17 = new p5.Vector();
      this.rect17.x = 822;
      this.rect17.y = 470;
      this.rect17.width = 25;
      this.rect17.over = false;
      
      this.rect18 = new p5.Vector();
      this.rect18.x = 861;
      this.rect18.y = 470;
      this.rect18.width = 25;
      this.rect18.over = false;
      
      this.rect19 = new p5.Vector();
      this.rect19.x = 902;
      this.rect19.y = 470;
      this.rect19.width = 25;
      this.rect19.over = false;
      
      this.rect20 = new p5.Vector();
      this.rect20.x = 942;
      this.rect20.y = 470;
      this.rect20.width = 25;
      this.rect20.over = false;
  };
  //mouseOver the rectangles that were assigned 
  this.mouseHover = function()
  {
      if(mouseX > this.rect1.x &&
         mouseX < this.rect1.x + this.rect1.width &&
         mouseY > this.rect1.y &&
         mouseY < this.rect1.y + this.rect1.width
        )
        {
            this.rect1.over = true; //true to when mouse is over this area
        }
        else{
            this.rect1.over = false;
        }
      if(mouseX > this.rect2.x &&
         mouseX < this.rect2.x + this.rect2.width &&
         mouseY > this.rect2.y &&
         mouseY < this.rect2.y + this.rect2.width
        )
        {
            this.rect2.over = true;
        }
        else{
            this.rect2.over = false;
        }
      if(mouseX > this.rect3.x &&
         mouseX < this.rect3.x + this.rect3.width &&
         mouseY > this.rect3.y &&
         mouseY < this.rect3.y + this.rect3.width
        )
        {
            this.rect3.over = true;
        }
        else{
            this.rect3.over = false;
        }
      if(mouseX > this.rect4.x &&
         mouseX < this.rect4.x + this.rect4.width &&
         mouseY > this.rect4.y &&
         mouseY < this.rect4.y + this.rect4.width
        )
        {
            this.rect4.over = true;
        }
        else{
            this.rect4.over = false;
        }
      if(mouseX > this.rect5.x &&
         mouseX < this.rect5.x + this.rect5.width &&
         mouseY > this.rect5.y &&
         mouseY < this.rect5.y + this.rect5.width
        )
        {
            this.rect5.over = true;
        }
        else{
            this.rect5.over = false;
        }
       if(mouseX > this.rect6.x &&
         mouseX < this.rect6.x + this.rect6.width &&
         mouseY > this.rect6.y &&
         mouseY < this.rect6.y + this.rect6.width
        )
        {
            this.rect6.over = true;
        }
        else{
            this.rect6.over = false;
        }
       if(mouseX > this.rect7.x &&
         mouseX < this.rect7.x + this.rect7.width &&
         mouseY > this.rect7.y &&
         mouseY < this.rect7.y + this.rect7.width
        )
        {
            this.rect7.over = true;
        }
        else{
            this.rect7.over = false;
        }
       if(mouseX > this.rect8.x &&
         mouseX < this.rect8.x + this.rect8.width &&
         mouseY > this.rect8.y &&
         mouseY < this.rect8.y + this.rect8.width
        )
        {
            this.rect8.over = true;
        }
        else{
            this.rect8.over = false;
        }
       if(mouseX > this.rect9.x &&
         mouseX < this.rect9.x + this.rect9.width &&
         mouseY > this.rect9.y &&
         mouseY < this.rect9.y + this.rect9.width
        )
        {
            this.rect9.over = true;
        }
        else{
            this.rect9.over = false;
        }
       if(mouseX > this.rect10.x &&
         mouseX < this.rect10.x + this.rect10.width &&
         mouseY > this.rect10.y &&
         mouseY < this.rect10.y + this.rect10.width
        )
        {
            this.rect10.over = true;
        }
        else{
            this.rect10.over = false;
        }
       if(mouseX > this.rect11.x &&
         mouseX < this.rect11.x + this.rect11.width &&
         mouseY > this.rect11.y &&
         mouseY < this.rect11.y + this.rect11.width
        )
        {
            this.rect11.over = true;
        }
        else{
            this.rect11.over = false;
        }
       if(mouseX > this.rect12.x &&
         mouseX < this.rect12.x + this.rect12.width &&
         mouseY > this.rect12.y &&
         mouseY < this.rect12.y + this.rect12.width
        )
        {
            this.rect12.over = true;
        }
        else{
            this.rect12.over = false;
        }
       if(mouseX > this.rect13.x &&
         mouseX < this.rect13.x + this.rect13.width &&
         mouseY > this.rect13.y &&
         mouseY < this.rect13.y + this.rect13.width
        )
        {
            this.rect13.over = true;
        }
        else{
            this.rect13.over = false;
        }
       if(mouseX > this.rect14.x &&
         mouseX < this.rect14.x + this.rect14.width &&
         mouseY > this.rect14.y &&
         mouseY < this.rect14.y + this.rect14.width
        )
        {
            this.rect14.over = true;
        }
        else{
            this.rect14.over = false;
        }
       if(mouseX > this.rect15.x &&
         mouseX < this.rect15.x + this.rect15.width &&
         mouseY > this.rect15.y &&
         mouseY < this.rect15.y + this.rect15.width
        )
        {
            this.rect15.over = true;
        }
        else{
            this.rect15.over = false;
        }
       if(mouseX > this.rect16.x &&
         mouseX < this.rect16.x + this.rect16.width &&
         mouseY > this.rect16.y &&
         mouseY < this.rect16.y + this.rect16.width
        )
        {
            this.rect16.over = true;
        }
        else{
            this.rect16.over = false;
        }
       if(mouseX > this.rect17.x &&
         mouseX < this.rect17.x + this.rect17.width &&
         mouseY > this.rect17.y &&
         mouseY < this.rect17.y + this.rect17.width
        )
        {
            this.rect17.over = true;
        }
        else{
            this.rect17.over = false;
        }
       if(mouseX > this.rect18.x &&
         mouseX < this.rect18.x + this.rect18.width &&
         mouseY > this.rect18.y &&
         mouseY < this.rect18.y + this.rect18.width
        )
        {
            this.rect18.over = true;
        }
        else{
            this.rect18.over = false;
        }
       if(mouseX > this.rect19.x &&
         mouseX < this.rect19.x + this.rect19.width &&
         mouseY > this.rect19.y &&
         mouseY < this.rect19.y + this.rect19.width
        )
        {
            this.rect19.over = true;
        }
        else{
            this.rect19.over = false;
        }
       if(mouseX > this.rect20.x &&
         mouseX < this.rect20.x + this.rect20.width &&
         mouseY > this.rect20.y &&
         mouseY < this.rect20.y + this.rect20.width
        )
        {
            this.rect20.over = true;
        }
        else{
            this.rect20.over = false;
        }
  }
  //mouseOver this area, emit this text on screen  
  this.draw = function()
    { 
     fill(252, 61, 3);
     if(this.rect1.over === true)
     {
         textSize(35);
         text("Parag Agarwal ~ 21,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect2.over === true)
     {
         textSize(35);
         text("Patrick p. Gelsinger ~ 76,200,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect3.over === true)
     {
         textSize(35);
         text("Chuck Robbins ~ 124,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect4.over === true)
     {
         textSize(35);
         text("David Karp ~ 200,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect5.over === true)
     {
         textSize(35);
         text("Jeff Weiner ~ 200,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect6.over === true)
     {
         textSize(35);
         text("Shou Zi Chew ~ 200,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect7.over === true)
     {
         textSize(35);
         text("Ted Sarandos ~ 250,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect8.over === true)
     {
         textSize(35);
         text("Satya Nadella ~ 350,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect9.over === true)
     {
         textSize(35);
         text("Andy Jassy ~ 417,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect10.over === true)
     {
         textSize(35);
         text("Sundar Pichai ~ 600,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect11.over === true)
     {
         textSize(35);
         text("Marissa Mayer ~ 600,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect12.over === true)
     {
         textSize(35);
         text("Susan Wojcicki ~ 815,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect13.over === true)
     {
         textSize(35);
         text("Stewart Butterfield ~ 1,400,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect14.over === true)
     {
         textSize(35);
         text("Ben Silbermann ~ 1,600,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect15.over === true)
     {
         textSize(35);
         text("Kevin Systrom ~ 1,700,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect16.over === true)
     {
         textSize(35);
         text("Tim Cook ~ 2,100,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect17.over === true)
     {
         textSize(35);
         text("Marc Benioff ~ 8,500,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect18.over === true)
     {
         textSize(35);
         text("Brian Chesky ~ 12,900,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect19.over === true)
     {
         textSize(35);
         text("Jamie Iannone ~ 12,900,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
     if(this.rect20.over === true)
     {
         textSize(35);
         text("Mark Zuckerberg ~ 77,300,000,000", 575, height / 2);
         textSize(16);
     }
      else{
         null;
      }
      noFill();
      this.mouseHover();

   // Draw the title above the plot.
    this.drawTitle();

    // Draw x and y axis.
    drawAxis(this.layout);

    // Draw x and y axis labels.
    drawAxisLabels(this.xAxisLabel,
                   this.yAxisLabel,
                   this.layout);
    
    //Y-axis labels
    fill(0, 0, 0);
    text("$90,000,000,000",110,60);
    text("$80,000,000,000",110,105);
    text("$70,000,000,000",110,150);
    text("$60,000,000,000",110,195);
    text("$50,000,000,000",110,240);
    text("$40,000,000,000",110,285);
    text("$30,000,000,000",110,330);
    text("$20,000,000,000",110,375);
    text("$10,000,000,000",110,420);
    text("0",166,455);
    
    //X-axis labels
    push();
    textSize(12.5);
    angleMode(DEGREES);
     translate(185,485);
     rotate(-90);
     text("Twitter",0,10);
     text("Intel",0,50);
     text("Cisco",0,90);
     text("Tumblr",0,130);
     text("LinkedIn",0,170);
     text("TikTok",0,210);
     text("Netflix",0,250);
     text("Microsoft",0,290);
     text("Amazon",0,330);
     text("Google",0,370);
     text("Yahoo",0,410);
     text("Youtube",0,450);
     text("Slack",0,490);
     text("Pinterest",0,530);
     text("Instagram",0,570);
     text("Apple",0,610);
     text("Salesforce",0,650);
     text("AirBnb",0,690);
     text("Ebay",0,730);
     text("FaceBook",0,770);
    pop();
    
    //Bars  
    fill(0, 217, 206);  
    rect(619.5,454,30,1.5); //Youtube
    rect(659,452.5,30,3); // Slack
    rect(699,452,30,3.7); //Pinterest
    rect(739,451.5,30,4); //Instagram
    rect(779,451,30,4.6); //Apple
    rect(819,435.5,30,20); //SalesForce
    rect(859,417.5,30,38); //AirBnb
    rect(899,417.5,30,38); //Ebay
    rect(939,127.5,30,328); //Facebook 
  };
    //draw text on top of the graph
    this.drawTitle = function()
    {
        fill(252, 61, 3);
        noStroke();
        textAlign('center', 'center');
        text(this.title,(this.layout.plotWidth() / 2) + this.layout.leftMargin,
        this.layout.topMargin - (this.layout.marginSize / 2));
    };
}