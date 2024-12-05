import solve from './index.ts';

test("Day 5, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(143);
});

test("Day 5, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(123);
});

test("Day 5, Part 1, Real data", () => {
    expect(solve().part1).toBe(4578);
});

test("Day 5, Part 2, Real data", () => {
    expect(solve().part2).toBe(6179);
});
