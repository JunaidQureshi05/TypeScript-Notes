var Dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 5,
};
function printName(name) {}
printName({ firstName: "Elton", lastName: "Steele" });
var coordinate = { x: 5, y: 10 };
function doubleCoordinate(coordinate) {
  return { x: coordinate.x * 2, y: coordinate.y * 2 };
}
function calculateEarnings(song) {
  return song.numStreams * 0.0033;
}
function printSong(song) {
  console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};
var earnings = calculateEarnings(mySong);
console.log(earnings);
printSong(mySong);
