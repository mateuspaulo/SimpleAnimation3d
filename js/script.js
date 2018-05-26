"use strict";

window.onload = function() {

	let time   		   = 0.5;  //Time of animation
	let numberElements = 1000; //Number of Elements 1000 is recommended
	let width  		   = 1;    //Initial width
    let height 		   = 1;    //Initial height
    let transparency   = "80"; //Max 99. Empty is solid
    let borderRadius   = 20;   //Ex. 50
    let colorHex       = "";   //Ex:#ff0000 if empty is entered a random value
    let style          = "";

	for (var i = 0; i < numberElements; i++) {
		style = 'style="background-color:' + getRandomColor(colorHex) + transparency + '; border-radius:' + borderRadius + '%; animation: round_round ' + time + 's linear infinite; z-index:' + numberElements + '; transform-origin: ' + i + '% ' + i + 'px; width: ' + width + 'px; height:' + height + 'px;"';
		
		document.body.innerHTML += '<div ' + style + ' class="generic"></div>';

		numberElements --;
		time   += 0.1;
		width  += 1;
		height += 1;
	}
}

function getRandomColor(colorHex) {
	if (colorHex == "") {
	  	let letters = '0123456789ABCDEF';
	  	let color   = '#';

	  	for (let i = 0; i < 6; i++) {
	    	color += letters[Math.floor(Math.random() * 16)];
	  	}

	  	return color;
  	} else {
  		return colorHex;
  	}
}

