// foldR.test.ts
import { fold } from './fold';

// Utilities
import { log } from '../../../utilities/log';

//           Fold Right                //
// Haskell's foldR w/ pattern matching //

/* 
  fr :: (a -> b -> b) -> b -> [a] -> b
  fr f v []     = v
  fr f v (x:xs) = f x (fr f v xs)
*/

// PATTERN TO BUILD WITH FOLDR  || USAGE:
// f []     = v                 || v = Identity/Base-Case
// f (x:xs) = x (+) f xs        || func(head xs) f(xs)

describe('fold', () => {
  
  let numbers = [1, 2, 3, 4]
  let letters = ['a', 'b', 'c']

  function add (n) {
    return function innerAdd (m) {
      return n + m
    }
  }

  function multiply (n) {
    return function innerMultiply (m) {
      return n * m
    }
  }
  
  // SUM
  test('Should sum() List', () => {
 
    let sum = fold(add)(0);
    
    log(sum(numbers))

    expect(sum(numbers)).toEqual(10)
  })

  // PRODUCT
  test('Should multiply() List', () => {
 
    let product = fold(multiply)(1);
    
    log(product(numbers))

    expect(product(numbers)).toEqual(24)
  })

});

