import solve from './index.ts';

test("Day 1, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(11);
});

test("Day 1, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(31);
});

test("Day 1, Part 1, Real data", () => {
    expect(solve().part1).toBe(2756096);
});

test("Day 1, Part 2, Real data", () => {
    expect(solve().part2).toBe(23117829);
});
