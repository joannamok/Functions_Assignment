//Joanna Mokhtarezadeh  5-1-2013
//Industry
//cost of Druzy Princess Cuff Design

var crystals = prompt("How many crystals would you like to add to this design?");
var pharWrap = druzy(18, 7);
var crysCost = .08 * Number(crystals);
var total = pharWrap + crysCost;


function druzy(stone, silver){
	var total = stone + silver;
	return total;
}

console.log(total);





