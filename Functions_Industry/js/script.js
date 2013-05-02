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
var addEarrings = total + 8;
var addDiscount = total + 5;


function druzy(stone, silver){
	var total = stone + silver;
	return total;
}

freeGift = (custCost >= 125) ? "Your total material cost for this design is"+" "+"$"+addEarrings+". This includes their free gift of"+" "+freeGift+" "+"during Black Friday. The customer's cost will be"+" "+"$"+custCost+" "+"." : "Your total material cost for this design is"+" "+"$"+addDiscount+" "+" This includes their"+" "+dicount+" "+"during Black Friday with this purchase. The customer's cost for this design will be"+" "+"$"+custCost;
console.log(freeGift);





