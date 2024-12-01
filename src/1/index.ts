import readData from "../utils/data";

const solve = (test?: boolean, customName?: string) => {
    const data = readData(1, test, customName);

    const lines = data.map(
        (line) => line.split("   ")
    );

    let from: number[] = [];
    let to: number[] = [];

    lines.forEach((line) => {
        from.push(parseInt(line[0]));
        to.push(parseInt(line[1]));
    });
    from = from.sort();
    to = to.sort();

    const toCounts: Record<number, number> = {};
    to.forEach((toNumber) => {
        if (toCounts[toNumber]) {
            toCounts[toNumber]++;
        } else {
            toCounts[toNumber] = 1;
        }
    });

    let part1difference = 0;
    let part2difference = 0;
    for (let i = 0; i < from.length; i++) {
        const fromNumber = from[i];
        const toNumber = to[i];
        part1difference += Math.abs(fromNumber - toNumber);

        part2difference += fromNumber * (toCounts[fromNumber] ?? 0);
    }

    return { part1: part1difference, part2: part2difference };
}

if (require.main === module) { console.log(solve()); }

export default solve;
