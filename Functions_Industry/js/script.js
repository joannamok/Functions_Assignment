//Joanna Mokhtarezadeh  5-2-2013
//Industry
//Cost of Druzy Princess Cuff Design

var crystals = prompt("How many crystals would you like to add to this design?");
var pattWire = prompt("What is the cost of 3 inches of sterling pattern wire?");
var pharWrap = druzy(18, 7);
var pattern = 1 * Number(pattWire);
var crysCost = .08 * Number(crystals);
var total = pharWrap + crysCost + pattern;
var custCost = total * 2;



function druzy(stone, silver){
	var total = stone + silver;
	return total;
}

console.log(custCost);





