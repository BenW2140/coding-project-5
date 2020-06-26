export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercuryAge(age) {
    age /= .24;
    return Math.floor(age);
  }

  venusAge(age) {
    age /= .62;
    return Math.floor(age);
  }
}