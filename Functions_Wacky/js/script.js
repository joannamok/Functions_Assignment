//Joanna Mokhtarezadeh  5-2-2013
//Wacky
// School Fundraiser 

//Booksets,Goodie Baskets and Coupon Books Sale - Students who sell $150 or more OR 8 items or more receive a grandprize. Students who sell less recieve a small prize.

var kidsPack = function(book,pack){		// Kids Bookset - function for combining the price for a kids bookset and totebag
	var total = book + pack;
	return total;
}

var bakedPack = function(basket,brownies,cookies){		//Baked Goodies Basket - function for combining the price for a basket,browines and cookies
	var total = basket + brownies + cookies;
	return total;
}

var k = kidsPack(10,5);		//prices book and tote bag within function

var kidsPackSold = prompt("How many Children's Book Totebags did this student sell? ");		//user prompt to ask how many kids booksets were sold by student

var kidsPackTotal = k * Number(kidsPackSold);		//calculates how much money was raised by student from total kids booksets

var couponBook = 20;

var couponBookSold = prompt("How many Coupon Books did this student sell? ");		//user prompt to ask how many coupon books were sold by student

var couponBookTotal = couponBook * Number(couponBookSold);		//calculates how much money was raised by student from total coupon books

var b = bakedPack(5,10,5);		//prices for baked goods and basket within Baked Goodies function

var bakedPackSold = prompt("How many Sweets Baskets did this student sell? ");		//user prompt to ask how many sweets baskets were sold by student

var bakedPackTotal = b * Number(bakedPackSold);		//calculates how much money was raised by student from total sweets baskets

var itemsSold = Number(kidsPackSold) + Number(couponBookSold) + Number(bakedPackSold);		//calculates how many items were sold total by students

var moneyRaised = kidsPackTotal + couponBookTotal + bakedPackTotal;		//calculates how much money was raised total by student 

var bigPrize = "Book Set and Flashlight Keychain"; 	//prize for selling $150 or more in goods or selling 15 items or more

var smallPrize = "Flash Light Keyhcain";	//prize for selling less than $150 or less than 8 items


if(itemsSold >= 8 || moneyRaised >= 150){
	//This message is for the students that sell $150 or more in goods or sell 8 items or more.
	console.log("This student wins the grand prize gift of a"+" "+bigPrize+" ."+"They sold a total of"+" "+itemsSold+" "+"items and raised a total of"+" "+"$"+moneyRaised+".");

}else{
	//This message is for the students that sell less than $150 or less than 15 items.
	console.log("This student wins the prize gift of a"+" "+smallPrize+" ."+"They sold a total of"+" "+itemsSold+" "+"items and raised a total of"+" "+"$"+moneyRaised+".");
}
 




