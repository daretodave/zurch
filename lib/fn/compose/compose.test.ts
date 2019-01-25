import { compose, compose_ } from './compose';

describe('compose', () => {
  test('compose to create addDouble', () => {
    const add = n => m => n + m;
    const multiply = n => m => n * m;

    const add5 = add(5);
    const double = multiply(2);
    const triple = multiply(3);

    // Compose goes from right to left
    // const add5ThenDouble = compose(add5)(double)
    // add5ThenDouble(5) === 15
    // add5ThenDouble(5) !== 20

    const add5ThenDouble = compose(double)(add5);
    
    // Test other compose_
    const add10ThenTriple = compose_(triple)(add5);

    expect(add5ThenDouble(5)).toBe(20);
    // FAILS...
    expect(add10ThenTriple(5)).toBe(45);
  })

})