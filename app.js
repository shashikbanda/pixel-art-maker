// // "use strict";
var body = document.getElementsByTagName('body')[0];

var colorPalletDiv = document.getElementsByClassName('colorpallet')[0];
var easel = document.getElementsByClassName('easel')[0];

var currentColor = "yellow"



function createSquare(color,classn,divToAppendTo){
	var square = document.createElement('div');
	square.style.float = "left";
	square.style.margin = "1px"
	square.style.width = colorPalletDiv.clientWidth/2 - 20+'px';
	square.style.height = colorPalletDiv.clientWidth/2 - 20+ 'px';
	square.style.border = 'solid';
	square.style.backgroundColor = color;
	square.className = classn;
	console.log(classn + " gh")
	divToAppendTo.appendChild(square);
}


function randomColorGenerator(){  //done
	var color = "";
	var randomColorNumber1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	var randomColorNumber2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	var randomColorNumber3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

	color = "rgb(" + randomColorNumber1 + "," + randomColorNumber2 + "," + randomColorNumber3 + ")"
	return color; 
}

function createColorPallet(){ //done
	for(var k = 0; k < 14; k++){
		var randomColor = randomColorGenerator();
		createSquare(randomColor,'colorPalletDiv',colorPalletDiv);
	}
}

function createEasel(){
	for(var l = 0; l < 49; l++){
		createSquare(currentColor,'easelDiv', easel)
	}
}


createColorPallet();
createEasel();

var colorL = document.getElementsByClassName('easelDiv');
console.log(colorL.length)

for(var m=0;m<colorL.length;m++){
	colorL[m].addEventListener('click',function(event){
		event.target.style.backgroundColor = currentColor;
	})
}
console.log("current color = " + currentColor)

var palletSq = document.getElementsByClassName('colorPalletDiv');

for(var n=0; n<palletSq.length;n++){
	palletSq[n].addEventListener('click', function(event){
		currentColor = event.target.style.backgroundColor
		console.log(currentColor)
	})
}

console.log("current color = " + currentColor)

