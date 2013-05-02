//Joanna Mokhtarezadeh  5-1-2013
//Personal
//How many calories do I eat in a day

bcals = function(coffee,cearal){	//function for total calories for a cup of coffee and a bowl of mini wheats
	var bfastTotal = coffee + cearal;
	return bfastTotal;
}

scals = function(apple,orange){
	var snackTotal = apple + orange;
	return snackTotal;
}  

var b = bcals(100, 270);

var s = scals(55,65);

var lunchCals = prompt("How many calories did you have for lunch?");
var dinnerCals = prompt("How many calories did you have for dinner?");
var totalDay = Number(lunchCals) + Number(dinnerCals);

console.log(totalDay);
 
