let buttons;
//se crean 3 botones
let btn1;
let btn2;
let btn3;
let btn4;

let slider;
//variable que guarda el valor del slider
let valorSlider;

let opcion = "";
let radio;
let k;


function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  //table = loadTable("assets/lina2.csv", "header");
//fuente = loadFont("assets/NEUROPOL.ttf"); 
}



function setup() {
createCanvas(800, 700);
 background(143,143,143);
 //fill(230,60,40);
  //stroke(35);


  slider = createSlider(0, 250, 0); //(min, max, start)
  slider.position(280, 660);
  slider.style('width', '200px');

 // slider.textAlign('2015','2016','2017','2018');
  // trazo translúcido usando el valor alfa
  
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

    buttons[i].size(70, 40);
    //que se ubiquen de esta forma
    buttons[i].position(70*i + 260,600);
  }

function btnPressed1() 
{
  //escriba en la consola 
  //console.log('boton oprimido 1'); 
  fill (255); 
  cantidad = "600";
   textSize(20);
 text("310",390,330);
}

//cuando se oprime el botón 2nd btn
function btnPressed2() 
{
  //escriba en la consola 
  //console.log('boton oprimido 2');  
  fill (255); 
  cantidad = "600";
  textSize(40);
  text("356",390,310);
}

//cuando se oprime el botón 3rd btn

function btnPressed3() 
{
  //escriba en la consola 
  //console.log('boton oprimido 3');  
  fill (255); 
   textSize(60);
  text("348",390,270);
}
function btnPressed4() 
{
  //escriba en la consola 
  //console.log('boton oprimido 3');  
  fill (255); 
  cantidad = "600";
  textSize(80);
  text("387",390,220);
}


}

function draw() {
  // trazar dos cuerdas al azar en cada cuadro
  randomChord();
  //randomChord();

 valorSlider = slider.value();
 if (valorSlider <=62.5){
      stroke('while');
     strokeWeight(0.1);
  }
  if (valorSlider >=130){
      stroke('gray');
     strokeWeight(2);
  }

  if (valorSlider >=195){
      stroke('darkgray');
     strokeWeight(3);
  }
  if (valorSlider > 220){
      stroke('black');
     strokeWeight(4);
  }
  //el valor del slider es el background
  //background(valorSlider);
//textFont(fuente);
 fill(255);
 textSize(20);
 textAlign(CENTER);

 text("TOTAL DE SUICIDIOS EN BOGOTÁ", 400, 35);
}

function randomChord() {
  // encontrar un punto aleatorio en un círculo
  //fill(0);
  let angle1 = random(0,1 * PI);
  let xpos1 = 80+60+250 + valorSlider * cos(angle1);
  let ypos1 = 10+60+250 + valorSlider * sin(angle1);
 
  // encontrar otro punto aleatorio en el círculo
  let angle2 = random(0, 2 * PI);
  let xpos2 = 80+60+250 + valorSlider * cos(angle2);
  let ypos2 = 10+60+250 + valorSlider * sin(angle2);
  
  // trazar una línea entre ellos

  line(xpos1, ypos1, xpos2, ypos2);
  
}
