import permutations from "../permutations.ts";
import indexComparator from "./indexComparator.ts";
import type { IndexedValue } from "./IndexedValue.ts";

/**
 * Generates all permutations of the input array in lexicographical order.
 */
export default function* allPermutations<T>(input: T[]): Generator<T[]> {
	const indexedInput: IndexedValue<T>[] = input.map((value, index) => ({
		value,
		index,
	}));

	indexedInput.sort(indexComparator);

	const sortedValues = indexedInput.map((item) => item.value);

	for (const perm of permutations(sortedValues)) {
		yield perm;
	}
}
