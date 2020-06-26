export class User {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality
  }

  mercuryAge(age) {
    return Math.floor(age /= .24);
  }

  venusAge(age) {
    return Math.floor(age /= .62);
  }

  marsAge(age) {
    return Math.floor(age /= 1.88);
  }

  jupiterAge(age) {
    return Math.floor(age /= 11.86);
  }
}