import solve from './index.ts';

test("Day 2, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(2);
});

test("Day 2, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(4);
});

test("Day 2, Part 1, Real data", () => {
    expect(solve().part1).toBe(341);
});

test("Day 2, Part 2, Real data", () => {
    expect(solve().part2).toBe(404);
});
