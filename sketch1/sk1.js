var g = -1; 
function setup() { 
	createCanvas(720,480); 
}

function draw() { 

	background (100, g, g, 70);
	for (var i = 0; i < 100; i++){

		ellipse(random(width), random(height),10); 

	} 
	g++;
	console.log(g); 
	// if(g < 300){ 
	// 	g=0; 

	// }

	// if (g < 300){ 
	// 	g++;
	// 	console.log(g); 
	// } else if (g = 300){ 
	// 	console.log("Here"); 
	// 	g=0 

	// }

}