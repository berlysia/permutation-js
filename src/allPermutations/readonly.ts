import permutationsReadonly from "../readonly.ts";
import indexComparator from "./indexComparator.ts";
import type { IndexedValue } from "./IndexedValue.ts";

export default function* allPermutationsReadonly<T>(
	input: readonly T[],
): Generator<ReadonlyArray<T>> {
	const indexedInput: IndexedValue<T>[] = input.map((value, index) => ({
		value,
		index,
	}));

	indexedInput.sort(indexComparator);

	const sortedValues = indexedInput.map((item) => item.value);

	for (const perm of permutationsReadonly(sortedValues)) {
		yield perm;
	}
}
