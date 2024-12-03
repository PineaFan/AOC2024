import day1 from "./src/1/index.ts";
import day2 from "./src/2/index.ts";
import day3 from "./src/3/index.ts";
// import day4 from "./src/4/index.ts";
// import day5 from "./src/5/index.ts";
// import day6 from "./src/6/index.ts";
// import day7 from "./src/7/index.ts";
// import day8 from "./src/8/index.ts";
// import day9 from "./src/9/index.ts";
// import day10 from "./src/10/index.ts";
// import day11 from "./src/11/index.ts";
// import day12 from "./src/12/index.ts";
// import day13 from "./src/13/index.ts";
// import day14 from "./src/14/index.ts";
// import day15 from "./src/15/index.ts";
// import day16 from "./src/16/index.ts";
// import day17 from "./src/17/index.ts";
// import day18 from "./src/18/index.ts";
// import day19 from "./src/19/index.ts";
// import day20 from "./src/20/index.ts";
// import day21 from "./src/21/index.ts";
// import day22 from "./src/22/index.ts";
// import day23 from "./src/23/index.ts";
// import day24 from "./src/24/index.ts";
// import day25 from "./src/25/index.ts";

const days = {
    1: day1,
    2: day2,
    3: day3,
    // 4: day4,
    // 5: day5,
    // 6: day6,
    // 7: day7,
    // 8: day8,
    // 9: day9,
    // 10: day10,
    // 11: day11,
    // 12: day12,
    // 13: day13,
    // 14: day14,
    // 15: day15,
    // 16: day16,
    // 17: day17,
    // 18: day18,
    // 19: day19,
    // 20: day20,
    // 21: day21,
    // 22: day22,
    // 23: day23,
    // 24: day24,
    // 25: day25
}

const args = process.argv.slice(2);
const dayPart = parseFloat(args[0]);
const dayNumber = Math.floor(dayPart);
const partNumber = Math.round((dayPart - dayNumber) * 10);
const dataset = args.length > 1 ? args[1] : null;

const solve = (() => {
    const result = days[dayNumber](dataset);
    if (partNumber === 1) return result.part1;
    if (partNumber === 2) return result.part2;
    return {
        "Part 1": result.part1,
        "Part 2": result.part2
    }
})();

console.table(solve);
console.log("Done!");
