function startButton() {
	document.getElementById("startButton").style.display = "none";
	makeField();
}

function makeField() {
	document.write("<div>");
	for(i=0; i < 15; i++) {
		for(j=1; j <=5; j++) {
			document.write("<img src='white.jpg' width='200px' height='50px' id=&#39;" + i+j + "&#39;>");
		}
		document.write("<br>");
	}
	
	document.write("</div>");
	makeCar()
}

function makeCar() {
	document.getElementById("143").src= "car.jpg";
}