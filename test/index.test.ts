import { describe, it, expect } from "vitest";
import {
	nextPermutation,
	permutations,
	permutationsReadonly,
	allPermutations,
	allPermutationsReadonly,
	allPermutationsDFS,
} from "../src/index";

/// <reference lib="esnext.iterable" />

describe("nextPermutation", () => {
	describe("without duplicates", () => {
		it("should return the next lexicographical permutation", () => {
			const arr = [1, 2, 3];
			const result = nextPermutation(arr);
			expect(result).toBe(true);
			expect(arr).toEqual([1, 3, 2]);
		});

		it("should return false if no next permutation exists", () => {
			const arr = [3, 2, 1];
			const result = nextPermutation(arr);
			expect(result).toBe(false);
			expect(arr).toEqual([3, 2, 1]);
		});
	});

	describe("with duplicates", () => {
		it("should return the next lexicographical permutation", () => {
			const arr = [1, 2, 2];
			const result = nextPermutation(arr);
			expect(result).toBe(true);
			expect(arr).toEqual([2, 1, 2]);
		});

		it("should return false if no next permutation exists", () => {
			const arr = [2, 2, 1];
			const result = nextPermutation(arr);
			expect(result).toBe(false);
			expect(arr).toEqual([2, 2, 1]);
		});
	});
});

describe("permutations", () => {
	describe("without duplicates", () => {
		it("should generate all permutations in lexicographical order", () => {
			const input = [1, 2, 3];
			const result = [...permutations(input)];
			expect(result).toEqual([
				[1, 2, 3],
				[1, 3, 2],
				[2, 1, 3],
				[2, 3, 1],
				[3, 1, 2],
				[3, 2, 1],
			]);
		});
	});

	describe("with duplicates", () => {
		it("should generate all permutations in lexicographical order", () => {
			const input = [1, 2, 2];
			const result = [...permutations(input)];
			expect(result).toEqual([
				[1, 2, 2],
				[2, 1, 2],
				[2, 2, 1],
			]);
		});
	});
});

describe("permutationsReadonly", () => {
	it("should generate all permutations in lexicographical order", () => {
		const input = [1, 2, 3];

		// I couldn't use Iterator Helper for some reason
		const result: number[][] = [];
		for (const x of permutationsReadonly(input)) {
			result.push(x.slice());
		}

		expect(result).toEqual([
			[1, 2, 3],
			[1, 3, 2],
			[2, 1, 3],
			[2, 3, 1],
			[3, 1, 2],
			[3, 2, 1],
		]);
	});
});

describe("allPermutations", () => {
	it("should generate all permutations in lexicographical order", () => {
		const input = [1, 2, 3];
		const result = [...allPermutations(input)];
		expect(result).toEqual([
			[1, 2, 3],
			[1, 3, 2],
			[2, 1, 3],
			[2, 3, 1],
			[3, 1, 2],
			[3, 2, 1],
		]);
	});
});

describe("allPermutationsReadonly", () => {
	it("should generate all permutations in lexicographical order", () => {
		const input = [1, 2, 3];
		const result: number[][] = [];
		for (const x of allPermutationsReadonly(input)) {
			result.push(x.slice());
		}
		expect(result).toEqual([
			[1, 2, 3],
			[1, 3, 2],
			[2, 1, 3],
			[2, 3, 1],
			[3, 1, 2],
			[3, 2, 1],
		]);
	});
});

describe("allPermutationsDFS", () => {
	it("should generate all permutations in lexicographical order", () => {
		const input = [1, 2, 3];
		const result = [...allPermutationsDFS(input)];
		expect(result).toEqual([
			[1, 2, 3],
			[1, 3, 2],
			[2, 1, 3],
			[2, 3, 1],
			[3, 1, 2],
			[3, 2, 1],
		]);
	});
});
