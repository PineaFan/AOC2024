import data from './data';

test("Reading file data, Test data", () => {
    expect(data(1, true)).toHaveLength(6);
});

test("Reading file data, Real data", () => {
    expect(data(1)).toHaveLength(1000);
});
