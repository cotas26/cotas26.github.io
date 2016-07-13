
//UPPERCASE,lowercase, camelCase

//variables y funciones
//variable almacena datos
//funcion hace operaciones 

//sintaxis de variables
//primerodebemos declarar la variable
//esto se hace solo una vez
//le dice al computador que esta variable existe
var miNumero;
//luego de declarar la variable
//podemos asignarle valores
miNumero = 50;
//aqui pueden pasar muchas cosas entre medio
//justo aca miNumero cale 50
miNumero = 40;
//ahora miNumero vale 40

//declaracion de una funcion
function nombreFuncion(argumento1, argumento2, etc){
//cuerpo de la funcion
}
//declaracion de la funcion setup
function setup() {
  //ejecutar funcion createCancas(arg1, arg2)
  createCanvas(400, 600);
  //ejecutar funcion background, es parte de p5.js
  background(230, 40, 90)
}


function draw() {
 // background(230, 40, 90);
  //elegimos la configuracion para dibujar figuras
  //stroke, trazo (r, g, b) elige el color del borde 
   
   
   dibujarRect();
  dibujarElipse();
 
 dibujarMucho();

 
  
}
function dibujarElipse(){
   stroke(255, 255, 0);
  //strokeWeight(numPx)elige cuan ancho es el borde 
  strokeWeight(10);
  //elijamos el relleno
  //fill/r, g, b)
  fill(0, 102, 255);
  
  
  //ellipse(posX, posY, width, height)
 // ellipse(100, 200, 50, 50);
  ellipse(mouseX, mouseY, 50, 50);
}
function dibujarRect(){
   noStroke();
  //fill/r, g, b)
  fill(0, 102, 255);
  
  //rect(posX, posY, widht, height)
  rect(100, 100, 100, 75)
}

function dibujarMucho(){
  //ramdom(x) arroja un nuemero aleatrorio entre 0 y x
ellipse(random(width), random(height), 100, 100);}