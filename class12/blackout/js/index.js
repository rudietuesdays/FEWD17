$(document).ready(function(){
	
	//setting up a variable to store whether the lights are on or off
	//var lights = 'daytime';
	var lightsOn = true

	//listener waiting for user to click the light switch button
	$('#light_switch').click(switchLights);

	function switchLights(){
		
		//test to see if the lights are on
		//if(lights==='daytime'){
		if(lightsOn){

			//if yes, change the background color to black
			$('body').css('background-color', 'black');

			//update the current state of the variable so it knows the lights are off
			//lights='nighttime';
			lightsOn=false;

		}// else if (lights === 'nighttime'){
		else {

			//if no, change the background color to white
			$('body').css('background-color', 'white');
			//lights='daytime';
			lightsOn=true;

		};

	};

});