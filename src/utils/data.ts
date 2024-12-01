// Importable function which reads part-1-data, part-2-data, part-1-test and part-2-test (.txt) files

import fs from "fs";

const data = (day: number, test?: boolean, customName?: string) => {
    const slug = customName ?? test ? 'test' : 'data';
    // Day is float (day.part)
    const dayNumber = Math.floor(day);
    const partNumber = Math.round((day - dayNumber) * 10);  // Float to int

    let data;
    if (partNumber) {
        const fileName = `./src/data/${dayNumber}/${slug}-${partNumber}.txt`;
        data = fs.readFileSync(fileName, 'utf8');
    } else {
        const fileName = `./src/data/${dayNumber}/${slug}.txt`;
        data = fs.readFileSync(fileName, 'utf8');
    }
    return data!.split("\n").filter((line) => line !== "");
}

export default data;
