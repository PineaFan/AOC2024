import readData from "../utils/data";

type Coords = { x: number, y: number };
const up = (coords: Coords) => ({ x: coords.x, y: coords.y - 1 });
const down = (coords: Coords) => ({ x: coords.x, y: coords.y + 1 });
const left = (coords: Coords) => ({ x: coords.x - 1, y: coords.y });
const right = (coords: Coords) => ({ x: coords.x + 1, y: coords.y });


const doProcess = (grid: boolean[][], currentPosition: Coords, ) => {
    const directions = [up, right, down, left];

    let direction = 0;
    let directionFunction = directions[direction];

    const maxX = grid[0].length;
    const maxY = grid.length;

    const distinctPositions = new Set<string>();
    const distinctPositionsAndDirections = new Set<string>();
    const testPlacingWall: Coords[] = [];

    const isInBounds = (coords: Coords) => coords.x >= 0 && coords.x < maxX && coords.y >= 0 && coords.y < maxY;

    while (isInBounds(currentPosition)) {
        const nextPosition = directionFunction(currentPosition);
        testPlacingWall.push(nextPosition);
        distinctPositions.add(`${currentPosition.x},${currentPosition.y}`);

        // If we've been here before, we're in a loop
        const directionPosition = `${currentPosition.x},${currentPosition.y},${direction}`;
        if (distinctPositionsAndDirections.has(directionPosition)) {
            return { distinctPositions, isLoop: true };
        }
        distinctPositionsAndDirections.add(directionPosition);

        // If next position is out of bounds, we're done
        if (!isInBounds(nextPosition)) {
            break;
        }

        // If the tile is a wall, turn right
        if (grid[nextPosition.y][nextPosition.x]) {
            direction = (direction + 1) % 4;
            directionFunction = directions[direction];
            continue;
        }

        // Otherwise, move forward
        currentPosition = nextPosition;
    }

    return { distinctPositions, isLoop: false };
}

const solve = (test?: boolean, customName?: string) => {
    const data = readData(6, test, customName);
    let currentPosition: Coords = { x: 0, y: 0 };
    const grid: boolean[][] = data.map(line => line.split("")).map((line, index) => {
        // The current position is the only position with "^"
        const position = line.indexOf("^");
        if (position !== -1) {
            currentPosition = { x: position, y: index };
        }

        return line.map(char => char === "#")
    });
    const startLocation: Coords = { x: currentPosition.x, y: currentPosition.y };

    const { distinctPositions } = doProcess(grid, currentPosition);

    const part1 = distinctPositions.size;

    // Part 2: Adding an obstruction at every position - How many will cause a loop?
    // These are the only positions that matter, as the rest were not accessible
    let part2 = 0;
    for (const pos of distinctPositions) {
        const [x, y] = pos.split(",").map(Number);
        // Ignore the start location
        if (x === startLocation.x && y === startLocation.y) continue;
        const newGrid = grid.map(line => line.map(cell => cell));
        newGrid[y][x] = true;

        const { isLoop } = doProcess(newGrid, startLocation);
        if (isLoop) part2++;
    }

    return { part1, part2 };
};

if (require.main === module) { console.log(solve()); }

export default solve;
