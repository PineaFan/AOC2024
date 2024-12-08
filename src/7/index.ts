import readData from "../utils/data";

const solve = (test?: boolean, customName?: string) => {
    const data = readData(7, test, customName).map(line => {
        const [ target, rest ] = line.split(': ');
        const values = rest.split(' ').map(v => parseInt(v));
        return { target: parseInt(target), values };
    })

    let part1 = 0;

    data.forEach(({ target, values }) => {
        // Using + and *, you should be able to get from the values to the target
        for (let test = 0; test < 1 << values.length; test++) {  // This will run 2^n times
            let sum = values[0];
            for (let i = 0; i < values.length - 1; i++) {
                if (test & (1 << i)) {  // If the bit is a 1, add
                    sum += values[i + 1];
                } else {  // Otherwise, multiply
                    sum *= values[i + 1];
                }
            }
            if (sum === target) {
                part1 += target;
                break;
            }
        }
    });

    // Part 2 allows concatenation of the values
    let part2 = 0;
    data.forEach(({ target, values }) => {
        const max = 3 ** (values.length - 1);
        for (let test = 0; test < max; test++) {
            let sum = values[0];
            let temp = test;
            for (let j = 0; j < values.length - 1; j++) {
                const operation = temp % 3;
                temp = Math.floor(temp / 3);
                if (operation === 0) {
                    sum += values[j + 1];
                } else if (operation === 1) {
                    sum *= values[j + 1];
                } else {
                    sum = parseInt(`${sum}${values[j + 1]}`);
                }
            }
            if (sum === target) {
                part2 += target;
                break;
            }
        }
    });

    return { part1, part2: part2 };
};

if (require.main === module) { console.log(solve()); }

export default solve;
