import { User } from './../src/planet-age-calculator.js';

describe('User', () => {

  test('should properly set up a user object with a name and age', () => {
    const user = new User('Ben', 23);
    expect(user.name).toEqual('Ben');
    expect(user.age).toEqual(23);
  });

  test('should correctly calculate the users age using Mercurys solar year', () => {
    const user = new User('Ben', 23);
    expect(user.mercuryAge(user.age)).toEqual(95);
  });

  test('should correctly calculate the users age using Venus solar year', () => {
    const user = new User('Ben', 23);
    expect(user.venusAge(user.age)).toEqual(37);
  });

});