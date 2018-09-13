// var myobject = {
// 	a : 0,
// 	b : 1
// };
var mouseclicks = [];  

//function scoping vs block scoping
function setup(){
	createCanvas(720,480);
	var button = createButton ('add particle');
	button.mousePressed(addparticle); 
	setTimeout(goOut, 10000); //not sure whats up w this
} 

function draw(){
	background(10); 
	for (var i = 0; i < mouseclicks.length; i++) { 
	ellipse (mouseclicks[i].x, mouseclicks[i].y, 10); 
	mouseclicks[i].x = mouseclicks[i].x +mouseclicks[i].a; 
	mouseclicks[i].y = mouseclicks[i].y +mouseclicks[i].a; 
}	
}

function addparticle(){
		var clickposition = {
			x: random(width),
			y: random(height),
			a: 4,
		}
	console.log(2)
	mouseclicks.push(clickposition); 
}

function mouseClicked(){ 
console.log("HELLO!");
}

function goOut(){ 
window.location = "https://google.com";
} 