
  /* Turn the following statements into javascript statements and functions. These are not in context to any html or css.


    1.  Write a function that logs in the console 7 as a string. Take the same string and make it a number - also log the result. Finally, add them together and log the result. */

    	function addStringAndNum(){
			var sevenString = "7";
			console.log('As a string: '+sevenString);
			var sevenNum = parseInt(sevenString);
			console.log('As a number: '+sevenNum);
			var addValues = sevenString + sevenNum;
			console.log(addValues);
    	};

//    2.  Write a function that returns the string "foo".

		function foo(){
			return 'foo';
		};

//    3.  Write a function that logs to the console "Today is" and a day of the week that is passed to your function in an argument (dayName). Call your function and make it run. 

		var dayName = 'Monday';

		function dayOfWeek(dayName) {
			console.log('Today is ' + dayName);
		};

//    4.  Write a function that takes two number arguments (num1 and num2). The function should add those 2 numbers and return the result.

		function addNums(num1,num2){
			var sum = num1 + num2;
			return sum;
		};

//    5.  Write a function that takes two number arguments (num1 and num2). The function should multiply those 2 numbers and return the result.

		function multiplyNums(num1,num2){
			var product = num1 * num2;
			return product;
		};

//    BONUS: Write a function that takes one argument (num). Make the function return true if that number is even and return false if it's odd.

   		function oddOrEven (num) {
   			if (num%2===0){
   				return true;
   			}
   			else {
   				return false;
   			};

   		};

