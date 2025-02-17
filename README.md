# Permutation JS

A library for generating permutations of arrays in various ways.

[日本語のREADMEはこちら](./README.ja.md)

## Installation

```sh
npm install permutation-js
```

## Usage

### Importing the Library

You can import the library using ES modules or CommonJS.

#### ES Modules

```javascript
import {
	permutations,
	permutationsReadonly,
	allPermutations,
	allPermutationsReadonly,
} from "permutation-js";
```

Or you can import each function individually:

```javascript
import permutations from "permutation-js/permutations";
import permutationsReadonly from "permutation-js/readonly";
import allPermutations from "permutation-js/allPermutations";
import allPermutationsReadonly from "permutation-js/allPermutations/readonly";
```

#### CommonJS

```javascript
const {
	permutations,
	permutationsReadonly,
	allPermutations,
	allPermutationsReadonly,
	allPermutationsDFS,
} = require("permutation-js");
```

### Generating Permutations

#### `permutations`

Generates permutations of the input array in lexicographical order based on the provided comparator function.

```javascript
const input = [1, 2, 3];
for (const perm of permutations(input)) {
	console.log(perm);
}
// Output:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]

// Alternatively, you can spread the generator into an array
const result = [...permutations(input)];
console.log(result);
```

If the input array contains duplicates, the permutation will take that into account:

```javascript
const input = [1, 2, 2];
for (const perm of permutations(input)) {
	console.log(perm);
}
// Output:
// [1, 2, 2]
// [2, 1, 2]
// [2, 2, 1]
```

#### `permutationsReadonly`

Generates permutations of the input array in lexicographical order based on the provided comparator function, designed to work with TypeScript's `ReadonlyArray`.

The result is an object that can be reused, so there is no copy cost and it is efficient.

```javascript
const input = [1, 2, 3];
for (const perm of permutationsReadonly(input)) {
	console.log(perm);
}
// Output:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```

#### `allPermutations`

Generates all permutations of the input array.

```javascript
const input = [1, 2, 3];
for (const perm of allPermutations(input)) {
	console.log(perm);
}
// Output:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```

If the input array contains duplicates, the permutation will not care about that:

```javascript
const input = [1, 2, 2];
for (const perm of allPermutations(input)) {
	console.log(perm);
}
// Output:
// [1, 2, 2]
// [1, 2, 2]
// [2, 1, 2]
// [2, 2, 1]
// [2, 1, 2]
// [2, 2, 1]
```

#### `allPermutationsReadonly`

Generates all permutations of the input array in lexicographical order, designed to work with TypeScript's `ReadonlyArray`.

The result is an object that can be reused, so there is no copy cost and it is efficient.

```javascript
const input = [1, 2, 3];
for (const perm of allPermutationsReadonly(input)) {
	console.log(perm);
}
// Output:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```
