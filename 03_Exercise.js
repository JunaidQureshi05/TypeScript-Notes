var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    console.log("one for ".concat(name, " , one for me"));
};
twoFer(); // => s"One for you, one for me"
twoFer("Elton"); // => "One for Elton, one for me"
var isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLeapYear(2012)); // => true
console.log(isLeapYear(2013)); // => false
