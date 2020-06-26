import { User } from './../src/planet-age-calculator.js';

describe('User', () => {

  test('should properly set up a user object with a name and age', () => {
    const user = new User('Ben', 23, 'Mercury', 'Male', 'American');
    expect(user.name).toEqual('Ben');
    expect(user.age).toEqual(23);
    expect(user.planet).toEqual('Mercury');
    expect(user.gender).toEqual('Male');
    expect(user.nationality).toEqual('American');
  });

  test('should correctly calculate the users age using Mercurys solar year', () => {
    const user = new User('Ben', 23, 'Mercury', 'Male', 'American');
    expect(user.calculatePlanetAge(user.age, user.planet)).toEqual(95);
  });

  test('should correctly calculate the users age using Venus solar year', () => {
    const user = new User('Ben', 23, 'Venus', 'Male', 'American');
    expect(user.calculatePlanetAge(user.age, user.planet)).toEqual(37);
  });

  test('should correctly calculate the users age using Mars solar year', () => {
    const user = new User('Ben', 23, 'Mars', 'Male', 'American');
    expect(user.calculatePlanetAge(user.age, user.planet)).toEqual(12);
  });

  test('should correctly calculate the users age using Jupiters solar year', () => {
    const user = new User('Ben', 23, 'Jupiter', 'Male', 'American');
    expect(user.calculatePlanetAge(user.age, user.planet)).toEqual(1);
  });

  test('should correctly calculate life expectancy for the user in earth years', () => {
    const user = new User('Ben', 23, 'Mercury', 'Male', 'American');
    expect(user.calculateLifeExpectancy(user.gender, user.nationality)).toEqual(68)
  });

  test('should correctly calculate how long the user has to live on the given planet', () => {
    const user = new User('Ben', 23, 'Mercury', 'Male', 'American');
    expect(user.calculatePlanetLifeExpectancy(user.calculateLifeExpectancy(user.gender, user.nationality), user.age, user.planet)).toEqual(187);
  });

  test('should correctly calculate how many years past the average life expectancy the user has lived, if they are older than the average life expectancy', () => {
    const user = new User('Marvin', 91, 'Mars', 'Male', 'American');
    expect(user.calculatePlanetLifeExpectancy(user.calculateLifeExpectancy(user.gender, user.nationality), user.age, user.planet)).toEqual(12);
  });

  test('should correctly calculate how many mayflies the sun has outlived', () => {
    const user = new User('Marvin', 91, 'Mars', 'Male', 'American');
    expect(user.numberOfMayflies(user.age)).toEqual(9565920);
  });

});