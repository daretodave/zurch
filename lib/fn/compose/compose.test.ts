import { compose, compose_ } from './compose';

const add = (n: number) => (m: number) : number => n + m;
const multiply = (n: number) => (m: number): number => n * m;

const double = multiply(2)
const add5 = add(5)

describe('compose', () => {

  test('compose works right to left', () => {
    const add5Double  = compose(double)(add5)

    // Right to Left
    expect(double(add5(10))).toBe(30);
    expect(add5Double(10)).toBe(30)
  }),

  test('compose_ can take multiple args', () => {
    const add5Double_ = compose_(double, add5)

    // Right to Left
    expect(double(add5(10))).toBe(30);
    expect(add5Double_(10)).toBe(30)
  })
})