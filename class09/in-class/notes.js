target_temperature = 72

current_temperature = get_current_temp

repeat
	if current_temperature < target_temperature - 5
		turn_heater_on

	if current_temperature >= target_temperature
		turn_heater_off


rock 
paper
scissors

human = rock, paper, or scissors
computer = rock, paper or scissors

human = choose_hand
computer = choose_hand

if human = computer
	tie

if human = rock 
	if computer = paper
		computer wins
	if computer = scissors
		human wins

if human = paper
	if computer = rock
		human wins
	if computer = scissors
		computer wins

if human = scissors
	if computer = rock
		computer wins
	if computer = paper
		human wins

/* 
- best practice: javascript is best off at bottom of html code so page will render before code is loaded
- IDs important in javascript bc they are individual and can only be used once

*/

