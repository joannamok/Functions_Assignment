//Joanna Mokhtarezadeh  5-2-2013
//Wacky
// School Fundraiser

var kidsPack = function(book,pack){
	var total = book + pack;
	return total;
}

var bakedPack = function(basket,brownies){
	var total = basket + brownies;
	return total;
}

var k = kidsPack(10,5);
var kidsPackSold = prompt("How many Children's Book Totebags did this student sell? ");
var kidsPackTotal = k * Number(kidsPackSold);
var couponBook = 20;
var couponBookSold = prompt("How many Coupon Books did this student sell? ");
var couponBookTotal = couponBook * Number(couponBookSold);
var b = bakedPack(5,10);
var bakedPackSold = prompt("How many Brownie Baskets did this student sell? ");
var bakedPackTotal = b * Number(bakedPackSold);
var itemsSold = Number(kidsPackSold) + Number(couponBookSold) + Number(bakedPackSold);
var moneyRaised = kidsPackTotal + couponBookTotal + bakedPackTotal;
var bigPrize = "Book Set and Flashlight Keychain";
var smallPrize = "Flash Light Keyhcain";


if(itemsSold >= 10 || moneyRaised >= 150){
	console.log("This student wins the grand prize gift of a"+" "+bigPrize+" ."+"They sold a total of"+" "+itemsSold+" "+"items and raised a total of"+" "+"$"+moneyRaised+".");
}else{
	console.log("This student wins the prize gift of a"+" "+smallPrize+" ."+"They sold a total of"+" "+itemsSold+" "+"items and raised a total of"+" "+"$"+moneyRaised+".");
}
 




