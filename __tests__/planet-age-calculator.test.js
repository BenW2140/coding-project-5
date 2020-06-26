import { User } from './../src/planet-age-calculator.js';

describe('User', () => {

  test('should properly set up a user object with a name and age', () => {
    const user = new User('Ben', 23);
    expect(user.name).toEqual('Neb');
    expect(user.age).toEqual(22);
  });

});