/*let string = "strings";
let sentence = "Hello " + "Junshen";
let sentence2 = " and Ema";*/
//console.log(sentence + sentence2);

/*const longSentence = `${student1} and ${student2} are amazing and will be taking ${courseName} with ${teacherName}`; //Template literal or Template String
let url = ${url}${movie}  */


////Numbers or Integers
/*let year = 2020;
let nextYear = 2020 + 1;
let past = 2020 / 2;
let farFuture = 2020 * 50;*/

//////////Booleans
/*let trueStatement = true;
let falseStatement = false;*/

/////Null and Undefined
//let Ron; //declared Ron but not defined Ron
//console.log(Sarah); used for debugging
/////console.log(Sarah);

/////////Boolean Logic
/*let student = "Caroline";
let age = 15;*/
//console.log(student === "Caroline");
//console.log(student === "caroline");
//console.log(age === "15");
//console.log(age == "15");
/*console.log(age <= 15 || age > 19);
console.log(age <= 15 && age > 19);*/

//////If statements
/*let school = "Elementary";
if(school === "Elementary") {
    console.log("You are in k-5");
} else if(school === "Middle"){
    console.log("You are ion 6,7 or 8th garde");
} else {
    console.log("you are in HS");
}
let ron = "Ron";
console.log(ron !== "Ema");*/

//Challenge 1
/*let lightColor = "green";
if (lightColor === "green") {
    console.log("Go!");
} else if (lightColor === "yellow") {
    console.log("Caution!");
} else {
    console.log("STOP!");
}*/

//Challenge 2 
/*let kristyTollerance = true;
let baoBaoTollerance = true;
if (kristyTollerance === true && baoBaoTollerance === true) {
    console.log("Only Milk");
} else if (kristyTollerance === true || baoBaoTollerance === true) {
    console.log("Get both milks");
} else {
    console.log("Only Almond Milk");
}*/

//Challenge 3
/*let temp = 67;
if (temp < 68) {
    console.log("Too Cold!");
} else if (temp >= 68 && temp <= 72) {
    console.log("Perfect");
} else if (temp >= 73 && temp <= 76) {
    console.log("Warm");
} else {
    console.log("Too Hot!");
}*/

//////functions
/*function test () {
    console.log("TEST");
}
test();*/

/*function argument(name1, name2) {
    console.log(name1, name2);
}
argument("val", "eric");*/

/*const add = function(x,y) {
    return x + y; //immediately ends the function
}
console.log(add(10, 3));*/
/*const hello = function() {
    alert("hello");
};
const bye = function() {
    alert("Bye");
};

const beatles = function() {
    hello();
    bye();
    hello();
    bye();
};
beatles();*/

///scope
/*const name = "Michael y"; //global space
function makeFunc () {
    const name = "Sun"; //function scope
    function displayName() {
        alert(name); //inner function can access outer function
    }
    return displayName; //returning the inner function;
}
const myFunc = makeFunc();
myFunc();*/

//////////arrays
//const names = ["Diego", "Frid", "Christian", "Valerie", "Haoran", "Brian", "Caroline"];
//names.push("Caroline");
//names.forEach(el => console.log(el));
//names.filter(//somecode).forEach(el () => console.log(el))

///spread operator
//const numbers = [1, 2, 3];

/*const add = function (x, y, z) {
    return x + y;
};
console.log(add(...numbers));*/

//////CHALLENGES FOR ARRAYS

//CHALLENGE 1
/*let students = ["Riya", "Omor", "Alan", "Michael", "Lisa", "Richard"];
students.filter(student => student.length >= 5).forEach(el => console.log(el))*/

//CHALLENGE 2
/*let students = ["Riya", "Omor", "Alan", "Michael", "Lisa", "Richard"];
console.log(students.includes("junshen"));
console.log(students.some(student => student === "Alan" || student === "Savva"));*/