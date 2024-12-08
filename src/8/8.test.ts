import solve from './index.ts';

test("Day 8, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(14);
});

test("Day 8, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(34);
});

test("Day 8, Part 1, Real data", () => {
    expect(solve().part1).toBe(291);
});

test("Day 8, Part 2, Real data", () => {
    expect(solve().part2).toBe(1015);
});
