//Joanna Mokhtarezadeh  5-2-2013
//Industry

//Material Cost and Customer's Cost of Druzy Princess Cuff during Holiday Specails. Added bonus for customer purchases over $125. 

var crystals = prompt("How many crystals would you like to add to this design?"); //Amount of 4mm Swarosvki Crystals used for design

var pattWire = prompt("What is the cost of 3 inches of sterling pattern wire?"); // cost of pattern wire for cuff

var pharWrap = druzy(18, 7); // total cost for function materails

var pattern = 1 * Number(pattWire); //cost of pattern wire

var crysCost = .08 * Number(crystals); //cost of crystals

var total = pharWrap + crysCost + pattern; //total cost of making cuff

var custCost = total * 2; //cusotmer's cost for cuff

var dicount = "Free Shipping"; //discount for cutomer's purcahse of $124 or less

var freeGift = "Swarovski Earrings"; //discount for customer's purchase of $125 or more

var addEarrings = total + 8; //total cost of free gift of Swarovski Earrings

var addDiscount = total + 5; //total cost of free gift of free shipping


function druzy(stone, silver){ //function stores costs for druzr cabochon and silver for making centerpiece of cuff

	var total = stone + silver;

	return total;
}

//Message tells my total cost of materials,including free gift costs. Also states customers price for design.

freeGift = (custCost >= 125) ? "Your total material cost for this design is"+" "+"$"+addEarrings+". This includes their free gift of"+" "+freeGift+" "+"during Black Friday. The customer's cost will be"+" "+"$"+custCost+" "+"." : "Your total material cost for this design is"+" "+"$"+addDiscount+" "+" This includes their"+" "+dicount+" "+"during Black Friday with this purchase. The customer's cost for this design will be"+" "+"$"+custCost;
console.log(freeGift);





