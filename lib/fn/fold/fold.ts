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

/*
  fold() can work on Arrays, Strings, or any other data 
  collection in Javascript that can use the
  spread operator to iterate over itself.
*/

export const
  fold = 
    (fn: Function) =>
      (base: any) =>
        ([x, ...xs]: any) =>
          !x ? base : !xs.length
            ? fn(x)(base)
            : fn(x)(fold(fn)(base)(xs))
