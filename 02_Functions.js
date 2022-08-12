// Using typescript we can define the retuern type of the function as well as the type of paramater
// Syntax
// function(parameter:type): return type {
// code goes here
// }
function square(num) {
    return num * num;
}
function Bio(name, age) {
    console.log("Mr. ".concat(name, " is ").concat(age, " years old."));
}
Bio("Junaid", 22);
//Working with default parmaters
function greet(name) {
    if (name === void 0) { name = "Stranger"; }
    console.log("Hello " + name);
}
greet();
