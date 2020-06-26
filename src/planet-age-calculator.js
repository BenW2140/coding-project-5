export class User {
  constructor(name, age, planet, gender, nationality) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.gender = gender;
    this.nationality = nationality;
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
    let userLifeExpectancy = 70;
    if (gender === 'Male') {
      userLifeExpectancy--;
    } else {
      userLifeExpectancy++;
    }
    if (nationality === 'American' || nationality === 'Mexican') {
      userLifeExpectancy--;
    } else {
      userLifeExpectancy++;
    }
    return userLifeExpectancy;
  }

  calculatePlanetLifeExpectancy(lifeExpectancy, age, planet) {
    if (age > lifeExpectancy) {
      const extraYears = age - lifeExpectancy;
      const extraSpaceYears = this.calculatePlanetAge(extraYears, planet);
      return extraSpaceYears;
    } else {
      const yearsToLive = lifeExpectancy - age;
      const spaceYearsToLive = this.calculatePlanetAge(yearsToLive, planet);
      return spaceYearsToLive;
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