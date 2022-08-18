// Tuples are special type xclusive to TypeScript(they dont exist in javascript)

// Tuples are are array of fixed lengths and ordered with specific types - like super rigid arrays

type ColorCode = [number, number, number];
const color: ColorCode = [10, 22, 123];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
