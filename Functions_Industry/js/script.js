//Joanna Mokhtarezadeh  5-2-2013
//Industry
//Cost of Druzy Princess Cuff during Holiday Specails. Added bonus for customer purchases over $125.

var crystals = prompt("How many crystals would you like to add to this design?");
var pattWire = prompt("What is the cost of 3 inches of sterling pattern wire?");
var pharWrap = druzy(18, 7);
var pattern = 1 * Number(pattWire);
var crysCost = .08 * Number(crystals);
var total = pharWrap + crysCost + pattern;
var custCost = total * 2;
var dicount = "Free Shipping";
var freeGift = "Swarovski Earrings";

function druzy(stone, silver){
	var total = stone + silver;
	return total;
}

freeGift = (custCost >= 125) ? "Your total material cost for this design is"+" "+"$"+total+". You should also give"+" "+freeGift+" "+"during Black Friday with this purchase." : "Your total material cost for this design is"+" "+"$"+total+" "+" You should also give"+" "+dicount+" "+"during Black Friday with this purchase.";
console.log(freeGift);





