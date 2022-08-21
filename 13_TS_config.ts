//  use tsc --init command to create tsconfig.json file and configure typescript compiler

interface Chicken {
  breed: string;
  eggPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: "Silkie",
  eggPerWeek: 4,
  name: "Norma",
  age: 2,
};
