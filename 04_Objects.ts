let Dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 5,
};

function printName(name: { firstName: string; lastName: string }) {}

printName({ firstName: "Elton", lastName: "Steele" });

let coordinate: { x: number; y: number } = { x: 5, y: 10 };

// Type aliases

type Coordinate = {
  x: number;
  y: number;
};

function doubleCoordinate(coordinate: Coordinate): Coordinate {
  return { x: coordinate.x * 2, y: coordinate.y * 2 };
}

// Nested objects

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculateEarnings(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

let earnings = calculateEarnings(mySong);
console.log(earnings);
printSong(mySong);

// Optional properties

type Point = {
  x: number;
  y: number;
  z?: number;
};

// Read only modifier  - helps us marks certain properties as read only we cant change it

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: "catgurl",
};

user.username = "DogLover";

// Intersection types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "green",
};

type Cat = {
  numLives: number;
};

type Dog2 = {
  breed: string;
};

type CatDog = Cat &
  Dog2 & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
