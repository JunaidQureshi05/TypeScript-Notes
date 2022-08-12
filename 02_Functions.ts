// Using typescript we can define the retuern type of the function as well as the type of paramater
// Syntax
// function(parameter:type): return type {
// code goes here
// }

function square(num: number): number {
  return num * num;
}

function Bio(name: string, age: number) {
  console.log(`Mr. ${name} is ${age} years old.`);
}

Bio("Junaid", 22);

//Working with default parmaters
function greet(name: string = "Stranger") {
  console.log("Hello " + name);
}

greet();
