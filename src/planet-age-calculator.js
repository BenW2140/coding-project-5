export class User {
  constructor(name, age, planet, gender, nationality) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.gender = gender;
    this.nationality = nationality;
    this.lifeExpectancy = 70;
  }

  calculatePlanetAge() {
    switch (this.planet) {
      case ('Mercury'):
        return Math.floor(this.age /= .24);
      case ('Venus'):
        return Math.floor(this.age /= .62);
      case ('Mars'):
        return Math.floor(this.age /= 1.88);
      case ('Jupiter'):
        return Math.floor(this.age /= 11.86);
      default:
        return "Please select a planet.";
    }
  }

  calculateLifeExpectancy() {
    if (this.gender === 'Male') {
      this.lifeExpectancy--;
    } else {
      this.lifeExpectancy++;
    }
    if (this.nationality === 'American' || this.nationality === 'Mexican') {
      this.lifeExpectancy--;
    } else {
      this.lifeExpectancy++;
    }
    return this.lifeExpectancy;
  }

  calculateYearsToLive() {
    this.calculateLifeExpectancy();
    if (this.age > this.lifeExpectancy) {
      const extraYears = this.age - this.lifeExpectancy;
      const extraSpaceYears = this.calculatePlanetLifeExpectancy(extraYears);
      return extraSpaceYears;
    } else {
      const yearsToLive = this.lifeExpectancy - this.age;
      const spaceYearsToLive = this.calculatePlanetLifeExpectancy(yearsToLive);
      return spaceYearsToLive;
    }
  }

  calculatePlanetLifeExpectancy(years) {
    switch (this.planet) {
      case ('Mercury'):
        return Math.floor(years /= .24);
      case ('Venus'):
        return Math.floor(years /= .62);
      case ('Mars'):
        return Math.floor(years /= 1.88);
      case ('Jupiter'):
        return Math.floor(years /= 11.86);
      default:
        return "Please select a planet.";
    }
  }
}



export function numberOfMayflies(age) {
  const mayflyLifespan = 5;
  const minutesInAYear = 525600;
  const mayfliesInAYear = minutesInAYear / mayflyLifespan;
  const outlivedMayflies = age * mayfliesInAYear;
  return outlivedMayflies;
}