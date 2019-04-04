import { curry } from '../curry/curry';

// x <- fn1(x) <- f2(x)
export const compose = fn1 => fn2 => x => fn1(fn2(x));

export const
  compose_ = (...fns) => {
    const [fn1, fn2, ...rest] = fns.reverse();
    const composedFN = (...args) => fn2(fn1(...args));
    
    return !(rest.length)
      ? composedFN 
      : compose_(...rest.reverse(), composedFN)
}