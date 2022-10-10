function NumbOffice() {
    
    // Name for the visualisation to appear in the menu bar.
  this.name = 'Number of offices of each company';
    
    // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'number-office';
    // Property to represent whether data has been loaded.
  this.loaded = false;
    
    //Setup Function
this.setup = function()
{  
        //Arrays
    var xValues = ["Amazone", "Apple", "Google", "Twitter", "FaceBook"];
    var yValues = [235, 29, 170, 33, 15];
    var barColors = [
                        //Colors
                      "#b91d47",
                      "#00aba9",
                      "#2b5797",
                      "#e8c3b9",
                      "#1e7145"
                    ];
    
    new Chart("myChart1", {
                          type: "doughnut",
                          data: {
                                 labels: xValues,
                                 datasets: [{
                                              backgroundColor: barColors,
                                              data: yValues
                                            }]
                                },
                          options: {
                            title: {
                                    display: true,
                                    text: "Number of Offices Worldwide"
                                   }
                                   }

                          });
}   
}