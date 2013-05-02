//Joanna Mokhtarezadeh  5-1-2013
//Personal
//Calorie intake per day based on an 1800 calories per day diet plan

bcals = function(coffee,cearal){	//function for total calories for a cup of coffee and a bowl of mini wheats
	var bfastTotal = coffee + cearal;
	return bfastTotal;
}

scals = function(apple,orange){ //function for a daily snack of 1 apple and 1 orange
	var snackTotal = apple + orange;
	return snackTotal;
}  

var b = bcals(100, 270); //calories cup of coffee and bowl of frosted miniwheats

var s = scals(55,65); // calories of apple and orange

var lunchCals = prompt("How many calories did you have for lunch?"); // User prompt for amount of lunch calories

var dinnerCals = prompt("How many calories did you have for dinner?"); // User promt for amount of dinner calories 

var totalDay = Number(lunchCals) + Number(dinnerCals) + b + s; // total calories for entire day,including breakfst,lunch,dinner and a snack.

var over = totalDay - 1800; // variable for conditional that tells how many calories over diet for the day

if(totalDay <= 1800){

	console.log("Congrats you stayed in your goal calorie range today! You consumed a total of"+" "+totalDay+" "+"calories."); // Message for staying within 1800 calorie range,states how many calories consumed. 

}else{

	console.log("Ooops, you went over your diet plan by"+" "+ over+" "+"calories today."); // Message for going over 1800 calories, states how many calories over

}

 
