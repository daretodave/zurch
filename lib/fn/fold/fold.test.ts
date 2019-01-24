// foldR.test.ts
import { fold, fold_ } from './fold';

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
let nada = []
let numbers = [1, 2, 3, 4]
let letters = ['a', 'b', 'c']
let nested = [[1, 2, 3], ['a', 'b', 'c']]
let doubleNested = [[1, 2, 3], [['a'], ['b', 'c']]]
let stringOfLetters = "Here is a String"
let names = [
  {name: "Steve"},
  {name: "John"},
  {name: "Mary"},
  {name: "Sasha"}
]


describe('fold test suite', () => {

  // ACCEPTS A STRING
  xtest('Should return first letter of string', () => {
    expect(fold(x => y => x)('')(stringOfLetters)).toBe('H')
  })

  // ACCEPTS AN ARRAY
  xtest('Should return head, always', () => {
    // CONST func returns first element always
    expect(fold(x => y => x)(0)(numbers)).toBe(1)
  })

  // EMPTY COLLECTION
  xtest('Should return the base', () => {
    const arbitraryFunc = x => y => x
    expect(fold(arbitraryFunc)(0)([])).toBe(0)
  })

  // ACCEPTS ARRAYS OF OBJECTS
  xtest("Should return the first element's name", () => {
    
    expect(fold(x => y => x.name)({})(names)).toBe("Steve")
    // expect(fold(x => y => y.name)({})(names)).toBe("Sasha")
  })
  
  // SUM
  test('Should sum() List', () => {
    function add (n) {
      return function innerAdd (m) {
        return n + m
      }
    }

    let sum = fold_(add)(0);
    
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

  // HIGHEST N-VALUE IN ARRAY
  xtest('Should return 666', () => {
    const localNumbers = [1, 2, 666, 3, 4, 5]
    expect(fold(n => m => m > n ? m : n)(0)(localNumbers)).toEqual(666)
  })
});

