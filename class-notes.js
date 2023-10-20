//Throw this into jsFiddle

const tasks = [
  { name: "Lunch Kit", packed: true },
  { name: "Computer Charger", packed: true },
];

var myObject = {};
myObject = { name: "Chris" };
myObject.score = 15;
console.log(myObject);

var myArray = [88, 3, 9, 4];
console.log(myArray[2]);

var sorted = myArray.sort();
console.log(sorted); //Alphabetical sort

var sorted = myArray.sort((a, b) => a - b);
console.log(sorted); //Numeric sort

var slots = Object.keys(myArray);
console.log(things); //Array has attributes like an object

var things = Objects.values(myArray);
console.log(things); //Array has values of attributes like an object

var manipulated = sorted.forEach(function (x) {
  console.log(x);
}); //For each item in the thing

var manipulated2 = sorted.forEach(function (x, i) {
  console.log(i, "->", x);
}); //Print multiple

var manipulated3 = sorted.forEach(function (x, i) {
  x = x + i;
  console.log(x);
});
console.log(manipulated3); //Merge index number and item

function randomFunc(x, i, arr) {
  //Manipulates the item, index, and entire array
  console.log("man4= " + x + arr);
}
var manipulated4 = myArray.forEach(randomFunc); //Runs randomFunc

var theChair = {
  hasLegs: 4,
  broken: false,
};

var { hasLegs, broken } = theChair; //DOESNT WORK?

console.log("inChair" + theChair.hasLegs);
console.log("hasLegs=" + hasLegs);

var hasLegs2 = theChair.hasLegs;
console.log("hasLegs2=" + hasLegs2);

theChair.hasLegs = 9;
console.log("inChair" + theChair.hasLegs);
console.log("hasLegs=" + hasLegs);
console.log("hasLegs2=" + hasLegs2);

//JSON as array is []
//JSON as object is {}

//convert a js object to JSON:
const jsonLunch = JSON.stringify(soup);
//convert a JSOn to a js object:
const newLunch = JSON.parse(jsonLunch);
//OR USE AN ONLINE CONVERTER

//doSomething and doSomethingElse are identical in function
function doSomething(vari) {
  console.log(vari);
}
var doSomethingElse = (vari) => console.log(vari);

// ALL OF THESE ARE THE SAME
myArray.forEach(doSomething); //SAME AS OTHERS
myArray.forEach((v) => console.log(v)); // SAME AS OTHERS
for (var val in myArray) {
  console.log(val);
} //SAME AS OTHERS
myArray.forEach(val,index)=>(console.log(index,val)); //Same idea, but more details

var x = 1;
if (x == 1) console.log("one"); //THIS STYLE ONLY WORKS WITH A SINGLE LINE OF INPUT ONLY; UNABLE TO WORK WITH MULTIPLE LINES OF CODE WHEN EXECUTING A CONDITIONAL IN THIS CASE
/* Will not work as:
if (x==1) console.log("ninety"); console.log("twenty"); */