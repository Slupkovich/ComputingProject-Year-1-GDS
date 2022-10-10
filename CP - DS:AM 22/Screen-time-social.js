function ScreenTime() {
    
    // Name for the visualisation to appear in the menu bar.
  this.name = 'Screen time  each social media app weekly (hours)';
    
    // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'screen-time';
    // Property to represent whether data has been loaded.
  this.loaded = false;
    
    this.setup = function()
    {
        let trace1 = {
                      x: ['Twitter', 'Insta', 'FaceBook'],
                      y: [20, 18, 23],
                      name: 'Iphone',
                      type: 'bar'
                     };

            let trace2 = {
                          x: ['Twitter', 'Insta', 'FaceBook'],
                          y: [12, 14, 29],
                          name: 'Computer',
                          type: 'bar'
                         };

            let data = [trace1, trace2];
            let layout = {barmode: 'group'};
        Plotly.newPlot('myDiv', data, layout);  
    }
}