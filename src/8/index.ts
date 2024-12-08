import readData from "../utils/data";

const solve = (test?: boolean, customName?: string) => {
    const data = readData(8, test, customName).map(row => row.split(""))
    const antenna: Record<string, { x: number, y: number }[]> = {};

    data.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell !== ".") {
                if (!antenna[cell]) {
                    antenna[cell] = [];
                }
                antenna[cell].push({ x, y });
            }
        });
    });

    const inBoundX = (x: number) => x >= 0 && x < data[0].length;
    const inBoundY = (y: number) => y >= 0 && y < data.length;

    const part1nodes: Set<string> = new Set();
    Object.keys(antenna).forEach(key => {
        // For each pairing of antennas
        for (let i = 0; i < antenna[key].length; i++) {
            for (let j = i + 1; j < antenna[key].length; j++) {
                if (i === j) continue;
                const a = antenna[key][i];
                const b = antenna[key][j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const n1 = { x: b.x - dx, y: b.y - dy };
                const n2 = { x: a.x + dx, y: a.y + dy };
                if (inBoundX(n1.x) && inBoundY(n1.y)) {
                    part1nodes.add(`${n1.x},${n1.y}`);
                }
                if (inBoundX(n2.x) && inBoundY(n2.y)) {
                    part1nodes.add(`${n2.x},${n2.y}`);
                }
            }
        }
    });

    // Part 2 is the same, except it's not just the surrounding 2, it's infinite within the grid
    const part2nodes: Set<string> = new Set();
    Object.keys(antenna).forEach(key => {
        // For each pairing of antennas
        for (let i = 0; i < antenna[key].length; i++) {
            for (let j = i + 1; j < antenna[key].length; j++) {
                if (i === j) continue;
                const a = antenna[key][i];
                const b = antenna[key][j];
                part2nodes.add(`${a.x},${a.y}`);
                part2nodes.add(`${b.x},${b.y}`);
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                // Repeat until it's out of bounds
                let node = { x: b.x - dx, y: b.y - dy };
                while (inBoundX(node.x) && inBoundY(node.y)) {
                    part2nodes.add(`${node.x},${node.y}`);
                    node = { x: node.x - dx, y: node.y - dy };
                }
                node = { x: a.x + dx, y: a.y + dy };
                while (inBoundX(node.x) && inBoundY(node.y)) {
                    part2nodes.add(`${node.x},${node.y}`);
                    node = { x: node.x + dx, y: node.y + dy };
                }
            }
        }
    });

    return { part1: part1nodes.size, part2: part2nodes.size };
};

if (require.main === module) { console.log(solve()); }

export default solve;
