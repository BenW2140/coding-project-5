export class User {
  constructor(name, age, planet, gender, nationality) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.gender = gender;
    this.nationality = nationality
  }

  calculatePlanetAge(age, planet) {
    switch (planet) {
      case ('Mercury'):
        return Math.floor(age /= .24);
      case ('Venus'):
        return Math.floor(age /= .62);
      case ('Mars'):
        return Math.floor(age /= 1.88);
      case ('Jupiter'):
        return Math.floor(age /= 11.86);
      default:
        break;
    }
  }

  calculateLifeExpectancy(gender, nationality) {

  }
}