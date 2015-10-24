//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

	function clearLights() {
		$('.bulb').css('backgroundColor', 'black');
		//query the doc for the class of bulb, then change the css of ('property', 'value')
	}

	function illuminateStopLightRed() {
		//clearLights();
		$('.bulb').css('backgroundColor', 'black');
		$('#stopLight').css('backgroundColor', 'red');
	}

	function illuminateSlowLightYellow() {
		clearLights();
		$('#slowLight').css('backgroundColor', 'yellow');
	}

	function illuminateGoLightGreen() {
		clearLights();
		$('#goLight').css('backgroundColor', 'green');
	}

	$('#stopButton').click(illuminateStopLightRed);
	//query the document for the ID stopButton, listen for a click, and follow the task of this variable

	$('#slowButton').click(illuminateSlowLightYellow);
	$('#goButton').click(illuminateGoLightGreen);

});