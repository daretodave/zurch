import { fold } from './fold';

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

  test('Should fold list', () => {
    let numbers = [1, 2, 3]
    let add = n => m => n + m

    let sum = fold(add)(0)

    expect(sum(numbers)).toEqual(6)
  })

});

