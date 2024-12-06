import solve from './index.ts';

test("Day 6, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(41);
});

test("Day 6, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(6);
});

test("Day 6, Part 1, Real data", () => {
    expect(solve().part1).toBe(4454);
});

test("Day 6, Part 2, Real data", () => {
    expect(solve().part2).toBe(1503);
});