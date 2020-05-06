
let buttons;

//se crean 3 botones
let btn1;
let btn2;
let btn3;
//crea una tabla que guarda los datos del archivo .csv
let table; 

//se crea un arreglo
let bubbles = []; 

//numero de filas en el archivo
let rowCount;

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/casos.csv", "header");
}


function setup() 
{
  //createCanvas(640, 360);

  btn1 = createButton('btn');
  btn2 = createButton('2nd btn');
  btn3 = createButton('3rd btn');  
  //se determina la función de cada botón cuado se oprime
  btn1.mousePressed(btnPressed1);
  btn2.mousePressed(btnPressed2);
  btn3.mousePressed(btnPressed3);

  //se crea un elemento que agrupa todos los botones
  buttons = selectAll('button');
  //a los botones se les da caracteristicas
  for (let i = 0; i < buttons.length; i++) 
  {
    //que tengan este tamaño
    buttons[i].size(20, 100);
    //que se ubiquen de esta forma
    buttons[i].position(100*i, 430);
  }

  //se crea el canvas de P5
 cnv = createCanvas(300, 300);
  //se le da ubicación al canvas
  cnv.position(300, 30);
  //numero de filas en el archivo
  rowCount = table.getRowCount();

  //creamos un objeto que guarda la información de las filas de la tabla
  const row = table.getRows();  

  for (let i = 0; i < rowCount; i++) 
  {
    //guardamos la información de la fila "x" en una constante
    const x = row[i].getNum("x");
    //guardamos la información de la fila "y" en una constante
    const y = row[i].getNum("y");
    //guardamos la información de la fila "diameter" en una constante
    const diameter = row[i].getNum("diameter");
    //guardamos la información de la fila "name" en una constante
    const name = row[i].getString("name");

    //Adiciono al arreglo un objeto de tipo Bubble, donde inicializo el objeto creando la Burbuja
    bubbles.push(new Bubble(x, y, diameter, name));
    //se crean la cantidad de burbujas acorde a la cantidad de datos
 
  }

 function btnPressed1() 
{
  //escriba en la consola 
  console.log('boton oprimido 1');  
}

//cuando se oprime el botón 2nd btn
function btnPressed2() 
{
  //escriba en la consola 
  console.log('boton oprimido 2');  
}

//cuando se oprime el botón 3rd btn
function btnPressed3() 
{
  //escriba en la consola 
  console.log('boton oprimido 3');  
}

}


function draw() 
{
  background(43,30,10);
textSize(20);
 textAlign(CENTER);
 fill(218,168,120);
  text("TOTAL DE SUICIDIOS EN BOGOTÁ", 270, 30);
  //se recorre la cantidad de burbujas, que es lo mismo que recorrer la cantidad de datos
  //for (let i = 0; i < bubbles.length; i++)
  for (let i = 0; i < rowCount; i++) 
  {
    //recorre cada burbuja y llama a la función dibujar para mostrarla
    bubbles[i].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[i].mouseOver(mouseX, mouseY);
  } 
}


// clase Bubble 
class Bubble 
{
  //se determinan los variables del objeto
  constructor(x, y, diameter, name) 
  {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.name = name;

    this.over = false;
  }

  //se crea la función donde se determina si el mouse esta encima de la burbuja, le entra como para metro mouseX y mouseY
  mouseOver(px, py) 
  {
    //distancia que hay entre la posición del mouse y la burbuja
    let distancia = dist(px, py, this.x, this.y);

    //si la distancia entre el mouse y la burbuja es cercana
    if(distancia < 20)
    {
      // entonces la variable over pongala en true
      this.over = true; 
    }
    //si la distancia entre el mouse y la burbuja es lejana
    else
    {   
      // entonces la variable over pongala en false
      this.over = false;
    }
  }

  //muestra la burbuja
  dibujar() 
  {
    
    stroke(0);
    strokeWeight(0.8);
    noFill();
    //dibuja la burbuja segun los datos obtenidos del archivo en el setup

    fill(255,255,255);
    rect(this.x, this.y, this.diameter, this.diameter);
   
    //si la variable over es igual a true, es decir, si esta cerca a la burbuja  
    if (this.over == true) 
    {
      fill(242,236,22);
      textAlign(CENTER);
      //coloca el texto del dato mas abajo de la burbuja
      text(this.name, this.x, this.y + 40);
      text(this.diameter, this.x, this.y + 20);
    }
  }






}
