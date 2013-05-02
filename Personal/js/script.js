

//var lunch calories = Number("How many calories did you have for lunch?");
//var dinner calories = Number("How many calories did you have for dinner?");

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
//console.log(b);
console.log(s);