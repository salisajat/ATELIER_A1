var mySound; 
var bubble; 

function setup(){
	createCanvas(720,480); 
	mySound= createAudio("Cosmic Love.mp3"); //for audio u need a host terminal, eg webspace
	bubble = { 
		x: width/2,
		y: height/2,
		r: 15 
	}

}

function draw(){
	background (255); 
	ellipse(bubble.x, bubble.y, bubble.r*2); 
	bubble.x = bubble.x + random(-6,6); 
	bubble.y = bubble.y - 1*1.01; 
	if (bubble.y < 0) { 
		bubble.y = height - bubble.r;
	}
}

function mouseClicked(){ 
	// if(mouseX > width/2 -15 && mouseX < width/2 + 15){
	// 	if (mouseY > height/2 -15 && mouseY < height/2 + 15){
	// 	fill(0); 
	// 	} 
	// } else { 
	// 	fill(255); 
	// }

	var clickDist = dist(bubble.x, bubble.y, mouseX, mouseY); 
	if (clickDist < bubble.r) { //polar coordinates 
		fill(0); 
		mySound.play(); 
	} else { 
		fill(255); 
	}

	}