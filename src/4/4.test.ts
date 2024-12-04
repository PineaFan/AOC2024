import solve from './index.ts';

test("Day 4, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(18);
});

test("Day 4, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(9);
});

test("Day 4, Part 1, Real data", () => {
    expect(solve().part1).toBe(2599);
});

test("Day 4, Part 2, Real data", () => {
    expect(solve().part2).toBe(1948);
});
