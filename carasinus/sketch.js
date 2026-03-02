function setup() {
  createCanvas(600,400);// Tamany de l'àrea de dibuix
  // El primer numero es l'amplada en pixels i el segon número es l'alçada en pixels.
}
function draw() {
  let sinus=sin(frameCount*0.01)*40;//Let sinus es una variabl, es un nom que conte numeros que canvia, es a dir una variable numèrica on guardem numeros que probenen de la funció sinus que el que genera numeros entre -1 i +1. Si els numeros entre -1 i +1 es multiplican per20 es tranforen numeros entre-20 i +20. No son aleatoris sino que aniran augmentanti disminuint sempre. Aquesta variablela puc sumar, multiplicar, dividir, o canviar en qualsevol perametre de leas funcion seguents.
  background(254+sinus, 196-sinus, 255+sinus);//Color de fons del dibulix
  //El primer número es el nivell de vermell "R", el segon número és el nivell de verd "G" iel tercer numero es l'intensitat de blau  "B" per tant el color RGB en html. Dintre del background o fons.
  fill(255, 246+sinus, 229);//Color de la cara exterior
  // En el cas del fill serà el mateix pero el que fa es omplir de color la figura següent que son dos elipses.
  ellipse(300+sinus,200,200+sinus,250+sinus);//Forma de cara exterior
  // El primer numero es la pocisió x del sentre el centre de lpelipse des de la cantonada superior esquerre que es al "0,0", el segon numero es la pocisio "y" o alçada del centre de l'elipse i el tercer numero es l'amplada del elipse. El quart numero es l'alçada de l'ellipse. 
    fill(255+sinus, 255+sinus, 255);//color blanc del ulls
  ellipse(260,150+sinus,35+sinus,25);//Forma d'ull dret perquè x=260
    ellipse(340,150+sinus,35+sinus,25);//Forma d'ull esquqerre perquè x=340
   fill(255, 110, 110+sinus);//Color de la boca
  arc(300+sinus, 245+sinus, 75+sinus, 50+sinus,0,PI);//Forma de la boca
}
