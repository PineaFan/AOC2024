import readData from "../utils/data";

const solve = (test?: boolean, customName?: string) => {
    const data = readData(5, test, customName);
    const rules = data.filter(line => line.includes("|")).map(line => line.split("|"));
    const sets = data.filter(line => !line.includes("|"))

    const toFix: string[][] = []

    const sumPart1 = sets.filter(set => {
        // For each rule, we need to check if /rule[1].*rule[0]/ occurs
        // If it does, it's invalid and we return false

        for (const rule of rules) {
            const [rule0, rule1] = rule;
            const rule1index = set.indexOf(rule1);
            const rule0index = set.indexOf(rule0);
            if (rule1index !== -1 && rule0index !== -1 && rule1index < rule0index) {
                toFix.push(set.split(","));
                return false;
            }
        }
        return true;
    }).reduce((acc, curr) => {
        const values = curr.split(",")
        const middle = values[(values.length - 1) / 2];
        return acc + parseInt(middle);
    }, 0);

    const mustComeBefore = new Map<string, string[]>();
    rules.forEach(rule => {
        const [rule0, rule1] = rule;
        if (!mustComeBefore.has(rule0)) {
            mustComeBefore.set(rule0, []);
        }
        mustComeBefore.get(rule0)!.push(rule1);
    });

    // For part 2, we need to actually fix the sets
    const sumPart2 = toFix.reduce((acc, curr) => {
        const values = curr.slice(1);
        const sorted = [curr[0]]
        // Using insertion sort, we can insert one at a time, checking if it needs to come before the previous
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            let j = sorted.length;
            while (j > 0 && mustComeBefore.get(sorted[j - 1])?.includes(value)) {
                j--;
            }
            sorted.splice(j, 0, value);
        }
        // Technically, based on the examples given in AOC, this is actually reversed
        // This doesn't matter for the solution though, because we're only interested in the middle value
        const middle = sorted[(sorted.length - 1) / 2];
        return acc + parseInt(middle);
    }, 0);

    return {
        part1: sumPart1,
        part2: sumPart2
    };
};

if (require.main === module) { console.log(solve()); }

export default solve;
