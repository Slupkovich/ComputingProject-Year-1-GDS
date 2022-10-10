function CovidVaccinators() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Mean % of fully vacc per continent';

  // Visualisation unique ID 
  this.id = 'covid-vac';
    //Array with objects
    let circles =
        [
         {
         size: 38,
         name: "N A",
         col: "green",
         percentage: "38%"
         },
         {
         size: 40,
         name: "S A",
         col: "cyan", 
         percentage: "40%"
         },   
         {
         size: 17,
         name: "Africa",
         col: "yellow",
         percentage: "17%"
         },   
         {
         size: 29,
         name: "Europe",
         col: "orange",
         percentage: "29%"
         },   
         {
         size: 69,
         name: "Asia",
         col: "red",
         percentage: "69%"
         },
         {
         size: 84,
         name: "Australia",
         col: "violet",
         percentage: "84%"
         }  
        ]
    
    this.preload = function()
    {
        //image to be the background
        wm = loadImage('img/worldMap.jpeg'); 
    };
    
    this.setup = function()
    {
    };

    this.draw = function()
    { //background img to be loaded
      image(wm,0,0, 1000,450);
      fill(255, 13, 13)
        
        for(let i =0; i < 6; i++)
        {
            stroke(0);
            fill(circles[i].col);
            ellipse(120 + i* 150, height/2 + 160, circles[i].size);
            noStroke();
            fill(255,100,100);
            text(circles[i].name +" = "+ circles[i].percentage ,88 + i*150,height/2 + 230);        
        }
    }    
}