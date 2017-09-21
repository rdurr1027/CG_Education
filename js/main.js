var teacher = "Sally Jones";
var department = "Physics";
var ratings1 = 3.4;
var ratings2 = 5;
var ratings3 = 4.2;
var avgRating = (ratings1 + ratings2 + ratings3)/3;
var avgRatingRounded = Math.round(avgRating*10)/10;

console.log("This file is linked!");

console.log("Teacher: " + teacher);
console.log("Department: " + department);
console.log("Ratings: " + ratings1.toFixed(1) + ", " + ratings2.toFixed(1) + ", " + ratings3.toFixed(1));
console.log(avgRatingRounded);


var Major = "Major";
var GPA1 = 6;
var GPA2 = 3.8;
var GPA3 = 4.5;
var avgGPA = (GPA1 + GPA2 + GPA3)/3;
var roundedGPA = Math.round(avgGPA*10)/10;

console.log("Teacher: " + teacher);
console.log("Major: "+ Major);
console.log("Average GPA: " + roundedGPA );
