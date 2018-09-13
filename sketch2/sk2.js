// var myobject = {
// 	a : 0,
// 	b : 1
// };
var mouseclicks = [];  

//function scoping vs block scoping
function setup(){
	createCanvas(720,480); 
}

function draw(){
	background(70);
	ellipse (mouseX,mouseY, 10); 
	for (var i = 0; i < mouseclicks.length; i++) { 
	ellipse (mouseclicks[i].x, mouseclicks[i].y, 10); 
	mouseclicks[i].x = mouseclicks[i].x +mouseclicks[i].a; 
	mouseclicks[i].y = mouseclicks[i].y +mouseclicks[i].a; 
}
	
}

function mouseClicked(){
		var clickposition = {
			x: mouseX,
			y: mouseY,
			a: 4
		}
	mouseclicks.push(clickposition); 
}