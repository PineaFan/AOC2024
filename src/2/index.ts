import readData from "../utils/data";


const isSafe = (line: number[]) => {
    const increasing = line[1] >= line[0];  // All numbers must be increasing or decreasing, they cannot change
    for (let i = 1; i < line.length; i++) {
        const a = line[i - 1];
        const b = line[i];
        const diff = Math.abs(a - b);

        // If they are going in the wrong direction, or the same, return
        if ((increasing && (b <= a)) || (!increasing && (b >= a))) {
            return false;
        } else if (diff > 3) {
            return false;
        }
    };
    return true;
}

const solve = (test?: boolean, customName?: string) => {
    const data = readData(2, test, customName).map((line) => line.split(" ").map((x) => parseInt(x)));

    let part1safe = 0;
    let part2safe = 0;
    data.forEach((line, i) => {
        const passesPart1 = isSafe(line);
        if (passesPart1) {
            // If it passed part 1, check part 2
            part1safe++;
            part2safe++;
            return;
        }
        // Part 1 failed
        for (let j = 0; j < line.length; j++) {
            // Remove element j from the array
            const removed = line.filter((_, index) => index !== j);
            if (isSafe(removed)) {
                part2safe++;
                break;
            }
        }
    });

    return { part1: part1safe, part2: part2safe };
};

export default solve;
