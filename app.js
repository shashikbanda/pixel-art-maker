// "use strict";
var body = document.getElementsByTagName('body')[0];
var w = window.innerWidth;
var h = window.innerHeight;

var col = 40;
var boxSize = w/40 - 10;

var rows = Math.floor(h/boxSize) - 3;


function createSquare(color,classn){
	var square = document.createElement('div');
	square.style.float = "left";
	square.style.margin = "1px"
	square.style.width = boxSize +'px';
	square.style.height = boxSize + 'px';
	square.style.border = 'solid';
	square.style.backgroundColor = color;
	square.className = classn;
	body.appendChild(square);
}

for(var i = 0; i < col*rows - 20; i++){
	createSquare('blue','square');
}

var gameSquares = document.getElementsByClassName('square');

for(var i = 0; i < gameSquare.length; i ++){
	
}