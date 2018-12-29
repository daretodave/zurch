# Curry

{% tabs %}
{% tab title="TypeScript" %}
```typescript
import {curry} from 'zurch/fn'

// a function target, with N arguments
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
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const {curry} = require("zurch").fn;

// a function target, N arguments
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
{% endtab %}
{% endtabs %}

```text

```

