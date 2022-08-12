const twoFer = (name: string = "you") => {
  console.log(`one for ${name} , one for me`);
};

twoFer(); // => s"One for you, one for me"
twoFer("Elton"); // => "One for Elton, one for me"

const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2012)); // => true
console.log(isLeapYear(2013)); // => false
