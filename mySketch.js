let liq1,liq2,liq3;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	liq1 = new Liq();
	liq2 = new Liq();
	liq3 = new Liq();
}

function draw() {
	blendMode(BLEND);
	background(245);
	blendMode(MULTIPLY);
	noStroke();
	translate(width/2,height/2);
	
	fill(0,150,240);
	liq1.drawLiq();
	fill(200,240,0);
	liq2.drawLiq();
	fill(0,0,240);
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