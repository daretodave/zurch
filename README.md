#zurch
collection of meaningful functional programming techniques and abstractions.      

----
# install
```sh
npm install zurch
```
also
```sh
yarn add zurch
```
also
```
pnpm install zurch
```
---- 
# usage
using TS
```typescript
// ...\\
```
or JS
```javascript 1.8
// ...\\
```

----
## Structure
- zurch
    - zurch/[fn](#fn) 
      >Function composing and normalizing 
    - zurch/[do](#do)
        > Functions are curried and and will result in partial application until data is all passed in. 
        ```typescript
        // 2 + 2 = 4
        add(2, 2) === 4;       
        add(2)(2) === 4;
        
        // not a number | partially applied
        const add02 = add(2);
        
        // 2 + 1 = 3
        add02(1) === 3
        // 2 + [0] = 2
        add02() === 0
        ```
        > A list argument will compute, a reducation using the **do** as the accumulator
        ```typescript
        add([4, 5, 1]) === 12;   // add( 
                                   //    add(4, 5),
                                   //    add(1, )   
                                   // )
        ```   
        > **DO** functions by category --  
        - *math*
            - [add](#add)  


-----
### FN 

-----

#### curry
- import
    ```typescript
    import {curry} from 'zurch/fn'
    ```
- using
    ```typescript
    // a function target, with many arguments
    const add = (a, b) => a + b;
    // 1 + 1 = 2
    add(1, 1)
    
    // a curried function that resolves to target on invocation
    const adder = curry(add);
    
    // 1 + 1 = 2
    adder(1)(1)
    
    // partial use
    const add01 = adder(1)
    // 99 + 1 = 100
    add01(99)
    
    // normal use is okay, but defeats purpose 
    adder(1, 1) 
    ```

-----
DO actions
-----

#### math

##### add
- import
    ```typescript
    import {add} from 'zurch/do/math'
    ```
- using
    ```typescript
    // 1 + 2 = 4
    add(1, 2)
  
    // partial use
    const take01 = add(-1)
    // 1 + -1 = 0
    take01(-1)
    // 2 + 7 + -1 = 0
    take01(2, 7)
      
    ```