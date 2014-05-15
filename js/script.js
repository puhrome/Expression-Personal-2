/**
 * Expressions Personal Created by Phirom Yim on 5/15/14.
 */
//Using an Array to Calculate the average amount of hours I spend a week riding my bike


var bikeRide = [ 0.75, 0.50, 1.0, 2.0, 0.75, 1.50, 0.50];//using arrays for numbers

var total = bikeRide[0] + bikeRide[1] + bikeRide[2] + bikeRide [3] + bikeRide [4] + bikeRide [5] + bikeRide [6];//name of the array then [ ] and the index number
console.log(total);//print to console the amount of total hours in array
var average = total/7;//divide the array access notations by 7 days in a week
console.log(average);//print to add array access notations

alert("You average " + average + " " + "hour(s) a week in riding your bike");//creating alert and concatenation

//Using the average in a week to multiply by 4 weeks in a month to calculate monthly average
average *= 4;//using assignment to multiply average by 4

alert("You average " + average + " " + "hour(s) a month in riding your bike");//creating alert and concatenation

