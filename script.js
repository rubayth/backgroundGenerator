var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var leftRight=document.querySelector(".type1");
var topBottom=document.querySelector(".type2");


function setGradient() {
	if(leftRight.checked===true){
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	}
	else{
		body.style.background = 
		"linear-gradient(to bottom, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	}

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

leftRight.addEventListener("input", setGradient);
topBottom.addEventListener("input", setGradient);