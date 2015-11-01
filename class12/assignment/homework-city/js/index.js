//When a user submits the name of a new city in the input box, modify the css so the background image of the page will correspond to the city

//Prepare the document to do JS but prevent it from starting until after the DOM is loaded
$(document).ready(function(){
	
	//set a variable called 'city' to store the background image
	var city;

	//listen for the user to enter a city name
	$('form').submit(changeBackgroundPic);

	//create a function that will change the background image when a user submits a new city
	function changeBackgroundPic(event) {

		//prevent the log from clearing
		event.preventDefault();

		//modify the variable of city so that it will be tied to the user's input of a city name
		//convert all the text to lowercase so case won't matter as long as the name is spelled correctly
		//BONUS: trim out extra spaces that a user may enter before or after the city name so extra spaces won't confuse the function
		city = $('#city-type').val().toLowerCase().trim();

		//if the user wants one of the following cities, change the background to the image of that city
		if (city === 'new york' || city === 'new york city' || city === 'nyc'){
			$('body').attr('class', 'nyc');
		}
		else if (city === 'san francisco' || city === 'sf' || city === 'bay area'){
			$('body').attr('class', 'sf');
		}
		else if (city === 'los Angeles' || city === 'la' || city === 'lax'){
			$('body').attr('class', 'la');
		}
		else if(city === 'austin' || city === 'atx'){
			$('body').attr('class', 'austin');
		}
		else if(city === 'sydney' || city === 'syd'){
			$('body').attr('class', 'sydney');
		}

		//if they choose a different city than the ones listed above, alert them that their choice is not an option
		else {
			alert('Bummer! That\'s not a valid city!');
		};

		//BONUS: clear the form submission box so it will be blank for the next entry
		$('#city-type').val(' ');
	};
})


