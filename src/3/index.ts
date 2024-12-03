import { readRawData } from "../utils/data";


const countMatches = (input: string) => {
    // In the form mul(x, y)
    const multiplyRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const doRegex = /do(?:n't)?\(\)/g;
    // We need a regex which returns a match for *either* doRegex or multiplyRegex
    const combinedRegex = new RegExp(`${multiplyRegex.source}|${doRegex.source}`, "g");

    let part1total = 0;
    let part2total = 0;
    let match;
    let matching = true;
    while ((match = combinedRegex.exec(input)) !== null) {
        if (match[0] === "do()") {
            matching = true
            continue;
        } else if (match[0] === "don't()") {
            matching = false;
            continue;
        }
        const match1 = parseInt(match[1]);
        const match2 = parseInt(match[2]);
        part1total += match1 * match2;
        if (matching) {
            part2total += match1 * match2;
        }
    }

    return { part1total, part2total };
}

const solve = (test?: boolean, customName?: string) => {
    // Determine data based on test flag
    const part1data = readRawData(3, test, test ? "test-1" : customName);
    const part2data = test ? readRawData(3, test, "test-2") : part1data;

    // Calculate totals
    const { part1total } = countMatches(part1data);
    const part2total = test
        ? countMatches(part2data).part2total
        : countMatches(part1data).part2total;

    return { part1: part1total, part2: part2total };
};

export default solve;
