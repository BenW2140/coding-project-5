export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calculateAge(age) {
    age /= .24;
    return age;
  }
}