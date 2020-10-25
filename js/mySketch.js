let liq1,liq2,liq3;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	liq1 = new Liq();
	liq2 = new Liq();
	liq3 = new Liq();
}

function draw() {
	blendMode(BLEND);
	background(255);
	blendMode(MULTIPLY);
	noStroke();
	translate(width/2,height/2);
	
	fill(0,150,240);
	liq1.drawLiq();
	fill(128,0,325);
	liq2.drawLiq();
	fill(0,255,128);
	liq3.drawLiq();
}

function mouseClicked() {
	liq1.updateLiq();
	liq2.updateLiq();
	liq3.updateLiq();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}