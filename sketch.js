// function setup() {
//   createCanvas(400, 400);
//   // crea una tela di lavoro (x, y)
// }

// function draw() {
//   background("pink");
//   if (mouseIsPressed === true) {
// 	fill(0);
//   } else {
// 	fill (255);
//   }
//   circle(mouseX,mouseY,100); // (x, y, diametro)
// }

// function setup() {
// 	createCanvas(600,400);
// }

// function draw() {
// 	background("aqua");
// // sets color, stroke, etc to ANY shape
// 	fill("yellow");
// 	stroke("orange");
// 	strokeWeight(20);
// // a shape
// 	circle(550, 50, 100);
// // new shape?
// 	fill("green");
// 	stroke(0);
// 	strokeWeight(0)
// 	rect(0, 200, 600, 200); // posizione su x, posizione su y, width, height

// 	fill("");
// 	rect(100, 150, 90, 70);

// 	fill("red"); // r, g, b, A (transparency)
// 	triangle(90, 150, 145, 80, 200, 150);

// // draw emojis
// 	textSize(20); // size in pixel
// 	text("🌸", 300, 250); //text uses a string
// 	text("🐞", pmouseX, pmouseY); // previous position cursor mouse
// }

function setup() {
	createCanvas(300, 300);
	background(0); 
	// se il background non è in draw, possiamo vedere ciascun 
	// movimento del cerchio tracciato dal cursore
	// perché in realtà abbiamo un'illusione del movimento (nel caso fosse in draw):
	// background + circle e di nuivo background + circle, come un ciclo
	// se questa cosa non cicla, chiaramente vediamo tutti i cerchi tracciati
}

function draw() {

	noStroke();
	fill(255);
	circle(mouseX, mouseY, 24);
}

function mousePressed() {
	// faccio click, la canva si resetta
	background(0); 
}

// next video 2.2 variabili p5js //