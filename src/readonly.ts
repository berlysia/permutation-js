import defaultComparator from "./defaultComparator.ts";
import nextPermutation from "./nextPermutation.ts";

/**
 * Generates permutations of the input array in lexicographical order
 * based on the provided comparator function.
 * This function is designed to work with TypeScript's ReadonlyArray, and tries to avoid copying the array as much as possible.
 */

export default function* permutationsReadonly<T>(
	input: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
): Generator<ReadonlyArray<T>> {
	const arr = input.slice().sort(comparator);
	yield arr;

	while (nextPermutation(arr, comparator)) {
		yield arr;
	}
}
