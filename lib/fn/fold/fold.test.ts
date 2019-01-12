// foldR.test.ts
import { fold } from './fold';

// Utilities
import { log } from '../../../util/log';
// ==================================================== //

        //           Fold Right                //
        // Haskell's foldR w/ pattern matching //
 
//  fold :: (a -> b -> b) -> b -> [a] -> b

// PATTERN TO BUILD WITH FOLDR  || USAGE:
// f []     = v                 || v = Identity/Base-Case
// f (x:xs) = x (+) f xs        || func(head xs) f(xs)

// ==================================================== //

// Mock Data
let numbers = [1, 2, 3, 4]
let letters = ['a', 'b', 'c']
let nested = [[1, 2, 3], ['a', 'b', 'c']]
let doubleNested = [[1, 2, 3], [['a'], ['b', 'c']] ]


describe('fold', () => {
  
  // SUM
  xtest('Should sum() List', () => {
    function add (n) {
      return function innerAdd (m) {
        return n + m
      }
    }

    let sum = fold(add)(0);
    
    log(sum(numbers))

    expect(sum(numbers)).toEqual(10)
  })

  // PRODUCT
  xtest('Should multiply() List', () => {
    function multiply (n) {
      return function innerMultiply (m) {
        return n * m
      }
    }

    let product = fold(multiply)(1);
    
    log(product(numbers))

    expect(product(numbers)).toEqual(24)
  })

  
  // SUBTRACTION
  xtest('Should subtract() List', () => {
    function subtract (n) {
      return function innerSubtract (m) {
        return n - m
      }
    }

    let sub = fold(subtract)(0);
    
    log(sub(numbers))

    expect(sub(numbers)).toEqual(-2)
  })

  // FLATONCE
  xtest('Should flatten array once', () => {
    function concat (n) {
      return function innerConcat (m) {
        return n.concat(m)
      }
    }

    let flattenOnce = fold(concat)([]);
    
    expect(flattenOnce(nested))
      .toEqual([1, 2, 3, 'a', 'b', 'c'])
    
    // Can't deep flatten
    expect(flattenOnce(doubleNested))
      .toEqual([1, 2, 3, ['a'], ['b', 'c']])
  })

  // SLUGGIFY
  test('Should convert Array to ', () => {
    function concat (n) {
      return function innerConcat (m) {
        return n.concat(m)
      }
    }

    let unSure = fold(
      prev => next =>
        concat(next)(concat(prev)(["-"]))
    )([]);
    
    expect(unSure(letters))
      .toEqual(['a', 'b', 'c'])

  })
});

