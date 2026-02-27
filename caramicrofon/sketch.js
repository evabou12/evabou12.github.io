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
background(254, 196, 255);//Color de fons del dibulix
  //El primer número es el nivell de vermell "R", el segon número és el nivell de verd "G" iel tercer numero es l'intensitat de blau  "B" per tant el color RGB en html. Dintre del background o fons.
  fill(255, 246, 229);//Color de la cara exterior
  // En el cas del fill serà el mateix pero el que fa es omplir de color la figura següent que son dos elipses.
  ellipse(300,200,200+h,250+h);//Forma de cara exterior
  // El primer numero es la pocisió x del sentre el centre de lpelipse des de la cantonada superior esquerre que es al "0,0", el segon numero es la pocisio "y" o alçada del centre de l'elipse i el tercer numero es l'amplada del elipse. El quart numero es l'alçada de l'ellipse. 
    fill(255, 255, 255);//color blanc del ulls
  ellipse(260,150,40,30);//Forma d'ull dret perquè x=260
    ellipse(340,150,40,30);//Forma d'ull esquqerre perquè x=340
   fill(255-h*2, 0, 0);//Color de la boca
  arc(300, 245, 80, 80+h,0,PI);//Forma de la boca
    line(340,120,370,100)
  line(260, 120, 230 ,100)
}
