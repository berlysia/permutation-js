import defaultComparator from "../defaultComparator.ts";

export default function indexComparator<T>(
	a: { index: number; value: T },
	b: { index: number; value: T },
): number {
	return defaultComparator(b.value, a.value);
}
