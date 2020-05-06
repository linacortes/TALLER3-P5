
let buttons;
let sel;
//variable que guarda la opción seleccionada por el usuario
let opcion = "";
//se crean 3 botones
let btn1;
let btn2;
let btn3;
let btn4;

let radio;
let k;

function setup() {
  createCanvas(710, 400);
 // fill= rgb (245,239,39);
  frameRate(1);  // Animate slowly

  k = new KochFractal();
  radio = createRadio();

  radio.option('blue');
  radio.option('red');
  radio.option('black');
   
  radio.position(400, 420);

  radio.style('width', '60px');

  sel = createSelect();
  sel.position(40, 100);
  sel.option('310');
  sel.option('356');
  sel.option('348');
  sel.option('387');
  //cuando se selecciona una opción llama a la funcion mySelectEvent
  sel.changed(mySelectEvent);


  btn1 = createButton('2015');
  btn2 = createButton('2016');
  btn3 = createButton('2017');  
  btn4 = createButton('2018');  
  //se determina la función de cada botón cuado se oprime
  btn1.mousePressed(btnPressed1);
  btn2.mousePressed(btnPressed2);
  btn3.mousePressed(btnPressed3);
  btn4.mousePressed(btnPressed4);
  //se crea un elemento que agrupa todos los botones
  buttons = selectAll('button');

  //a los botones se les da caracteristicas
  for (let i = 0; i < buttons.length; i++) 
  {
    //que tengan este tamaño
    buttons[i].size(70, 50);
    //que se ubiquen de esta forma
    buttons[i].position(90*i, 420);
  }

function btnPressed1() 
{
  //escriba en la consola 
  //console.log('boton oprimido 1'); 
  fill (245,239,39); 
  cantidad = "600";
   textSize(20);
  text("310",120,330);
}

//cuando se oprime el botón 2nd btn
function btnPressed2() 
{
  //escriba en la consola 
  //console.log('boton oprimido 2');  
  fill (245,239,39); 
  cantidad = "600";
  textSize(30);
  text("356",350,330);
}

//cuando se oprime el botón 3rd btn

function btnPressed3() 
{
  //escriba en la consola 
  //console.log('boton oprimido 3');  
  fill (245,239,39); 
   textSize(20);
  text("348",590,330);
}
function btnPressed4() 
{
  //escriba en la consola 
  //console.log('boton oprimido 3');  
   fill (245,239,39); 
  cantidad = "600";
  textSize(60);
  text("387",345,230);
}

}

function mySelectEvent() 
{
  //guarda la opción seleccionada en la variable opcion
  opcion = sel.value();
}

function myInputEvent() 
{
  //coloca en la consola las teclas del inputfield
  console.log('you are typing: ', this.value());

  //lo escrito el el input field se guarda en la variable textoInputField como un string
  textoInputField = str(this.value());
  
  //en el elemento creado H2, se muestra lo escrito en el inputfield
  textoH2.html(this.value());
}

//esta función lee la opción seleccionada por el usuario de los botones desplegables
function mySelectEvent() 
{
  //guarda la opción seleccionada en la variable opcion
  opcion = sel.value();
}

//esta función se ejecuta cuando el checkbox es oprimida
function changeFill() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarCirculo = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarCirculo = false;
  }
}

function draw() {
  background(83,59,10);
  //puch(0);
  fill(133,249,235);

  textSize(20);
  textAlign(CENTER);

  //fill(218,168,120);
  text("TOTAL DE SUICIDIOS EN BOGOTÁ", 180, 20);
  // Draws the snowflake!
  k.render();
  // Iterate
  k.nextLevel();
  // Let's not do it more than 5 times. . .
  if (k.getCount() > 5) {
    k.restart();
  }

  valorRadioBtn = radio.value();
  stroke(valorRadioBtn);

  text("Casos en Bogota: " + opcion + '', 540, 30);
}
 
// A class to describe one line segment in the fractal
// Includes methods to calculate midp5.Vectors along the line according to the Koch algorithm

class KochLine {
  constructor(a,b) {
    // Two p5.Vectors,
    // start is the "left" p5.Vector and
    // end is the "right p5.Vector
    this.start = a.copy();
    this.end = b.copy();
  }

  display() {
   // stroke(255);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  kochA() {
    return this.start.copy();
  }

  // This is easy, just 1/3 of the way
  kochB() {
    let v = p5.Vector.sub(this.end, this.start);
    v.div(3);
    v.add(this.start);
    return v;
  }

  // More complicated, have to use a little trig to figure out where this p5.Vector is!
  kochC() {
    let a = this.start.copy(); // Start at the beginning
    let v = p5.Vector.sub(this.end, this.start);
    v.div(2);
    a.add(v);  // Move to point B
    v.rotate(-PI/2); // Rotate 60 degrees
    a.add(v);  // Move to point C
    return a;
  }

  // Easy, just 2/3 of the way
  kochD() {
    let v = p5.Vector.sub(this.end, this.start);
    v.mult(2/3.0);
    v.add(this.start);
    return v;
  }

  kochE() {
    return this.end.copy();
  }
}

// A class to manage the list of line segments in the snowflake pattern

class KochFractal {
  constructor() {
    this.start = createVector(0,height-20);   // A p5.Vector for the start
    this.end = createVector(width,height-20); // A p5.Vector for the end
    this.lines = [];                         // An array to keep track of all the lines
    this.count = 0;
    this.restart();
  }

  nextLevel() {
    // For every line that is in the arraylist
    // create 4 more lines in a new arraylist
    this.lines = this.iterate(this.lines);
    this.count++;
  }

  restart() {
    this.count = 0;      // Reset count
    this.lines = [];  // Empty the array list
    this.lines.push(new KochLine(this.start,this.end));  // Add the initial line (from one end p5.Vector to the other)
  }

  getCount() {
    return this.count;
  }

  // This is easy, just draw all the lines
  render() {
    for(let i = 0; i < this.lines.length; i++) {
      this.lines[i].display();
    }
  }

  // This is where the **MAGIC** happens
  // Step 1: Create an empty arraylist
  // Step 2: For every line currently in the arraylist
  //   - calculate 4 line segments based on Koch algorithm
  //   - add all 4 line segments into the new arraylist
  // Step 3: Return the new arraylist and it becomes the list of line segments for the structure

  // As we do this over and over again, each line gets broken into 4 lines, which gets broken into 4 lines, and so on. . .
  iterate(before) {
    let now = [];    // Create emtpy list
    for(let i = 0; i < this.lines.length; i++) {
      let l = this.lines[i];
      // Calculate 5 koch p5.Vectors (done for us by the line object)
      let a = l.kochA();
      let b = l.kochB();
      let c = l.kochC();
      let d = l.kochD();
      let e = l.kochE();
      // Make line segments between all the p5.Vectors and add them
      now.push(new KochLine(a,b));
      now.push(new KochLine(b,c));
      now.push(new KochLine(c,d));
      now.push(new KochLine(d,e));
    }
    return now;
  }

}
