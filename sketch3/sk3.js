function setup(){
	createCanvas(720,480); 
}

function draw(){
	background (255); 
	ellipse(width/2, height/2, 30); 
}

function mouseClicked(){ 
	// if(mouseX > width/2 -15 && mouseX < width/2 + 15){
	// 	if (mouseY > height/2 -15 && mouseY < height/2 + 15){
	// 	fill(0); 
	// 	} 
	// } else { 
	// 	fill(255); 
	// }

	var clickDist = dist(width/2, height/2, mouseX, mouseY); 
	if (clickDist <15) { 
		fill(0); 
	} else { 
		fill(255); 
	}

	}