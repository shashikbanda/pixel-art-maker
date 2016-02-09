// // "use strict";
var body = document.getElementsByTagName('body')[0];
var colorPalletDiv = document.getElementsByClassName('colorpallet')[0];
var easel = document.getElementsByClassName('easel')[0];
var currentColor = "white"

function createSquare(color,classn,divToAppendTo){ //GENERAL FUNCTION TO CREATE SQUARE
	var square = document.createElement('div');
	// console.log(easel)
	// console.log(colorPalletDiv)
	square.style.float = "left";
	square.style.margin = "1px";
	if(divToAppendTo.className === 'col-md-2 colorpallet'){
		square.style.width = colorPalletDiv.clientWidth/2 - 20 +'px';
		square.style.height = colorPalletDiv.clientWidth/2 - 20 + 'px';
	}
	else{
		square.style.width = easel.clientWidth/30 - 20+'px';
		square.style.height = easel.clientWidth/30 - 20+ 'px';
	}
	square.style.backgroundColor = color;
	square.className = classn;
	divToAppendTo.appendChild(square);
}


function randomColorGenerator(){  //RANDOM COLOR GENERATOR -> SOON TO BE FIXED COLORS
	var color = "";
	var randomColorNumber1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	var randomColorNumber2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	var randomColorNumber3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

	color = "rgb(" + randomColorNumber1 + "," + randomColorNumber2 + "," + randomColorNumber3 + ")"
	return color; 
}

function createColorPallet(){ //FUNCTION TO CREATE COLOR PALLET WITH 14 SQUARES
	for(var k = 0; k < 14; k++){
		var randomColor = randomColorGenerator();
		createSquare(randomColor,'colorPalletDiv',colorPalletDiv);
	}
}

function createEasel(){ //FUNCTION TO CREATE EASEL WITH 100 SQUARES
	for(var l = 0; l < 100; l++){ //2470 to fill grid
		createSquare(currentColor,'easelDiv', easel)
	}
}
createColorPallet(); //CALLS FUNCTION THAT GENRATES COLOR PALLET BOARD
createEasel(); //CALLS FUNCTION THAT GENERATES EASEL BOARD

var colorL = document.getElementsByClassName('easelDiv'); //EVENT LISTENERS TO COLOR PALLET AND MAIN EASEL
for(var m=0;m<colorL.length;m++){
	colorL[m].addEventListener('mouseover',function(event){
		event.target.style.backgroundColor = currentColor;
	})
}
var palletSq = document.getElementsByClassName('colorPalletDiv');
for(var n=0; n<palletSq.length;n++){
	palletSq[n].addEventListener('click', function(event){
		currentColor = event.target.style.backgroundColor
		console.log(currentColor)
	})
}


var resetButton = document.getElementById('reset-button'); //RESET BUTTON FUNCTIONALITY
resetButton.addEventListener('click',function(){

	for(var o=0; o < colorL.length; o++){
		console.log(colorL[o])
		colorL[o].style.backgroundColor = "white"
	}
})
