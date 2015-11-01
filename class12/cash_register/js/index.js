$(document).ready(function(){
	//variable to capture the current total
	var total = 0;

	//listen for the user to submit a new price
	$('#entry').submit(sumTotalAndNewEntry);

	//create function to listen for amount
	function sumTotalAndNewEntry(event){
		
		//this prevents the log from clearing (preserves the log)
		event.preventDefault();

		//get the value from the input field newEntry
		var entryNew = $('#newEntry').val();
		console.log('entryNew value: ' + entryNew);

		//convert the value to a number
		var entryNewNum = parseFloat(entryNew);
		console.log('entryNewNum value: ' + entryNewNum);

		//change the number of the new entry into currency
		var entryNewCurrency = currencyFormat(entryNewNum);
		console.log('entryNewCurrency value: ' + entryNewCurrency);
		
		//check in console that string is being converted to number (need to preserve log -- that's another lesson)
		console.log(entryNewNum);

		//create a new variable as a placeholder (no data in it yet) so we'll be able to change the new total into currency
		var totalCurrency;

		//update the current total
		total += entryNewNum;

		//put the new total into the currency format with dollar sign and decimals, and store it in the variable for later
		totalCurrency = currencyFormat(total);
		console.log('totalCurrency value: ' + totalCurrency);

		//find the ID of 'entries' in the HTML and create a new table row with the value of the input as currency 
		$('#entries').append('<tr><td>' + entryNewCurrency + '</td></tr>');

		//find the ID of 'total' in the html and update the text to the value of the total as currency
		$('#total').text(totalCurrency);

	};

	//create function to convert all numbers to currency
	function currencyFormat (numberToConvert){
		//numberToConvert will be whatever number is passed to this function in parenthesis (the argument entryNewNum above)... this number will either be user input or the total

		//take the number that was passed to this function and give it two decimal places
		var currency = numberToConvert.toFixed(2);

		//add a dollar sign to the front of the currency amount -- this makes the variable a string!!
		var currencyWithDollar = '$'+currency;

		//gives the final currency with a dollar sign in front
		return currencyWithDollar;

	};
});


