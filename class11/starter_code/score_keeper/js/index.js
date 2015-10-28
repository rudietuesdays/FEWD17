$(document).ready(function(){
	//storing the total value
	var total = 0;

	//set up listeners to check for button clicks and then do math
	$('#zero').click(resetToZero);
	$('#add5').click(add5);
	$('#add10').click(add10);
	$('#sub1').click(sub1);

	function printMath(){
		$('#result').text(total);
	};

	function resetToZero(){
		total = 0;
		printMath();
	};

	function add5() {
		total +=5;
		printMath();
	};

	function add10() {
		total +=10;
		printMath();
	};

	function sub1(){
		total -=1;
		printMath();
	};

});
