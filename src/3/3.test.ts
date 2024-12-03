import solve from './index.ts';

test("Day 3, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(161);
});

test("Day 3, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(48);
});

test("Day 3, Part 1, Real data", () => {
    expect(solve().part1).toBe(179834255);
});

test("Day 3, Part 2, Real data", () => {
    expect(solve().part2).toBe(80570939);
});
