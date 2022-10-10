function CompInterSucc() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Company interview succces rate';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'company-interview-succces-rate';
    // Property to represent whether data has been loaded.
  this.loaded = false;
    // Setup function
    this.setup = function()
    {
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx,
        {
                type: 'bar',
                data:{
                        labels: ['Twitter', 'Uber', 'Amazon', 'Google', 'Facebook', 'Apple'],
                        datasets: [{
                                    //Name of the Bar
                                    label: 'Company Interview succes rate',
                                    //Array
                                    data: [12, 19, 5, 3, 4, 3],
                                    //Color Selection
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    //Outline
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                }]
                    },
                options:{
                        scales:{
                                y: {
                                    beginAtZero: true
                                   }
                               }
                        }
        });
    }
}