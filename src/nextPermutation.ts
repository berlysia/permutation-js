import defaultComparator from "./defaultComparator.ts";

/**
 * Rearranges the array `arr` to the "next lexicographical permutation".
 * Returns true if the next permutation exists, otherwise returns false.
 */

export default function nextPermutation<T>(
	arr: T[],
	compare: (a: T, b: T) => number = defaultComparator,
): boolean {
	let i = arr.length - 2;
	// Find the first element from the end that is not in descending order
	for (; i >= 0 && compare(arr[i], arr[i + 1]) >= 0; i--);

	// If no such element is found, the array is in descending order
	if (i < 0) return false;

	let j = arr.length - 1;
	// Find the last element that is greater than arr[i]
	for (; j > i && compare(arr[j], arr[i]) <= 0; j--);
	// Swap elements at i and j
	const t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;

	// Reverse the elements from i+1 to the end of the array
	let left = i + 1;
	let right = arr.length - 1;
	while (left < right) {
		const t = arr[left];
		arr[left] = arr[right];
		arr[right] = t;

		left++;
		right--;
	}
	return true;
}
