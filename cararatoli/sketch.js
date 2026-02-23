let mic;// Crea una variable pel miòfon
function setup() {
  createCanvas(600,400);// Tamany de l'àrea de dibuix
  // El primer numero es l'amplada en pixels i el segon número es l'alçada en pixels.
  mic=new p5.AudioIn ();//El micròfon es una entrada de audio amb p5
  mic.start(); //Activa el micròfon
}
function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,4000);
background(mouseX+238, mouseY-196, mouseX+54);//Color de fons del dibulix
  //El primer número es el nivell de vermell "R", el segon número és el nivell de verd "G" iel tercer numero es l'intensitat de blau  "B" per tant el color RGB en html. Dintre del background o fons.
  fill(255+mouseX/4, 246-mouseY/2, 229-mouseX/2);//Color de la cara exterior
  // En el cas del fill serà el mateix pero el que fa es omplir de color la figura següent que son dos elipses.
  ellipse(mouseX,mouseY,200+h,250+h);//Forma de cara exterior
  // El primer numero es la pocisió x del sentre el centre de lpelipse des de la cantonada superior esquerre que es al "0,0", el segon numero es la pocisio "y" o alçada del centre de l'elipse i el tercer numero es l'amplada del elipse. El quart numero es l'alçada de l'ellipse. 

    fill(255-mouseX/2,mouseY/2, mouseX/3);//color blanc del ulls
  ellipse(mouseX-40,mouseY-50,37+mouseX/20,27+mouseY/20);//Forma d'ull dret perquè x=260
    ellipse(mouseX+40,mouseY-50,37+mouseX/20,27+mouseY/20);//Forma d'ull esquqerre perquè x=340
  fill(0,0,0,)
  ellipse( mouseX-40,mouseY-50,17,15)
  ellipse( mouseX+40,mouseY-50,17,15)
   fill(255-h*1, 88, 88);//Color de la boca
  arc(mouseX,mouseY+45, 80, 80+h,0,PI);//Forma de la boca
  line(mouseX+40,mouseY-80,mouseX+70,mouseY-100)
  line(mouseX-40, mouseY-80, mouseX-70 ,mouseY-100)
  strokeWeight(+2)
}
