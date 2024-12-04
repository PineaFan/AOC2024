import readData from "../utils/data";


const transpose = (data: string[]) => {
    const result: string[][] = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (!result[j]) {
                result[j] = [];
            }
            result[j][i] = data[i][j];
        }
    }
    return result.map((x) => x.join(""));
}

const sum = (data: number[]) => data.reduce((acc, x) => acc + x, 0);

const countLine = (line: string, search: string) => {
    const reversedSearch = search.split("").reverse().join("");
    let count = 0;
    for (let i = 0; i < line.length; i++) {
        const section = line.slice(i, i + search.length);
        if (section === search || section === reversedSearch) {
            count++;
        }
    }
    return count;
}

const countArray = (data: string[], search: string) => {
    // Return the sum of all the counts
    return sum(data.map((line) => countLine(line, search)));
};

const solve = (test?: boolean, customName?: string) => {
    // Search horizontally with .includes()
    const horizontal = readData(4, test, customName)
    // Transpose for vertical search
    const vertical = transpose(horizontal);
    // Now we need to turn a big square of characters into a "staircase" effect
    const lines = horizontal.length
    const steppedRight = transpose(horizontal.map((line, i) => {
        const spaces = " ".repeat(i);
        const inverseSpaces = " ".repeat(lines - i - 1);
        return spaces + line + inverseSpaces;
    }));
    const steppedLeft = transpose(horizontal.map((line, i) => {
        const spaces = " ".repeat(lines - i - 1);
        const inverseSpaces = " ".repeat(i);
        return spaces + line + inverseSpaces;
    }));

    const part1total = sum([horizontal, vertical, steppedRight, steppedLeft]
        .map(line => countArray(line, "XMAS")));

    // For part 2, we need to start at index (1, 1), and loop over each character in the grid (Except edges)
    let part2total = 0;
    for (let i = 1; i < lines - 1; i++) {
        for (let j = 1; j < lines - 1; j++) {
            if (horizontal[i][j] === "A") {
                const upLeft = horizontal[i - 1][j - 1];
                const upRight = horizontal[i - 1][j + 1];
                const downLeft = horizontal[i + 1][j - 1];
                const downRight = horizontal[i + 1][j + 1];
                const all = [upLeft, upRight, downLeft, downRight];
                if (all.includes("X") || all.includes("A")) continue;
                // Both line 1 and line 2 must be exactly M and S
                if (upLeft === downRight) continue;
                if (upRight === downLeft) continue;
                // Both diagonals now say "MAS"
                part2total++;
            }
        }
    }

    return {
        part1: part1total,
        part2: part2total
    };
};

if (require.main === module) { console.log(solve()); }

export default solve;
