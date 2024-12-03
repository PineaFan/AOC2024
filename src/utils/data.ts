// Importable function which reads part-1-data, part-2-data, part-1-test and part-2-test (.txt) files

import fs from "fs";

const readRawData = (day: number, test?: boolean, customName?: string) => {
    const slug = customName ?? (test ? 'test' : 'data');

    const fileName = `./src/data/${day}/${slug}.txt`;
    return fs.readFileSync(fileName, 'utf8');
}

const data = (day: number, test?: boolean, customName?: string) => {
    return readRawData(day, test, customName).split("\n").filter((line) => line !== "");
}

export default data;
export { readRawData };
