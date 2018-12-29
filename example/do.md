---
description: import * as do from "zurch/do"
---

# Do

This package exposes common abstractions and computations, as functions.

#### Using Partials

 These functions are special built so they can be partially invoked.

{% tabs %}
{% tab title="TypeScript" %}
```typescript
import {sum} from "zurch/do/math"

// used first value only
const add2 = sum(2);

// 2 + 1 = 3
add2(1) === 3;
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const {sum} = require("zurch").do.math;

// used first value only
const add2 = sum(2);

// 2 + 1 = 3
add2(1) === 3;
```
{% endtab %}
{% endtabs %}

#### Using Lists

 A list argument will be reduced using the the task

{% tabs %}
{% tab title="TypeScript" %}
```typescript
import {sum} from "zurch/do/math"

sum([4, 5, 1]) === 12;
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const {sum} = require("zurch").do.math;

sum([4, 5, 1]) === 12;
```
{% endtab %}
{% endtabs %}

#### Using 

{% tabs %}
{% tab title="TypeScript" %}
```typescript
import {sum} from "zurch/do/math"

// 2 + 2 = 4
sum(2, 2) === 4;   
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const {sum} = require("zurch").do.math;

// 2 + 2 = 4
sum(2, 2) === 4;   
```
{% endtab %}
{% endtabs %}

