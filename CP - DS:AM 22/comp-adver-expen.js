function CompanyAdverExpen() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Company Advertisements Expenditure';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'comp-adver-expend';

  // Property to represent whether data has been loaded.
  this.loaded = false;
    
  // GLobal variables
  let numbers = [];
  let data;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function() {
    let self = this;
    this.data = loadTable(
      './data/ceo/comp_justAd_expen.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });
  };
    
  this.setup = function()
  {//colorMode() changes the way p5.js interprets color data.
    colorMode(HSB, 360, 100, 100, 100);
  };
    
  this.draw = function()
  {
    if (!this.loaded){
      console.log('Data not yet loaded');
      return;
    }
      for(let i = 0; i < this.data.getRowCount(); i++)
      {
          numbers.push(this.data.getNum(i, 'Advertising'));
      }
      // print(values);
      let innerCircle = 30;
      for(let i = 0; i < numbers.length; i++)
      {
        let n = numbers[i];
        let x = 550;
        let y = height/2;
        let w = 1;
        let h = map(n, 0, max(numbers), 0, height/2 - innerCircle);
        let r = map(i, 0, numbers.length, 0, TWO_PI);
        let c = map(n, 0, max(numbers), 120, 360);
        fill(c, 100, 100);
        push();
        translate(x, y);
        rotate(r);
        rect(0, innerCircle, w, h);
        pop();
      }
      numbers = [];
  }
}