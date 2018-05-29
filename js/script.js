"use strict";

function animateElements() {
	const elements = document.getElementsByClassName("generic");
	while (elements.length > 0) elements[0].remove();

	let time   		   = parseInt(document.getElementById("time").value);  //Time of animation
	let numberElements = document.getElementById("numberElements").value; //Number of Elements 1000 is recommended
	let width  		   = parseInt(document.getElementById("width").value);    //Initial width
    let height 		   = parseInt(document.getElementById("height").value);    //Initial height
    let transparency   = String(document.getElementById("transparency").value); //Max 99. Empty is solid
    let borderRadius   = document.getElementById("borderRadius").value;   //Ex. 50
    let colorHex       = document.getElementById("colorHex").value;   //Ex:#ff0000 if empty is entered a random value
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

