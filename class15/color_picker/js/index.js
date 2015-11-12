$(document).ready(function(){

/* 
	$('#grayButton').click(switchGray);
	$('#whiteButton').click(switchWhite);
	$('#blueButton').click(switchBlue);
	$('#yellowButton').click(switchYellow);

	function switchGray() {
	  $('body').attr('class', 'gray');
	}

	function switchWhite() {
	  $('body').attr('class', 'white');
	}

	function switchBlue() {
	  $('body').attr('class', 'blue');
	}

	function switchYellow() {
	  $('body').attr('class', 'yellow');
	}

	*/

	//to select all:
	//$('#grayButton, #whiteButton, #blueButton, yellowButton')
	//OR:

	//find list items, attach click handler, when clicked, grab class and assign to this variable, take class name from var, attach it to the li
	$("li").click(function () {
		var buttonClassName = $(this).attr('class');
		$('body').attr('class', buttonClassName);

	});

});