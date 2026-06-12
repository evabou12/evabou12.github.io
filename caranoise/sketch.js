function setup() {
  createCanvas(600, 400);//Tamany de l'àrea de dibuix
//El primer número es l'amplada en pixels i el ssegon número es l'alçada en pixels.
}

function draw() {
  let r=random (0,127);
  let g=random (0,127);
  let b=random (128,225);
  let x=random (0,50);
  let y=noise (0.05*frameCount);
  frameRate(5)
  background(156-r,109-g,242-x); //Color del fons del dibuix
  //El primer número es el nivell de vermell "R", el segon número es el nivell de verd "G" i el tercer número es l'intensitat de blau "B", per tant color RGB en html. Dintre del background o fons.
  fill(247,231,206);//Color de la cara exterior
  //En el cas de fill serà el mateix pero el que fa es omplir de color la figura següent que son dos ellipses
  ellipse(300+r,200+y,200+x,250+x);//Forma de la cara exterior
    fill(255,255,255);//Forma blanc dels ulls
  //El primer número es la posició x desde la cantunada superior esquerra que es al "0.0", el segon número es la posició "y" o alçada del centre de l'ellipse i el tercer número de l'amplada de l'ellipse. El quart número es l'alçada de l'ellipse.
  ellipse(250+r,170+y,25+x,25+x);//Forma de l'ull dret perquè x=250
  ellipse(350+r, 170+y,25+x,25+x);//Forma de l'ull esquerra perquè x=350
  fill(255, 110, 110);//Color de la boca
  arc(300+r, 250+y, 70+x, 70+x,0,PI);//Forma de la boca
}
