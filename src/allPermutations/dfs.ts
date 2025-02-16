interface State<T> {
	/** Position of the next element to fill */
	pos: number;

	/** Elements already selected */
	current: T[];

	/** Flags indicating which indices have been used */
	used: boolean[];
}

/**
 * Generator that enumerates all permutations (n! ways) of the elements in the input array.
 */
export default function* allPermutations<T>(input: T[]): Generator<T[]> {
	const n = input.length;
	if (n === 0) {
		yield [];
		return;
	}

	const reversed = input.slice().reverse();

	const stack: State<T>[] = [
		{
			pos: 0,
			current: [],
			used: Array.from({ length: n }, () => false),
		},
	];

	while (stack.length > 0) {
		const frame = stack.pop()!;
		const { pos, current, used } = frame;

		if (pos === n) {
			yield current;
			continue;
		}

		for (let i = 0; i < n; i++) {
			if (used[i]) continue;

			const nextUsed = used.slice();
			nextUsed[i] = true;

			stack.push({
				pos: pos + 1,
				current: [...current, reversed[i]],
				used: nextUsed,
			});
		}
	}
}
