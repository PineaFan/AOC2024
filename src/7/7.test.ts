import solve from './index.ts';

test("Day 7, Part 1, Test data", () => {
    expect(solve(true).part1).toBe(3749);
});

test("Day 7, Part 2, Test data", () => {
    expect(solve(true).part2).toBe(11387);
});

test("Day 7, Part 1, Real data", () => {
    expect(solve().part1).toBe(42283209483350);
});

test("Day 7, Part 2, Real data", () => {
    expect(solve().part2).toBe(1026766857276279);
});
