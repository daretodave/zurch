import { log } from '../../../../shapes-n-lances/lib/common/index';

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

export const 
  fold = func => base => collection => {
    const head = arr => arr[0]
    let accum = []
    
    // if ([]) {
      // return base;
    // }else{
      // return fold(func)(collection[0])(collection.slice(0, collection.length - 1));
      // return fold(func(accum.concat(func(head(collection)))))
      // return fold(func)(base)(func(accum) += (tail(collection)))
    // }
    return
}

/*
  Take:
    -func
    -base
    -collection
  
  1. Take the head of the collection
  2. Apply the function to it
*/