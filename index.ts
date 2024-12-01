import day1 from "./src/1/index.ts";

const days = {
    1: day1
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
