const financial = require("./financial");
const mockedData = require("./mockData.json");

describe("testing media", () => {
  it("shoud receive a list of numbers and return the average", () => {
    const fin = financial();

    const result1 = fin.calculateMedia([5, 5, 5, 5, 5]);
    expect(result1).toEqual(5);

    const result2 = fin.calculateMedia([5.5, 5.5, 5.5]);
    expect(result2).toEqual(5.5);

    const result3 = fin.calculateMedia([5.5, 5.5, "5.5"]);
    expect(result3).toEqual(5.5);

    const result4 = fin.calculateMedia([5, 5, 5, 5, "5"]);
    expect(result4).toEqual(5);
  });

  it("shoud receive a error if a value is not a number", () => {
    const fin = financial();

    expect(() => fin.calculateMedia([5, "a", 5, 5, 5])).toThrow();
  });

  it("shoud return zero if the array is empty", () => {
    const fin = financial();

    expect(fin.calculateMedia([])).toEqual(0);
  });

  it("shoud return zero if user dont pass any value", () => {
    const fin = financial();
    expect(fin.calculateMedia()).toEqual(0);
  });

  it("shoud receive a error if pass not a number and not an array", () => {
    const fin = financial();
    expect(() => fin.calculateMedia("error")).toThrow();
  });
});
