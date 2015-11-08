//ready the document for JS
$(document).ready(function(){

	//create a variable that will store an array of cities and a variable of 'i' for the for loop
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
	var i;
	var cityClass;
	var selectedCity;

	//create a for loop that will add each item in the city array to the drop down menu
	for (i=0; i<cities.length; i++){
		$('#city-type').append('<option>'+cities[i]+'</option>');
	};

	//when a city option in the drop down menu is selected, carry out a function to change the background image to the selected city
	$('#city-type').change(ChangeBackgroundPic);

	//follow this function to change background image to a certain city when user clicks on that city
	function ChangeBackgroundPic(){

		//console.log('function is running!');

		//create a new variable to call the class in the css to change a city's background image
		cityClass = ['nyc', 'sf', 'la', 'austin', 'sydney'];

		//test to make sure cityClass works:
		//i=1;
		//console.log(cityClass[i]);

		//define the selectedCity variable to be equal to whichever city the user has selected
		selectedCity = $('#city-type').val();
		//console.log(selectedCity);

		//if selected option is the menu option, alert that a city has not been selected
		if (selectedCity === 'Select a City') {

			alert('Please select a city');
			
		}
		//otherwise, find the class of the corresponding city and change the background accordingly
		else {

			//console.log(selectedCity);

			var iOfCity = $(selectedCity).index(cities);
			console.log(iOfCity);

			cities.push(cityClass[i]);

			$('body').attr('class', cityClass[i]);	
			
		};

	}
});

