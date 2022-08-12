// Arrays can be typed using  type annotation followed by empty array brackets linke number[] for array of numbers

const activeUsers: string[] = [];
activeUsers.push("Junaid");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

// alternate ways
Array<boolean>

// Array of non-primitive types

type Point = {
x:number;
y:number; 
}

let coordinates : Point[] = []

// Multi-dimensional array 

const borad:string[][] =[["X","O","X"],["O","X","X"],["X","O","X"]] 