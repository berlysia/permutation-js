export default function defaultComparator(a: unknown, b: unknown) {
	if (a === b) return 0;
	// @ts-ignore
	if (a < b) return -1;
	return 1;
}
