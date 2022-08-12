// Basic types

// Primitives types

// 1)Number
// 2)String
// 3)Boolean
// 4)Null
// 5)Undefined
// 6)Void
// 7)Any
// 9)Never
// 10)Unknown

//  Set variable type
//  keyword variableName:type = value

let PI: number = 3.1417;
let firstName: string = "Junaid";
let isActive: boolean = true;

// Inference
// Inference means if we dont define the type of a variable then typescript will automatically detect its type and set it
// for example
let noOfUsers = 10;
// Typescript will automatically detect the type of a variable and set it to number

// Any type    - variable with its type defined as any can store any data

let something: any = 112;

something = "wdwdwdwd";
