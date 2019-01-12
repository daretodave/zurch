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
  fold =
    (fn: Function) => 
      (base: any) => 
        ([x,...xs]: any[]) => 
          fn(
            fn(x)(base))
            (((xs.length != 0)
              ? fold(fn)(base)(xs)
              : base)
            )
