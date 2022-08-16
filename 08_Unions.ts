// Union alloes us to give a value multiple types of possible dta types
// for example

let age: number | string = 12;

age = 12;
age = "Tweleve";

type Point = { x: number; y: number };
type Loc = {
  lat: number;
  long: number;
};

let coordinate: Point | Loc = { x: 0, y: 0 };
coordinate = { lat: 121.2121, long: 12.212 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(22);
printAge("22");

function caculateTax(price: string | number, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// Union arrays

const stuff: (number | string)[] = [1, 2, 3, 4, "5", "6", "7"];

// Literals types
let difficulty: "easy" | "medium" | "hard";
