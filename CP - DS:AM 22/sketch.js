
// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.
var gallery;

function setup() {
  // Create a canvas to fill the content div from index.html.
  canvasContainer = select('#app');
  var c = createCanvas(1024, 576);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Add the visualisation objects here.
  gallery.addVisual(new CovidVaccinators());
  gallery.addVisual(new CompanyAdverExpen());
  gallery.addVisual(new CompCeos());
  gallery.addVisual(new TechDiversityGender());
  gallery.addVisual(new CompInterSucc());
  gallery.addVisual(new NumbOffice());
  gallery.addVisual(new ScreenTime());
 
}

function draw() {
  background(255);
  if (gallery.selectedVisual != null) {
    gallery.selectedVisual.draw();
  }
}
