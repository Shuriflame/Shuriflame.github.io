class Liq {
  constructor () {
    this.vNnum = 0;
    this.nm = 0;
		this.sm = 0;
		this.fcm = 0;
		
		// init
		this.updateLiq();
		mouseX = windowWidth/2;
		mouseY = windowHeight/2;
  }
	
	drawLiq() {
		push();
		rotate(frameCount/this.fcm);
		let dr = TWO_PI/this.vNnum;
		beginShape();
		for(let i = 0; i  < this.vNnum + 3; i++){
			let ind = i%this.vNnum;
			let rad = dr *ind;
			let r = height*0.3 + noise(frameCount/this.nm + ind) * height*0.1 + sin(frameCount/this.sm + ind)*height*0.05;
			curveVertex(cos(rad)*r*mouseX/windowWidth, sin(rad)*r*mouseY/windowHeight);
		}
		endShape();
		pop();
	}
	
	updateLiq() {
		this.vNnum = int(random(10,40));
		this.nm = int(random(10,90));
		this.sm = int(random(10,30));
		this.fcm = int(random(50,250));	
	}
}