import defaultComparator from "./defaultComparator.ts";
import nextPermutation from "./nextPermutation.ts";

/**
 * Generates permutations of the input array in lexicographical order
 * based on the provided comparator function.
 */
export default function* permutations<T>(
	input: T[],
	comparator: (a: T, b: T) => number = defaultComparator,
): Generator<T[]> {
	const arr = input.slice().sort(comparator);
	yield [...arr];

	while (nextPermutation(arr, comparator)) {
		yield [...arr];
	}
}
