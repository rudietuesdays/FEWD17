
//steps to creating JS code:
//what information do i need to store?
//fwhat events do i need to listen to?
//how should my code react when those events occur?

$(document).ready(function(){
	//info being stored (variables):
	var animals = ['animal1.jpg','animal2.jpg','animal3.jpg','animal4.jpg','animal5.jpg','animal6.jpg','animal7.jpg'];
	var i = 0;
	var lastIndexOfArray = animals.length-1;

	//what code will listen for (events):
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);

	//how code will react (functions):
	function goToNextAnimal () {

		if (i===lastIndexOfArray) {
			i=0;
		} else {
			i++;
		};

		console.log('index: '+i);

		var nextAnimal = animals[i];
		console.log('animal: '+nextAnimal);

		$('#image-to-vote-on').attr('src','images/'+nextAnimal);

	};

	function goToPreviousAnimal () {

		if (i===0) {
			i=lastIndexOfArray;
		} else {
			i--;
		};

		console.log('index: '+i);

		var priorAnimal = animals[i];
		console.log('animal: '+priorAnimal);

		$('#image-to-vote-on').attr('src','images/'+priorAnimal);

	};

});